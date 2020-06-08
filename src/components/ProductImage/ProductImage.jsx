import React from 'react';

import './ProductImage.scss'
import NoImage from '../NoImage/NoImage';

const ProductImage = ({path}) => {
  return (
    <div className="product-image">
      {
        path 
          ? <img src={path} alt=""/>
          : <NoImage/>
      }
    </div>
  )
}

export default ProductImage;