import {
  FILTER_BY_CATEGORY,
  GET_NAME_PRODUCTS,
  ALL_CATEGORYS,
  ALL_PRODUCTS,
  FILTER_PRICE,
  FILTER_COLOR,
  CREATE_USER,
  ADD_TO_CART,
  POST_LOGIN,
  ALL_COLORS,
  PAGINATE
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

export const getAllColors = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/surf/color/");
      const result = data.data;
      return dispatch({ type: ALL_COLORS, payload: result });
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

export const getProductsByName = (nameProduct) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "http://localhost:3001/surf/product?name=" + nameProduct
      );
      const result = data.listProducts;
      return dispatch({ type: GET_NAME_PRODUCTS, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterPrice = (selectedPrice) => {
  return {
    type: FILTER_PRICE,
    payload: selectedPrice,
  };
};

export const postUser = (userdata) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/surf/user",
        userdata
      ); // ENVIA LOS DATOS
      dispatch({
        type: CREATE_USER,
        payload: response.data,
      });
    } catch (error) {
      throw Error("No se pudo crear la cuenta de usuario con éxito:", error);
    }
  };
};

export const userLogin =  (userData) => {
  return async function (dispatch){ 
  console.log(userData)
  try {
    const URL = `http://localhost:3001/surf/login`;
    const response = await axios.post(URL, userData);
    console.log(response);
    dispatch({
      type: POST_LOGIN,
      payload: response.data,
    })
  } catch (error) {
    console.log("Error during login:", error);
  }
}
}

export const addToCart = (productId, idUser, amount) => {
  console.log("idUser in addToCart:", idUser); // Verifica que idUser tenga un valor definido
  return async (dispatch) => {
    try {

      const response = await axios.post("http://localhost:3001/surf/cart", {

        idProduct: productId,
        idUser,
        amount,
      });

      dispatch({
        type: ADD_TO_CART,
        payload: response.data,
      });
    } catch (error) {

      console.error('Error al agregar al carrito:', error);

    }
  };
};

export const pageChange = (payload) => {  // ACCION PARA CAMBIAR LA PAGINA DE LA LISTA DE PERROS
  return function (dispatch) {
      dispatch({
          type: PAGINATE,
          payload: payload
      });
  }
};

export const filterColor = (payload) => {
  return {
    type: FILTER_COLOR,
    payload: payload,
  };
};

