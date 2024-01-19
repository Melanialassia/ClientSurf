import {
  FILTER_BY_CATEGORY,
  GET_NAME_PRODUCTS,
  ALL_CATEGORYS,
  ALL_PRODUCTS,
  FILTER_PRICE,
  FILTER_COLOR,
  ALL_FAVORITES,
  ADD_TO_FAVORITES,
  DELETE_FAVORITES,
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
  console.log("idUser in addToCart:", idUser); 
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

export const pageChange = (payload) => { 
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

//FAVORITES ACTIONS
export const getAllFavoriteProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/surf/favorite");
      const result = data.data;
      console.log(result);
      return dispatch({ type: ALL_FAVORITES, payload: result });
    } catch (error) {
      throw Error("No se pudo traer los productos favoritos con exito", error);
    }
  };
};

export const addToFavorites = (idUser, idProduct) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/surf/favorite", {
        idProduct,
        idUser,
      });

      dispatch({
        type: ADD_TO_FAVORITES,
        payload: response.data,
      });
    } catch (error) {
      throw Error("No se pudo agregar el producto a favoritos", error);
    }
  };
};

export const deleteFavorite = (idUser, idProduct) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/surf/favorite/${idUser}/${idProduct}`
      );
      console.log("response", response.data);
      dispatch({
        type: DELETE_FAVORITES,
        payload: response.data.data,
      });
    } catch (error) {
      throw Error("No se pudo borrar el producto a favoritos", error);
    }
  };
};
