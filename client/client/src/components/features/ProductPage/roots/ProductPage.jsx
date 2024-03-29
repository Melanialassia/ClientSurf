import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//COMPONENTS
import CategoryFilter from "../containers/CategoryFilter";
import BrandFilter from "../containers/BrandsFilter";
import FilterPrice from "../containers/PriceFilter";
import ColorFilter from "../containers/ColorFilter";
import SizeFilter from "../containers/SizesFilter";
import SearchBar from "../containers/SearchBar";
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
  const productsTrue = useSelector((s) => s.allProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  //STATUS TRUE
  const allProducts = productsTrue.filter((product) => product.status === true);
  //PAGINADO
  const currentPage = useSelector((state) => state.currentPage);
  const productPerPage = useSelector((state) => state.productPerPage);

  const indexOfLastPage = currentPage * productPerPage;
  const indexofFirstPage = indexOfLastPage - productPerPage;
  // console.log("allProducts",allProducts);
  const currentPoducts = allProducts.slice(indexofFirstPage, indexOfLastPage);
  const totalProducts = allProducts.length;
  const totalPage = Math.ceil(totalProducts / productPerPage);

  const applyFilters = () => {
    dispatch(filterProducts(filter));
    dispatch(pageChange(1));
  };

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(getAllProducts());
    }
    dispatch(getAllCategorys());
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
  };

  const handleOrderPrice = (event) => {
    dispatch(filterPrice(event.target.value));
    dispatch(pageChange(1));
  };

  const clearFilters = () => {
    dispatch(getAllProducts());
    dispatch(pageChange(1));
    setFilter({
      idCategory: "",
      idColor: "",
      idSize: "",
      idBrand: "",
      minPrice: "",
      maxPrice: "",
    });
  };

  return (
    <div className={style.wrapper}>
      <aside>
        <h2 className={style.titulo}>Filtros</h2>
        <Button type="text" onClick={clearFilters} className={style.filtro}>
          Limpiar filtros
        </Button>

        <CategoryFilter allCategorys={allCategorys} handleChange={handleChange} selectedValue={filter.idCategory}/>

        <ColorFilter allColors={allColors} handleChange={handleChange} selectedValue={filter.idColor}/>

        <BrandFilter allBrands={allBrands} handleChange={handleChange} selectedValue={filter.idBrand}/>

        <SizeFilter allSize={allSize} handleChange={handleChange} selectedValue={filter.idSize}/>

        <FilterPrice setFilter={setFilter} filter={filter} />

        <Button type="text" onClick={applyFilters} className={style.filtro}>
          Aplicar filtros
        </Button>
      </aside>
      <main className={style.main}>
        <div className={style.priceSection}>
          <div>
            <SearchBar />
          </div>
          <p>Ordenar por: </p>
          <select
            className={style.selectStyle}
            onChange={(event) => handleOrderPrice(event)}
          >
            <option value="DESC" className={style.optionStyle}>
              Menor precio
            </option>
            <option value="ASC" className={style.optionStyle}>
              Mayor precio
            </option>
          </select>
        </div>
        <div>
          <Product currentPoducts={currentPoducts} />
        </div>
        <div className={style.paginate}>
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
