import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
//COMPONENTS
import CategoryFilter from "../containers/CategoryFilter";
import BrandFilter from "../containers/BrandsFilter";
import ColorFilter from "../containers/ColorFilter";
import SizeFilter from "../containers/SizesFilter";
import FilterPrice from "../containers/PriceFilter";
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
  filterPrice,
  getAllSize,
  pageChange,
} from "../../../../redux/actions/action";
//STYLE
import style from "./ProductPage.module.css";
//LIBRARY
import { Button } from "antd";

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
    minPrice: "",
    maxPrice: "",
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
    return () => {filter};
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
  
  const handleOrderPrice = (event) => {
    dispatch(filterPrice(event.target.value));
    dispatch(pageChange(1));
  }

  const result = () => {
    dispatch(filterProducts(filter));
    dispatch(pageChange(1));
  };

  const clean = () => {
    setFilter({
      idCategory: "",
      idColor: "",
      idSize: "",
      idBrand: "",
      minPrice: "",
      maxPrice: "",
    });
  }

  return (
    <div className={style.wrapper}>
      <aside className={style.aside}>
        <h2>FILTROS</h2>
        <Button type="text" onClick={clean}>Limpiar filtros</Button>

        <CategoryFilter allCategorys={allCategorys} handleChange={handleChange}/>

        <ColorFilter allColors={allColors} handleChange={handleChange} />

        <BrandFilter allBrands={allBrands} handleChange={handleChange} />

        <SizeFilter allSize={allSize} handleChange={handleChange} />

        <FilterPrice setFilter={setFilter} filter={filter} />

        <Button type="text" onClick={result}>Aplicar filtros</Button>
      </aside>
      <main className={style.main}>
        {/* <div>
          <SearchBar />
        </div> */}
        <div className={style.priceSection}>
          <p>Ordenar por: </p>
          <select
            className={style.selectStyle}
            onChange={(event) => handleOrderPrice (event)}
          >
            <option value="DESC" className={style.optionStyle}>Menor precio</option>
            <option value="ASC" className={style.optionStyle}>Mayor precio</option>
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
