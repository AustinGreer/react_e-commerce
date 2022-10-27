import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProductInfo } from '../store/actions/actions';

function ProductInfo() {
  const { id } = useParams();
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  //TODO: need to memoize state with useCallBack

  useEffect(() => {
    dispatch(fetchProductInfo(id));
  }, [dispatch, id])

  return (
    <section className='productInfoContainer'>
      <section className='productInfoDetailsContainer'>
        <img src={state.productInfo.image} alt="product img" />
        <div className='productInfoText'>
          <h2>{state.productInfo.title}</h2>
          <h3>${state.productInfo.price}</h3>
          { state.productInfo.rating && <h3>{state.productInfo.rating.rate} stars ({state.productInfo.rating.count} reviews)</h3> }
          <div className='productInfoAddtoCart'>
            <h4>In stock ({state.productInfo.quantity})</h4>
            <button>Add to Cart</button>
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