import {
  ALL_PRODUCTS,
  ALL_CATEGORYS,
  FILTER_BY_CATEGORY,
  FILTER_ORDER,
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

    case FILTER_ORDER:
      if (action.payload === "ASC") {
        const response = [...state.filter].sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        return {
          ...state,
          filter: [...response],
        };
      } else if (action.payload === "DESC") {
        const response = [...state.filter].sort((a, b) =>
          b.name.localeCompare(a.name)
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

      case FILTER_PRICE:
        const { minPrice, maxPrice } = action.payload;
        const filteredByPrice = [...state.filter].filter(
          (product) => product.priceProduct >= minPrice && product.priceProduct <= maxPrice
        ); //escribi cualquier cosa
        return {
          ...state,
          filter: [...filteredByPrice],
        };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
