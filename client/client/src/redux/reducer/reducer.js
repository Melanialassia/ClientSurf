import {
  //PRODUCTS
  FILTER_PRODUCS,
  GET_ALL_BRANDS,
  FILTER_BY_NAME,
  ALL_CATEGORYS,
  ALL_PRODUCTS,
  GET_ALL_SIZE,
  FILTER_PRICE,
  //CART
  ADD_TO_CART,
  //FAVORITE
  DELETE_FAVORITES,
  ADD_TO_FAVORITES,
  ALL_FAVORITES,
  //LOGIN
  GET_USER_ID,
  LOGED_USER,
  POST_LOGIN,
  ALL_COLORS,
  LOGOUT,
  //PAGINATE
  PAGINATE,
  OPEN_MODAL,
  CLOSE_MODAL,
} from "../actions-types/actions-types";

const initialState = {
  allProducts: [],
  allCategorys: [],
  allBrands: [],
  allColors: [],
  allSize: [],
  filter: [],
  productPerPage: 12,
  currentPage: 1,
  logedUser: false,
  favoriteProducts: [],
  cart: [],
  dataUser: null,
  userData: [],
  filteredProducts: [],
  openModal: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        filter: [...action.payload],
      };

    case ALL_CATEGORYS:
      return {
        ...state,
        allCategorys: action.payload,
      };

    case ALL_COLORS:
      return {
        ...state,
        allColors: action.payload,
      };

    case GET_ALL_BRANDS:
      return {
        ...state,
        allBrands: action.payload,
      };

    case GET_ALL_SIZE:
      return {
        ...state,
        allSize: action.payload,
      };

    case FILTER_PRODUCS:
      return {
        ...state,
        filter: action.payload,
      };

    case FILTER_PRICE:
      if (action.payload === "DESC") {
        const response = [...state.filter].sort(
          (a, b) => a.priceProduct - b.priceProduct
        );
        return {
          ...state,
          filter: [...response],
        };
      } else if (action.payload === "ASC") {
        const response = [...state.filter].sort(
          (a, b) => b.priceProduct - a.priceProduct
        );
        return {
          ...state,
          filter: [...response],
        };
      }

    case FILTER_BY_NAME:
      return {
        ...state,
        filter: action.payload,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case ALL_FAVORITES:
      return {
        ...state,
        favoriteProducts: action.payload,
      };

    case DELETE_FAVORITES:
      return {
        ...state,
        favoriteProducts: action.payload,
      };

    case POST_LOGIN:
      localStorage.setItem("userId", action.payload.idUser);
      return {
        ...state,
        dataUser: action.payload,
        logedUser: true,
      };

    case PAGINATE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        dataUser: null,
        logedUser: false,
      };

    case OPEN_MODAL:
      return {
        ...state,
        openModal: true,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        openModal: false,
      };

    case GET_USER_ID:
  
      return {
        ...state,
        userData: action.payload,
      };

    case LOGED_USER:
      return {
        ...state,
        logedUser: true,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
