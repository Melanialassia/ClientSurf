import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
//COMPONENTS
import CategoryFilter from "../containers/CategoryFilter";
import BrandFilter from "../containers/BrandsFilter";
import ColorFilter from "../containers/ColorFilter";
import SizeFilter from "../containers/SizesFilter";
// import SearchBar from "../containers/SearchBar";
import Paginate from "../containers/Paginate";
import Product from "../containers/Product";
//ACTIONS
import {
  getAllCategorys,
  getAllProducts,
  filterProducts,
  getAllColors,
  getAllBrands,
  getAllSize,
  pageChange,
} from "../../../../redux/actions/action";
//STYLE
import style from "./ProductPage.module.css";

const ProductPage = () => {
  const allProducts = useSelector((s) => s.filter);
  const dispatch = useDispatch();
  const [productOrder, setProductOrder] = useState("");
  //FILTROS
  const allCategorys = useSelector((s) => s.allCategorys);
  const allColors = useSelector((s) => s.allColors);
  const allBrands = useSelector((s) => s.allBrands);
  const allSize = useSelector((s) => s.allSize);
  //ESTADOS LOCALES FILTRADOS
  const [filter, setFilter] = useState({
    idCategory: "",
    idColor: "",
    idSize: "",
    idBrand: "",
    // minPrice: "",
    // maxPrice: "",
    // orderBy: "",
    // key: "",
  });

  //PAGINADO
  const currentPage = useSelector((state) => state.currentPage);
  const productPerPage = useSelector((state) => state.productPerPage);

  const indexOfLastPage = currentPage * productPerPage;
  const indexofFirstPage = indexOfLastPage - productPerPage;
  const currentPoducts = allProducts.slice(indexofFirstPage, indexOfLastPage);
  const totalProducts = allProducts.length;
  const totalPage = Math.ceil(totalProducts / productPerPage);

  useEffect(() => {
    dispatch(getAllCategorys());
    dispatch(getAllProducts());
    dispatch(getAllBrands());
    dispatch(getAllColors());
    dispatch(getAllSize());
  }, []);

  const handlePageChange = (pageNumber) => {
    dispatch(pageChange(pageNumber));
  };

  const handleChange = (event) => {
    setFilter({
      ...filter,
      [event.target.name]: event.target.value,
    });
    console.log("entre", filter);
  };

  const result = () => {
    dispatch(filterProducts(filter));
    setFilter({
      idCategory: "",
      idColor: "",
      idSize: "",
      idBrand: "",
      // minPrice: "",
      // maxPrice: "",
      // orderBy: ""
    });
  };

  return (
    <div className={style.wrapper}>
      <aside className={style.aside}>
        <h2>FILTROS</h2>
        <button onClick={result}>Aplicar Filtros</button>
        <h3>Categoria</h3>
        <CategoryFilter allCategorys={allCategorys}  handleChange={handleChange} />
        <h3>Color</h3>
        <ColorFilter allColors={allColors}  handleChange={handleChange} />
        <h3>Marcas</h3>
        <BrandFilter allBrands={allBrands}  handleChange={handleChange} />
        <h3>Talle</h3>
        <SizeFilter allSize={allSize} handleChange={handleChange} />
      </aside>
      <main className={style.main}>
        {/* <div>
          <SearchBar />
        </div> */}
        <div className={style.priceSection}>
          <select
            className={style.select}
            onChange={(e) => setProductOrder(e.target.value)}
            value={productOrder}
          >
            <option value="DESC">Menor precio</option>
            <option value="ASC">Mayor precio</option>
          </select>
        </div>
        <div>
          <Product currentPoducts={currentPoducts} />
        </div>
        <div>
          <Paginate
            totalPage={totalPage}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
