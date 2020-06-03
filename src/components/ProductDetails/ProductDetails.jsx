import React from 'react';

import './ProductDetails.scss';
import ProductPrice from '../ProductPrince.jsx';

const ProductDetails = ({product}) => {
  return (
    <div className="product-details">
      <div className="details__content">
        <div className="details__name">
          {product.name}
        </div>
        <ProductPrice 
          regularPrice={product.regular_price}
          actualPrice={product.actual_price}
          onSale={product.on_sale}
        />
      </div>
    </div>
  )
}

export default ProductDetails;