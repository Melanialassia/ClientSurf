import {
  FILTER_BY_CATEGORY,
  GET_NAME_PRODUCTS,
  ALL_CATEGORYS,
  ALL_PRODUCTS,
  FILTER_PRICE,
  FILTER_COLOR,
  ADD_TO_CART,
  POST_LOGIN,
  ALL_COLORS,
  PAGINATE,
} from "../actions-types/actions-types";

const initialState = {
  allProducts: [],
  allCategorys: [],
  allColors: [],
  filter: [],
  productPerPage: 10,
  currentPage: 1,


  logedUser: false,
  cart: [],

  dataUser: null,


  filteredProducts: [],
  logedUser: false,
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

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
