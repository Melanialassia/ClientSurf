import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
//COMPONENTS
import CategoryFilter from "../containers/CategoryFilter";
import ColorFilter from "../containers/ColorFilter";
import Product from "../containers/Product";
import Paginate from "../containers/Paginate";
//ACTIONS
import {
  getAllCategorys,
  getAllProducts,
  pageChange,
  getAllColors
} from "../../../../redux/actions/action";
import {
  filterProductsByCategory,
  filterPrice,
  filterColor
} from "../../../../redux/actions/action";
//STYLE
import style from "./ProductPage.module.css";

const ProductPage = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((s) => s.filter);
  console.log("product", allProducts);
  const allCategorys = useSelector((s) => s.allCategorys);
  const allColors = useSelector((s) => s.allColors);

  const [category, setCategory] = useState("");
  const [productOrder, setProductOrder] = useState("");
  const [color, setColor] = useState("");
  const [brand, setBrand] = useState("");

  //PAGINADO
  const currentPage = useSelector((s) => s.currentPage);
  const productPerPage = useSelector((s) => s.productPerPage);

  // CALCULACION DE PRODUCTOS QUE SE MUESTRA POR PÁGINA Y CANTIDAD DE PAGINAS
  const indexOfLastPage = currentPage * productPerPage;
  const indexOfFirstPage = indexOfLastPage - productPerPage;
  const currentProducts = allProducts.slice(indexOfFirstPage, indexOfLastPage);
  const totalProducts = allProducts.length;
  const totalPages = Math.ceil(totalProducts / productPerPage);

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategorys());
    dispatch(getAllColors())
  }, []);

  const handlePageChange = (pageNumber) => {
    // PARA CAMBIAR LA PAGINA
    dispatch(pageChange(pageNumber));
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    dispatch(pageChange(1));
    dispatch(filterProductsByCategory(selectedCategory));
  };

  const handlePriceChange = (event) => {
    const selectPrice = event.target.value;
    setProductOrder(selectPrice);
    dispatch(pageChange(1));
    dispatch(filterPrice(selectPrice));
  };

  const handlerColorChange= (event) => {
    const selectColor = event.target.value;
    setColor(selectColor);
    dispatch(pageChange(1));
    dispatch(filterColor(selectColor));
  }

  return (
    <div className={style.wrapper}>
      <aside className={style.aside}>
        <header className={style.titulo}>
          <h2>Filtros</h2>
        </header>
        <h3>Categoria</h3>
        <select
          className={style.filtro}
          onChange={handleCategoryChange}
          value={category}
        >
          <option value="">TODAS</option>
          <CategoryFilter allCategorys={allCategorys} />
        </select>
          <h3>Color</h3>
          <select
          className={style.filtro}
          onChange={handlerColorChange}
          value={color}
          >
           <option value="">TODAS</option>
          <ColorFilter allColors={allColors}/>
            </select>   
      </aside>
      <main className={style.main}>
        <div className={style.priceSection}>
          <h4>Ordenar por</h4>
          <select
            className={style.select}
            onChange={handlePriceChange}
            value={productOrder}
          >
            <option value="DESC">Menor precio</option>
            <option value="ASC">Mayor precio</option>
          </select>
        </div>
        <Product currentProducts={currentProducts} />
      </main>
      <>
        <Paginate
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </>
    </div>
  );
};

export default ProductPage;
