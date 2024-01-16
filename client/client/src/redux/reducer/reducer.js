import {
  ALL_PRODUCTS,
  ALL_CATEGORYS,
  ALL_COLORS,
  FILTER_BY_CATEGORY,
  FILTER_PRICE,
  FILTER_COLOR,
} from "../actions-types/actions-types";

const initialState = {
  allProducts: [],
  allCategorys: [],
  allColors: [],
  filter: [],
  filteredProducts: [],
  logedUser: false
}

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

    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filter: action.payload,
        filteredProducts: [...action.payload]
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
      const filteredByColor = state.filteredProducts.filter(
        (product) => product.nameColor.includes(selectedColor)
      );
      return {
        ...state,
        filter: filteredByColor
      };



    default:
      return {
        ...state,
      };
  }
};

export default reducer;
