import {
  //PRODUCTS
  POST_PRODUCT_STATUS,
  GET_ALL_BRANDS,
  FILTER_PRODUCTS,
  FILTER_BY_NAME,
  ALL_CATEGORYS,
  ALL_PRODUCTS,
  GET_ALL_SIZE,
  POST_PRODUCT,
  FILTER_PRICE,
  ALL_COLORS,
  DELETE_PRODUCT,
  FILTER_INACTIVE_PRODUCT,
  FILTER_INACTIVE_PRODUCT_BY_NAME,
  GET_PRODUCT_BY_ID,
  //FAVORITE
  ADD_TO_FAVORITES,
  DELETE_FAVORITES,
  ALL_FAVORITES,
  CREATE_USER,
  //CART
  ADD_TO_CART,
  DELETE_FROM_CART,
  GET_CART_PRODUCTS,
  DELETE_ALL_PRODUCTS_FROM_CART,
  //USER
  GET_ALL_USERS,
  GET_USER_ID,
  POST_LOGIN,
  LOGOUT,
  PUT_USER,
  DELETE_USER,
  GET_USER_BY_NAME,
  FILTER_INACTIVE_USERS_BY_NAME,
  FILTER_INACTIVE_USERS,
  //PAGINADO
  PAGINATE,
  OPEN_MODAL,
  LOGED_USER,
  //ADMIN DASHBOARD
  CREATE_CATEGORY,
  CREATE_COLOR,
  CREATE_BRAND,
  CREATE_SIZE,
  DELETE_CATEGORY,
  DELETE_COLOR,
  DELETE_BRAND,
  DELETE_SIZE,
  CREATE_DETAIL,
  //SALES
  GET_USER_SALES,
  ADD_RATING,
} from "../actions-types/actions-types";
import axios from "axios";

const SERVER_URL = "https://surf-4i7c.onrender.com/surf";

//PRODUCTS ACTIONS
export const getAllProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/product`);
      const result = data.listProducts;
      return dispatch({ type: ALL_PRODUCTS, payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const postProduct = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${SERVER_URL}/product`, data);
      dispatch({ type: POST_PRODUCT, payload: response.data });
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};
export const deleteProduct = (idProduct) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${SERVER_URL}/product/${idProduct}`);
      dispatch({
        type: DELETE_PRODUCT,
        payload: response.data.data,
      });
    } catch (error) {
      throw Error("No se pudo borrar el producto", error);
    }
  };
};

export const putProductStatus = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${SERVER_URL}/product/update`, data);
      dispatch({ type: POST_PRODUCT_STATUS, payload: response.data });
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
      const { data } = await axios.get(`${SERVER_URL}/category`);
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
      const { data } = await axios.get(`${SERVER_URL}/color/`);
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
      const { data } = await axios.get(`${SERVER_URL}/brand`);
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
      const { data } = await axios.get(`${SERVER_URL}/size`);
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
      const { data } = await axios.get(`${SERVER_URL}/product?name=` + name);
      const result = data.listProducts;
      dispatch({
        type: FILTER_BY_NAME,
        payload: result,
      });
    } catch (error) {
      console.log(error.result.message);
    }
  };
};

export const getInactiveUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/user`);
      const result = data.data;
      const falseStatus = result.filter((user) => user.activeUser === false);
      dispatch({
        type: FILTER_INACTIVE_USERS,
        payload: falseStatus,
      });
    } catch (error) {
      console.log(error.result.message);
    }
  };
};

export const getInactiveUsersByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/user?name=${name}`);
      const result = data.data;
      console.log("resul", result);
      const falseStatus = data.data.filter((user) => user.activeUser === false);
      console.log("abajo", falseStatus);
      dispatch({
        type: FILTER_INACTIVE_USERS_BY_NAME,
        payload: falseStatus,
      });
    } catch (error) {
      console.log(error.result.message);
    }
  };
};

export const getInactiveProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/product`);
      const result = data.listProducts;
      const falseStatus = result.filter((product) => product.status === false);
      dispatch({
        type: FILTER_INACTIVE_PRODUCT,
        payload: falseStatus,
      });
    } catch (error) {
      console.log(error.data.message);
    }
  };
};

export const getInactiveProductsByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/product?name=` + name);
      const result = data.listProducts;
      const falseStatus = result.filter((product) => product.status === false);
      dispatch({
        type: FILTER_INACTIVE_PRODUCT_BY_NAME,
        payload: falseStatus,
      });
    } catch (error) {
      console.log(error.response.message);
    }
  };
};

export const getUserByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/user?name=${name}`);
      const result = data.data;
      console.log("accion", result);
      dispatch({
        type: GET_USER_BY_NAME,
        payload: result,
      });
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
};

export const filterProducts = (filter) => {
  return async (dispatch) => {
    try {
      // Convierte el objeto filter en una cadena de consulta
      const queryParams = new URLSearchParams(filter).toString();

      // Construye la URL con la cadena de consulta
      let apiUrl = `${SERVER_URL}/filterProduct?${queryParams}`;

      const { data } = await axios(apiUrl);
      const result = data.data;
      return dispatch({ type: FILTER_PRODUCTS, payload: result });
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
      const response = await axios.post(`${SERVER_URL}/user`, userdata); // ENVIA LOS DATOS
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
      const URL = `${SERVER_URL}/login`;
      let response;
      // GOOGLE EMAIL, UNIQUEID
      if (userData.uniqueId) {
        const modifiedUserData = {
          nameUser: userData.nameUser,
          emailUser: userData.emailUser,
          uniqueId: userData.uniqueId,
        };
        response = await axios.post(URL, modifiedUserData);
      }
      // FORM EMAIL PASSWORD
      else if (userData.password) {
        const modifiedUserData = {
          emailUser: userData.emailUser,
          password: userData.password,
        };
        response = await axios.post(URL, modifiedUserData);
      }

      if (response) {
        // && response.data
        localStorage.setItem("access", JSON.stringify(response.data.access));
        localStorage.setItem("userId", response.data.idUser);
        localStorage.setItem("logedUser", true);
        localStorage.setItem("idLevel", JSON.stringify(response.data.level));

        dispatch({
          type: POST_LOGIN,
          payload: response.data,
        });
      }
    } catch (error) {
      console.log("Error durante el inicio de sesión:", error);
    }
  };
};

export const logOut = () => {
  localStorage.removeItem("access");
  localStorage.setItem("logedUser", JSON.stringify(false));

  return (dispatch) => {
    dispatch({ type: LOGOUT });
    dispatch({ type: LOGED_USER, payload: false });
  };
};

export const getIdUser = (idUser) => {
  return async (dispatch) => {
    try {
      const response = await axios(`${SERVER_URL}/user/${idUser}`);
      dispatch({
        type: GET_USER_ID,
        payload: response.data.data[0],
      });
    } catch (error) {}
  };
};

export const updateUser = (userData) => {
  console.log("data accion", userData);
  return async function (dispatch) {
    try {
      const URL = `${SERVER_URL}/user`;
      const response = await axios.put(URL, userData);
      console.log("entre");
      dispatch({
        type: PUT_USER,
        payload: response.data.data,
      });
    } catch (error) {
      console.log("Error durante el inicio de sesión:", error);
    }
  };
};

export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/user`);
      const result = data.data;
      return dispatch({ type: GET_ALL_USERS, payload: result });
    } catch (error) {
      throw Error("No se pudo traer los usuarios con exito", error);
    }
  };
};

export const deleteUser = (idUser) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${SERVER_URL}/user/${idUser}`);
      dispatch({
        type: DELETE_USER,
        payload: response.data.data,
      });
    } catch (error) {
      throw Error("No se pudo borrar el usuario", error);
    }
  };
};

//CART ACTIONS
export const getCartProducts = (idUser) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/cart/${idUser}`);
      const result = data;
      localStorage.setItem("cartData", JSON.stringify(result));
      return dispatch({ type: GET_CART_PRODUCTS, payload: result });
    } catch (error) {
      throw Error(
        "No se pudo traer los objetos del carrito de compras: ",
        error
      );
    }
  };
};

export const addToCart = (productId, idUser, amount) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${SERVER_URL}/cart`, {
        idProduct: productId,
        idUser,
        amount,
      });
      localStorage.setItem("cartData", JSON.stringify(response.data));
      dispatch({
        type: ADD_TO_CART,
        payload: response.data.cartList,
      });
    } catch (error) {
      console.error("Error al agregar al carrito: ", error);
    }
  };
};

export const deleteFromCart = (idUser, idProduct) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${SERVER_URL}/cart/${idUser}/${idProduct}`
      );
      localStorage.setItem("cartData", JSON.stringify(response.data));
      dispatch({
        type: DELETE_FROM_CART,
        payload: response.data.cartList,
      });
    } catch (error) {
      throw Error(
        "No se pudo borrar el producto del carrito de compras: ",
        error
      );
    }
  };
};

export const deleteAllProductsFromCart = (idUser) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${SERVER_URL}/cart/${idUser}`);
      localStorage.setItem("cartData", JSON.stringify(response.data));
      dispatch({
        type: DELETE_ALL_PRODUCTS_FROM_CART,
        payload: response.data.cartList,
      });
    } catch (error) {
      throw Error(
        "No se pudo borrar el producto del carrito de compras: ",
        error
      );
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
      const { data } = await axios.get(`${SERVER_URL}/favorite/${idUser}`);
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
      const response = await axios.post(`${SERVER_URL}/favorite`, {
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
        `${SERVER_URL}/favorite/${idUser}/${idProduct}`
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

//ADMIN CATEGORIES
export const postCategory = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${SERVER_URL}/category`, data);
      dispatch({ type: CREATE_CATEGORY, payload: response.data.data });
      return response;
    } catch (error) {
      throw Error("No se pudo crear la categoria", error);
    }
  };
};

export const deleteCategory = (idCategory) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(
        `${SERVER_URL}/category/${idCategory}`
      );
      dispatch({
        type: DELETE_CATEGORY,
        payload: response.data.data,
      });
    } catch (error) {
      throw Error("No se pudo borrar la categoria", error);
    }
  };
};

//ADMIN BRANDS
export const postBrand = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${SERVER_URL}/brand`, data);
      dispatch({ type: CREATE_BRAND, payload: response.data.data });
      console.log("response del BRAND", response);
      console.log("response.data del BRAND", response.data);
      console.log("response.data.data del BRAND", response.data.data);
      return response;
    } catch (error) {
      throw Error("No se pudo crear el brand", error);
    }
  };
};

export const deleteBrand = (idBrand) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${SERVER_URL}/brand/${idBrand}`);
      dispatch({
        type: DELETE_BRAND,
        payload: response.data.data,
      });
    } catch (error) {
      throw Error("No se pudo borrar el color", error);
    }
  };
};

//ADMIN COLORS
export const postColor = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${SERVER_URL}/color`, data);
      dispatch({ type: CREATE_COLOR, payload: response.data.data });
      return response;
    } catch (error) {
      throw Error("No se pudo crear el color", error);
    }
  };
};

export const deleteColor = (idColor) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${SERVER_URL}/color/${idColor}`);
      dispatch({
        type: DELETE_COLOR,
        payload: response.data.data,
      });
    } catch (error) {
      throw Error("No se pudo borrar el color", error);
    }
  };
};

//ADMIN SIZES
export const postSize = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${SERVER_URL}/size`, data);
      dispatch({ type: CREATE_SIZE, payload: response.data.data });
      return response;
    } catch (error) {
      throw Error("No se pudo crear la talla", error);
    }
  };
};

export const deleteSize = (idSize) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`${SERVER_URL}/size/${idSize}`);
      console.log("Response deleteSize", response);
      dispatch({
        type: DELETE_SIZE,
        payload: response.data.data,
      });
    } catch (error) {
      throw Error("No se pudo borrar la talla", error);
    }
  };
};

export const createDetail = (idSale, idUser, listProducts) => {
 
  return async (dispatch) => {
    try {
      const response = await axios.post(`${SERVER_URL}/detail`, {
        idSale,
        idUser,
        listProducts,
      });
      console.log(response.data);
      dispatch({
        type: CREATE_DETAIL,
        payload: response.data,
      });
    } catch (error) {
      throw Error("No se pudo crear el detalle", error);
    }
  };
};

//USER PURCHASES
export const getSaleDetails = (idSale) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/detail/${idSale}`);
      const result = data;
      return dispatch({ type: GET_USER_SALES, payload: result });
    } catch (error) {
      throw Error("No se pudo traer los objetos de la compra: ", error);
    }
  };
};

export const getProductById = (idProduct) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${SERVER_URL}/product/${idProduct}`);
      const result = data.listProducts;
      return dispatch({ type: GET_CART_PRODUCTS, payload: result });
    } catch (error) {
      throw Error("No se pudo traer los objetos de la compra: ", error);
    }
  };
};

export const AddRating = (data) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${SERVER_URL}/qualification`, data);
      console.log(response);
      dispatch({ type: ADD_RATING, payload: response.data });
      
      return response.data;
    } catch (error) {
      throw Error("No se pudo agregar la calificacion: ", error);
    }
  };
};
