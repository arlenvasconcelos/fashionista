import React from 'react';

import './ProductImage.scss'

const ProductImage = ({path}) => {
  return (
    <div className="product-image">
      <img src={path} alt=""/>
    </div>
  )
}

export default ProductImage;