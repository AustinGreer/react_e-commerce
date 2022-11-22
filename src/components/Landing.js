import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {fetchCategories, fetchFeaturedProducts} from '../store/actions/actions';
import SingleProduct from './SingleProduct';

function Landing() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const shopAllProductsRedirectHandler = () => {
    navigate("/categories/allProducts");
  }

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchFeaturedProducts())
  }, [dispatch])
  
  return (
    <div className='landingWrapper'>
      <section className='landingHeader'>
        <h1>Find the latest and greatest products with React Shopr</h1>
        <button onClick={shopAllProductsRedirectHandler}>Shop All Products</button>
      </section>

      <section className='landingCategoriesSection'>
        <h2>Shop Categories</h2>
        <p>Check out some incredible products under these categories</p>
        { state.categories.length === 0 ? <p>No categories</p>
          : 
          <div className='categoriesContainer'>
            {state.categories.map(category => (
              <Link 
                id={category.replaceAll(" ", "").replaceAll("'", "") + 'Header'} 
                to={'/categories/' + category}
                key={category}>{category}</Link>
            ))}
          </div>
        }
      </section>

      <section className='landingFeaturedSection'>
        <h2 className='featureTitle'>Featured Products</h2>
        <div className='productsContainer'>
          {state.products.length > 0 && state.products.map(product => (
            <SingleProduct singleProduct={product} key={product.id} />
          )) }

        </div>
      </section>
    </div>
  )
}

export default Landing