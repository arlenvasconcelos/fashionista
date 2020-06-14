import React from 'react';

import './ProductPrice.scss';

const ProductPrice = ({ actualPrice, regularPrice, onSale }) => (
  <div className="product__price">
    {actualPrice}
    {onSale ? <span>{regularPrice}</span> : <></>}
  </div>
);

export default ProductPrice;
