import { FETCH_CATEGORIES, FETCH_FEATURED_PRODUCTS, 
  FETCH_ALL_PRODUCTS_START, FETCH_ALL_PRODUCTS_SUCCESS, 
  FETCH_ALL_PRODUCTS_FAILURE } from "../actions/actions";

const initialState = {
  products: [],
  singleProduct: {},
  cart: [],
  categories: [],
  categoryHeader: "",
  errorMessage: "",
  loading: false
}

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      }

    case FETCH_FEATURED_PRODUCTS: 
      const featuredProducts = action.payload.filter(item => item.rating.rate >= 4);
    
      return {
        ...state,
        products: featuredProducts
      }

    case FETCH_ALL_PRODUCTS_START:
      return {
        ...state,
        loading: action.payload
      }

    case FETCH_ALL_PRODUCTS_SUCCESS: 
      return {
        ...state,
        products: action.payload,
        loading: false
      }

    case FETCH_ALL_PRODUCTS_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false
      }
    
    default:
      return state;
  }
}