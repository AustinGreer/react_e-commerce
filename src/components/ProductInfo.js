import React, { useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProductInfo } from '../store/actions/actions';

function ProductInfo() {
  const { id } = useParams();
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductInfo(id));
  }, [])

  return (
    <div>
      
    </div>
  )
}

export default ProductInfo