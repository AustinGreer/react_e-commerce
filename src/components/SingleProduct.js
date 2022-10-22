import React from 'react';
import { Link } from 'react-router-dom';

function SingleProduct({singleProduct}) {
  const truncateTitle = (title) => {
    if (title.length > 20) {
      return title.substring(0, 20) + '...';
    }

    return title;
  }
  
  return (
    <Link to={`/products/${singleProduct.id}`} className='singleProductContainer'>
            <img src={singleProduct.image} alt="product img" />
              <h2>{truncateTitle(singleProduct.title)}</h2>
              <p>${singleProduct.price}</p>
              
              {singleProduct.rating && 
                <p>{singleProduct.rating.rate} stars ({singleProduct.rating.count} reviews)</p>
              }
    </Link>
  )
}

export default SingleProduct