import axios from 'axios';

export const FETCH_CATEGORIES = 'FETCH_CATEGORIES';
export const FETCH_FEATURED_PRODUCTS = 'FETCH_FEATURED_PRODUCTS';

export const FETCH_ALL_PRODUCTS_START = 'FETCH_ALL_PRODUCTS_START';
export const FETCH_ALL_PRODUCTS_SUCCESS = 'FETCH_ALL_PRODUCTS_SUCCESS';
export const FETCH_ALL_PRODUCTS_FAILURE = 'FETCH_ALL_PRODUCTS_FAILURE';

export const FETCH_PRODUCT_INFO_START = 'FETCH_PRODUCT_INFO_START'
export const FETCH_PRODUCT_INFO_SUCCESS = 'FETCH_PRODUCT_INFO_SUCCESS'
export const FETCH_PRODUCT_INFO_FAILURE = 'FETCH_PRODUCT_INFO_FAILURE'

export const fetchCategories = () => dispatch => {
  axios.get('https://fakestoreapi.com/products/categories')
    .then(res => {
      dispatch({type: FETCH_CATEGORIES, payload: res.data})
    })
    .catch(err => {
      console.log(err)
    })
}

export const fetchFeaturedProducts = () => dispatch => {
  axios.get('https://fakestoreapi.com/products')
    .then(res => dispatch({type: FETCH_FEATURED_PRODUCTS, payload: res.data}))
    .catch(err => console.log(err))
}

export const fetchAllProducts = () => dispatch => {
  dispatch({type: FETCH_ALL_PRODUCTS_START, payload: true})
  
  axios.get('https://fakestoreapi.com/products')
    .then(res => dispatch({type: FETCH_ALL_PRODUCTS_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: FETCH_ALL_PRODUCTS_FAILURE, payload: err.message}))
}

export const fetchProductInfo = (productId) => dispatch => {
  dispatch({ type: FETCH_PRODUCT_INFO_START, payload: true})

  axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then(res => dispatch({type: FETCH_PRODUCT_INFO_SUCCESS, payload: {...res.data, quantity: 5}}))
    .catch(err => dispatch({ type: FETCH_PRODUCT_INFO_FAILURE, payload: err.message}))
}