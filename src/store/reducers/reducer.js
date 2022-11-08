import { FETCH_CATEGORIES, FETCH_FEATURED_PRODUCTS, 
  FETCH_ALL_PRODUCTS_START, FETCH_ALL_PRODUCTS_SUCCESS, 
  FETCH_ALL_PRODUCTS_FAILURE, FETCH_PRODUCT_INFO_START,
  FETCH_PRODUCT_INFO_SUCCESS, FETCH_PRODUCT_INFO_FAILURE, 
  ADD_TO_CART } from "../actions/actions";

const initialState = {
  products: [],
  productInfo: {},
  loading: false,
  cart: [],
  categories: [],
  categoryHeader: "",
  errorMessage: "",
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

    case FETCH_PRODUCT_INFO_START:
      return {
        ...state,
        loading: action.payload
      }

    case FETCH_PRODUCT_INFO_SUCCESS:
      return {
        ...state,
        productInfo: action.payload,
        loading: false
      }

      case FETCH_PRODUCT_INFO_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
        loading: false
      }

    case ADD_TO_CART: 
    
    return {
      ...state,
      cart: [...state.cart, action.payload],
      productInfo: {
        ...state.productInfo,
        quantity: state.productInfo.quantity - 1
      }
    }
    
    default:
      return state;
  }
}