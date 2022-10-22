import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllProducts } from '../store/actions/actions';
import SingleProduct from './SingleProduct';

function AllProducts() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchAllProducts())
  }, [])

  
  return (
      <section className='productsPageContainer'>
        <h1>All Products</h1>
        <div className='currentProductsContainer'>
          {state.products.length && state.products.map(product => (
            <SingleProduct singleProduct={product} />
          ))}
        </div>
      </section>
  )
}

export default AllProducts;