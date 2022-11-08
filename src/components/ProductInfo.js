import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProductInfo, addToCart } from '../store/actions/actions';

function ProductInfo() {
  const { id } = useParams();
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const [disabledBtn, setDisabledBtn] = useState(false);


  useEffect(() => {
    dispatch(fetchProductInfo(id));
  }, [dispatch, id])

  const addItemToCart = () => {
    dispatch(addToCart(state.productInfo))
  }

  return (
    <section className='productInfoContainer'>
      <section className='productInfoDetailsContainer'>
        <img src={state.productInfo.image} alt="product img" />
        <div className='productInfoText'>
          <h2>{state.productInfo.title}</h2>
          <h3>${state.productInfo.price}</h3>
          { state.productInfo.rating && <h3>{state.productInfo.rating.rate} stars ({state.productInfo.rating.count} reviews)</h3> }
          <div className='productInfoAddtoCart'>

            {state.productInfo.quantity > 0 ? (
              <>
                <h4>In Stock ({state.productInfo.quantity})</h4>
                <button onClick={addItemToCart}>Add to Cart</button>
              </>
            ) : (
              <h4>Out of Stock</h4>
            )}
          </div>
        </div>
      </section>

      <section className='productInfoDescription'>
        <h2>Description</h2>
        <p>{state.productInfo.description}</p>
      </section>
    </section>
  )
}

export default ProductInfo