import {
  //PRODUCTS
  GET_ALL_BRANDS,
  FILTER_PRODUCS,
  FILTER_BY_NAME,
  ALL_CATEGORYS,
  ALL_PRODUCTS,
  GET_ALL_SIZE,
  POST_PRODUCT,
  FILTER_PRICE,
  ALL_COLORS,
  //FAVORITE
  ADD_TO_FAVORITES,
  DELETE_FAVORITES,
  ALL_FAVORITES,
  CREATE_USER,
  //CART
  ADD_TO_CART,
  //USER
  GET_USER_ID,
  POST_LOGIN,
  LOGOUT,
  //PAGINADO
  PAGINATE,
  PUT_USER,
  OPEN_MODAL,
  LOGED_USER,
} from "../actions-types/actions-types";
import axios from "axios";

//PRODUCTS ACTIONS
export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        "http://localhost:3001/surf/filterProduct"
      );
      const result = data.data;
      return dispatch({ type: ALL_PRODUCTS, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postProduct = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "http://localhost:3001/surf/product",
        data
      );
      dispatch({ type: POST_PRODUCT, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

//FILTER ACTIONS
export const getAllCategorys = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/surf/category");
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

export const getAllBrands = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/surf/brand");
      const result = data.data;
      dispatch({
        type: GET_ALL_BRANDS,
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getAllSize = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/surf/size");
      const result = data.data;
      dispatch({
        type: GET_ALL_SIZE,
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getProductsByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/surf/product?name=" + name);
      const result = data.listProducts;
      dispatch({
        type: FILTER_BY_NAME,
        payload: result,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterProducts = (filter) => {
  return async (dispatch) => {
    console.log("accion", filter);
    try {
      // Convierte el objeto filter en una cadena de consulta
      const queryParams = new URLSearchParams(filter).toString();

      // Construye la URL con la cadena de consulta
      let apiUrl = `http://localhost:3001/surf/filterProduct?${queryParams}`;

      const { data } = await axios(apiUrl);
      const result = data.data;
      console.log("entre", result);
      return dispatch({ type: FILTER_PRODUCS, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const filterPrice = (payload) => {
  return {
    type: FILTER_PRICE,
    payload: payload,
  };
};

//USER ACTIONS
export const postUser = (userdata) => {
  console.log(userdata);
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

export const userLogin = (userData) => {
  return async function (dispatch) {
    try {
      const URL = `http://localhost:3001/surf/login`;
      const response = await axios.post(URL, userData);
      console.log(response);
      localStorage.setItem("access", JSON.stringify(response.data.access));
      localStorage.setItem("userId", response.data.idUser);

      dispatch({
        type: POST_LOGIN,
        payload: response.data,
      });
    } catch (error) {
      console.log("Error durante el inicio de sesión:", error);
    }
  };
};

export const logOut = () => {
  localStorage.removeItem("access");
  return {
    type: LOGOUT,
  };
};

export const getIdUser = (idUser) => {
  return async (dispatch) => {
    try {
      const response = await axios(`http://localhost:3001/surf/user/${idUser}`);
      dispatch({
        type: GET_USER_ID,
        payload: response.data.data[0],
      });
    } catch (error) {}
  };
};

export const updateUserInfo = () => {};

//CART ACTIONS
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
      console.error("Error al agregar al carrito:", error);
    }
  };
};

//PAGINATE
export const pageChange = (payload) => {
  return function (dispatch) {
    dispatch({
      type: PAGINATE,
      payload: payload,
    });
  };
};

//FAVORITES ACTIONS
export const getAllFavoriteProducts = (idUser) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/surf/favorite/${idUser}`
      );
      const result = data.data;
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
      dispatch({
        type: DELETE_FAVORITES,
        payload: response.data.data,
      });
    } catch (error) {
      throw Error("No se pudo borrar el producto de favoritos", error);
    }
  };
};

export const handleOpenModal = () => {
  dispatch({ type: OPEN_MODAL });
};
