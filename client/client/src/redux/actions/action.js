import {
  ALL_PRODUCTS,
  ALL_CATEGORYS,
  FILTER_BY_CATEGORY,
  FILTER_ORDER,
} from "../actions-types/actions-types";
import axios from "axios";

export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/surf/product/");
      const result = data.listProducts;
      return dispatch({ type: ALL_PRODUCTS, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllCategorys = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/surf/category/");
      const result = data.data;
      return dispatch({ type: ALL_CATEGORYS, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterProductsByCategory = (selectedCategory) => {
  return async (dispatch) => {
    try {
      const { data } = await axios(
        "http://localhost:3001/surf/product?nameCategory=" + selectedCategory
      );
      const result = data.listProducts;
      return dispatch({ type: FILTER_BY_CATEGORY, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterProducts = (selectedOrder) => {
  return{
    type: FILTER_ORDER,
    payload: selectedOrder
  }
};
