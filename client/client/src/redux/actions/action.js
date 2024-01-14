import {
  ALL_PRODUCTS,
  ALL_CATEGORYS,
  FILTER_BY_CATEGORY,
  FILTER_ORDER,
  PAGINATE,
  CREATE_USER
  FILTER_PRICE
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
  return {
    type: FILTER_ORDER,
    payload: selectedOrder,
  };
};

export const pageChange = (payload) => {
  // ACCION PARA CAMBIAR LA PAGINA DE LA LISTA DE PERROS
  return function (dispatch) {
    dispatch({
      type: PAGINATE,
      payload: payload,
    });
  };
};
export const postUser = (userdata) => {
  return async function (dispatch) {
    try {
        const response = await axios.post('http://localhost:3001/surf/user', userdata);  // ENVIA LOS DATOS 
        dispatch({
            type: CREATE_USER,
            payload: response.data
        });
    } catch (error) {
        throw Error ('No se pudo crear la cuenta de usuario con éxito:', error)
  
    }
}
}

export const isUserLoged = () => {

}

export const filterProductsByPrice = (minPrice, maxPrice) => {
  console.log(minPrice, maxPrice);
  return {
  type: FILTER_PRICE,
  payload: { minPrice, maxPrice },
};
};

