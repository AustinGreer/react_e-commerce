import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';


import SingleProduct from './SingleProduct';
import ErrorMessage from './ErrorMessage';

function Products() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        setError(err.message)
      })
      .finally(() => {
        setLoading(false);
      })
  }, [])
  
  return (
      <section className='productsPageContainer'>
        { loading && <CircularProgress />}

        {products.length ? <h1>Current Products</h1> : null }
        { products.length > 0 && (
          <div className='currentProductsContainer'>
            {products.map(singleProduct => (
              <SingleProduct key={singleProduct.id} singleProduct={singleProduct} />
            ))}
          </div>
        )}
        
        { error && <ErrorMessage error={error} /> }
      </section>
  )
}

export default Products