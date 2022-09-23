import React from 'react';
import { Link } from 'react-router-dom';

function SingleProduct({singleProduct}) {
  return (
    <Link to="/product/1" className='singleProductContainer'>
            <img src={singleProduct.image} alt="product img" />
            <div className='singleProductText'>
              <h2>{singleProduct.title}</h2>
              <p>${singleProduct.price}</p>
              
              {singleProduct.rating && 
                <p>{singleProduct.rating.rate} stars ({singleProduct.rating.count} reviews)</p>
              }

            </div>
    </Link>
  )
}

export default SingleProduct