import {
  ALL_PRODUCTS,
  ALL_CATEGORYS,
  FILTER_BY_CATEGORY,
  PAGINATE,
  FILTER_PRICE,
} from "../actions-types/actions-types";

const initialState = {
  allProducts: [],
  allCategorys: [],
  filter: [],
  logedUser: false,
  currentPage: 1,
  productPerPage: 10,
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

    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filter: action.payload,
      };

    case FILTER_PRICE:
      if (action.payload === "ASC") {
        const response = [...state.filter].sort((a, b) =>
          a.priceProduct.localeCompare(b.priceProduct)
        );
        return {
          ...state,
          filter: [...response],
        };
      } else if (action.payload === "DESC") {
        const response = [...state.filter].sort((a, b) =>
          b.priceProduct.localeCompare(a.priceProduct)
        );
        return {
          ...state,
          filter: [...response],
        };
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
