import {
  //PRODUCTS
  GET_ALL_BRANDS,
  FILTER_PRODUCTS,
  FILTER_BY_NAME,
  ALL_CATEGORYS,
  ALL_PRODUCTS,
  GET_ALL_SIZE,
  FILTER_PRICE,
  DELETE_PRODUCT,
  POST_PRODUCT,
  FILTER_ACTIVE_PRODUCT_BY_NAME,
  FILTER_INACTIVE_PRODUCT,
  FILTER_INACTIVE_PRODUCT_BY_NAME,
  //CART
  ADD_TO_CART,
  //FAVORITE
  DELETE_FAVORITES,
  ADD_TO_FAVORITES,
  ALL_FAVORITES,
  //LOGIN
  GET_ALL_USERS,
  GET_USER_ID,
  LOGED_USER,
  POST_LOGIN,
  ALL_COLORS,
  LOGOUT,
  PUT_USER,
  DELETE_USER,
  GET_USER_BY_NAME,
  FILTER_INACTIVE_USERS_BY_NAME,
  FILTER_INACTIVE_USERS,
  //PAGINATE
  PAGINATE,
  OPEN_MODAL,
  CLOSE_MODAL,
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
} from "../actions-types/actions-types";

const initialState = {
  allProducts: [],
  allCategorys: [],
  allBrands: [],
  allColors: [],
  allSize: [],
  allUsers: [],
  filter: [],
  productPerPage: 12,
  currentPage: 1,
  logedUser: false,
  favoriteProducts: [],
  cart: [],
  dataUser: null,
  userData: [],
  openModal: false,
  details: [],
  inactiveProducts: [],
  inactiveUsers: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    case ALL_CATEGORYS:
      return {
        ...state,
        allCategorys: action.payload,
      };

    case CREATE_CATEGORY:
      return {
        ...state,
        allCategorys: action.payload,
      };

    case DELETE_CATEGORY:
      return {
        ...state,
        allCategorys: action.payload,
      };

    case POST_PRODUCT:
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload],
      };

    case DELETE_PRODUCT:
      return {
        ...state,
        allProducts: action.payload,
      };

    case ALL_COLORS:
      return {
        ...state,
        allColors: action.payload,
      };
    case CREATE_COLOR:
      return {
        ...state,
        allColors: action.payload,
      };

    case DELETE_COLOR:
      return {
        ...state,
        allColors: action.payload,
      };

    case GET_ALL_BRANDS:
      return {
        ...state,
        allBrands: action.payload,
      };

    case CREATE_BRAND:
      return {
        ...state,
        allBrands: action.payload,
      };

    case DELETE_BRAND:
      return {
        ...state,
        allBrands: action.payload,
      };

    case GET_ALL_SIZE:
      return {
        ...state,
        allSize: action.payload,
      };

    case CREATE_SIZE:
      return {
        ...state,
        allSize: action.payload,
      };

    case DELETE_SIZE:
      return {
        ...state,
        allSize: action.payload,
      };

    case FILTER_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      };

    case FILTER_PRICE:
      if (action.payload === "DESC") {
        const response = [...state.allProducts].sort(
          (a, b) => a.priceProduct - b.priceProduct
        );
        return {
          ...state,
          allProducts: [...response],
        };
      } else if (action.payload === "ASC") {
        const response = [...state.allProducts].sort(
          (a, b) => b.priceProduct - a.priceProduct
        );
        return {
          ...state,
          allProducts: [...response],
        };
      }

    case FILTER_BY_NAME:
      return {
        ...state,
        allProducts: action.payload,
      };

    case FILTER_INACTIVE_USERS:
      return {
        ...state,
        inactiveUsers: action.payload,
      };

    case FILTER_INACTIVE_USERS_BY_NAME:
      return {
        ...state,
        inactiveUsers: action.payload,
      };

    case FILTER_INACTIVE_PRODUCT:
      return {
        ...state,
        inactiveProducts: action.payload,
      };

    case FILTER_INACTIVE_PRODUCT_BY_NAME:
      return {
        ...state,
        inactiveProducts: action.payload,
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

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteProducts: [...state.favoriteProducts, action.payload],
      };

    case DELETE_FAVORITES:
      return {
        ...state,
        favoriteProducts: action.payload,
      };

    case POST_LOGIN:
      localStorage.setItem("userId", action.payload.idUser);
      localStorage.setItem("dataUser", JSON.stringify(action.payload));
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
    case CREATE_DETAIL:
      return {
        ...state,
        details: [...state.details, action.payload],
      };

    case GET_ALL_USERS:
      return {
        ...state,
        allUsers: action.payload,
      };

    case DELETE_USER:
      return {
        ...state,
        allUsers: action.payload,
      };

    case GET_USER_BY_NAME:
      return {
        ...state,
        allUsers: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
