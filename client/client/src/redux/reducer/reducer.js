import {
  FILTER_BY_CATEGORY,
  GET_NAME_PRODUCTS,
  GET_ALL_BRANDS,
  ALL_CATEGORYS,
  ALL_PRODUCTS,
  GET_ALL_SIZE,
  FILTER_PRICE,
  FILTER_COLOR,
  ADD_TO_CART,
  ALL_FAVORITES,
  ADD_TO_FAVORITES,
  DELETE_FAVORITES,
  POST_LOGIN,
  ALL_COLORS,
  PAGINATE,
  LOGOUT
  OPEN_MODAL,
  CLOSE_MODAL
} from "../actions-types/actions-types";

const initialState = {
  allProducts: [],
  allCategorys: [],
  allBrands: [],
  allColors: [],
  allSize: [],
  filter: [],
  productPerPage: 10,
  currentPage: 1,
  logedUser: false,
  favoriteProducts: [],
  cart: [],
  dataUser: null,
  filteredProducts: [],
  logedUser: false,
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
    case GET_NAME_PRODUCTS:
      return {
        ...state,
        filter: action.payload,
      };
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filter: action.payload,
        filteredProducts: [...action.payload],
      };
    case FILTER_PRICE:
      if (action.payload === "ASC") {
        const response = [...state.filter].sort(
          (a, b) => a.priceProduct - b.priceProduct
        );
        return {
          ...state,
          filter: [...response],
        };
      } else if (action.payload === "DESC") {
        const response = [...state.filter].sort(
          (a, b) => b.priceProduct - a.priceProduct
        );
        return {
          ...state,
          filter: [...response],
        };
      }

    case FILTER_COLOR:
      const selectedColor = action.payload;
      const filteredByColor = state.filteredProducts.filter((product) =>
        product.nameColor.includes(selectedColor)
      );
      return {
        ...state,
        filter: filteredByColor,
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
      return {
        ...state,
        dataUser: action.payload,
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

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
