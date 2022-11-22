import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchAllProducts } from '../store/actions/actions';
import SingleProduct from './SingleProduct';

function AllProducts() {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  let currentCategory = window.document.location.pathname.slice(12);
  console.log(currentCategory)

  const fixStringIssue = () => {
    if (currentCategory === "men's%20clothing") {
      currentCategory = "men's clothing";
    }

    if (currentCategory === "women's%20clothing") {
      currentCategory = "women's clothing"
    }

    return currentCategory
  }

  useEffect(() => {
    fixStringIssue();
    dispatch(fetchAllProducts(currentCategory))
  }, [])


  
  return (
      <section className='productsPageContainer'>
        <h1>{state.categoryHeader} ({state.products.length} items)</h1>
        <div className='currentProductsContainer'>
          {state.products.length && state.products.map(product => (
            <SingleProduct singleProduct={product} key={product.id} />
          ))}
        </div>
      </section>
  )
}

export default AllProducts;