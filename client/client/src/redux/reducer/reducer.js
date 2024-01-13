import {
    ALL_PRODUCTS,
    ALL_CATEGORYS,
    FILTER_BY_CATEGORY
} from "../actions-types/actions-types";

const initialState = {
    allProducts: [],
    allCategorys: [],
    filter: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_PRODUCTS:
            return {
                ...state,
                allProducts: action.payload,
                filter: [...action.payload]
            }

        case ALL_CATEGORYS:
            return {
                ...state,
                allCategorys: action.payload
            }

        case FILTER_BY_CATEGORY:
            return {
                ...state,
                filter: action.payload
            }

        default:
            return {
                ...state
            }
    }
};

export default reducer;