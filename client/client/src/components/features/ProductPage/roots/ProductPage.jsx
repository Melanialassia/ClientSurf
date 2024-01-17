import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
//COMPONENTS
import CategoryFilter from "../containers/CategoryFilter";
import ColorFilter from "../containers/ColorFilter";
import SearchBar from "../containers/SearchBar";
import Paginate from "../containers/Paginate";
import Product from "../containers/Product";
//ACTIONS
import {
  filterProductsByCategory,
  getAllCategorys,
  getAllProducts,
  getAllColors,
  filterPrice,
  filterColor,
  pageChange
} from "../../../../redux/actions/action";
//STYLE
import style from "./ProductPage.module.css";

const ProductPage = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((s) => s.filter);
  const allCategorys = useSelector((s) => s.allCategorys);
  const allColors = useSelector((s) => s.allColors);

  const [category, setCategory] = useState("");
  const [productOrder, setProductOrder] = useState("");
  const [color, setColor] = useState("");

  //PAGINADO
  const currentPage = useSelector((state) => state.currentPage);
  const productPerPage = useSelector((state) => state.productPerPage);

  const indexOfLastPage = currentPage * productPerPage;
  const indexofFirstPage = indexOfLastPage - productPerPage;
  const currentPoducts = allProducts.slice(indexofFirstPage, indexOfLastPage);
  const totalProducts = allProducts.length;
  const totalPage = Math.ceil(totalProducts / productPerPage);

  const handlePageChange = (pageNumber) => {
    // PARA CAMBIAR LA PAGINA DE PERROS
    dispatch(pageChange(pageNumber));
  };

  useEffect(() => {
    dispatch(getAllCategorys());
    dispatch(getAllProducts());
    dispatch(getAllColors());
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    dispatch(filterProductsByCategory(selectedCategory));
  };

  const handlePriceChange = (event) => {
    const selectPrice = event.target.value;
    setProductOrder(selectPrice);
    dispatch(filterPrice(selectPrice));
  };

  const handlerColorChange = (event) => {
    const selectColor = event.target.value;
    setColor(selectColor);
    dispatch(filterColor(selectColor));
  };

  return (
    <div className={style.wrapper}>
      <aside className={style.aside}>
        <header className={style.titulo}>
          <h2 className={style.filter}>FILTRAR POR</h2>
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
          <ColorFilter allColors={allColors} />
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
        <div>
          <SearchBar />
        </div>
        <Product currentPoducts={currentPoducts} />
        <Paginate
          totalPage={totalPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </main>
    </div>
  );
};

export default ProductPage;
