import React from 'react';

import './ProductDetails.scss';

const ProductDetails = ({product}) => {
  return (
    <div className="product-details">
      <div className="details__content">
        <div className="details__name">
          {product.name}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails;