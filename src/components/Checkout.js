import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function Checkout() {
  const state = useSelector(state => state);

  // useEffect(() => {
    
  // }, [])
  
  return (
    <div>
      { state.cart.length > 0 ? 
        state.cart.map(item => (
          <div>{item.title}</div>
        ))
      :
        <div>No items in cart</div>
    }
    </div>
  )
}

export default Checkout