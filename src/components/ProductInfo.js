import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductInfo() {
  const [productInfo, setProductInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, [])
  
  return (
    <div>
      
    </div>
  )
}

export default ProductInfo