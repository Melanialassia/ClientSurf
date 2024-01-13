import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
//COMPONENTS
import CategoryFilter from "../containers/CategoryFilter";
import Product from "../containers/Product";
//ACTIONS
import {
  getAllCategorys,
  getAllProducts,
} from "../../../../redux/actions/action";
import { 
    filterProductsByCategory,
    filterProducts
} from "../../../../redux/actions/action";
//STYLE
import style from "./PropductPage.module.css";

const ProductPage = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((s) => s.filter);
  console.log("product",allProducts);
  const allCategorys = useSelector((s) => s.allCategorys);

  const [category, setCategory] = useState("TABLAS");
  const [productOrder, setProductOrder] = useState("");

  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategorys());
  }, []);

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
    dispatch(filterProductsByCategory(selectedCategory));
  };

  const handleProductChange = (event) => {
    const selectedOrder = event.target.value;
    setProductOrder(selectedOrder);
    dispatch(filterProducts(selectedOrder));
  }

  return (
    <div className={style.wrapper}>
      <aside className={style.aside}>
        <header className={style.titulo}>
          <h2>Filtros</h2>
        </header>
        <select
          className={style.filtro}
          onChange={handleCategoryChange}
          value={category}
        >
          <option value="">Categorias</option>
          <CategoryFilter allCategorys={allCategorys} />
        </select>
        <ul className={style.filtro}>
          <h3>Precio</h3>
          <button>Se muestran todos los colores(hacer mapeo)</button>
        </ul>
      </aside>
      <main className={style.main}>
        <div className={style.priceSection}>
          <h4>Ordenar por</h4>
          <select 
          className={style.select}
          onChange={handleProductChange}
          value={productOrder}
          >
            <option value="DESC">Menor a mayor</option>
            <option value="ASC">Mayor a menor</option>
          </select>
        </div>
        <Product allProducts={allProducts} />
      </main>
    </div>
  );
};

export default ProductPage;
