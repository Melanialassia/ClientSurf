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
  getAllColors,
} from "../../../../redux/actions/action";
import {
  filterProductsByCategory,
  filterPrice,
  filterColor,
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
  const [productPerPage, setProductPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * productPerPage;
  const firstIndex = lastIndex - productPerPage;
  const totalProducts = allProducts.length;

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategorys());
    dispatch(getAllColors());
    console.log("Entre", currentPage);
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
        <Product
          allProducts={allProducts}
          lastIndex={lastIndex}
          firstIndex={firstIndex}
        />
        <Paginate
          productPerPage={productPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={totalProducts}
        />
      </main>
    </div>
  );
};

export default ProductPage;
