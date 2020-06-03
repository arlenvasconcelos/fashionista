import React from 'react';
import ProductImage from '../../components/ProductImage';
import ProductDetails from '../../components/ProductDetails';

import './SingleProduct.scss';

const SingleProduct = ({product}) => {

  return (
    <div className="container">
      <div className="single-product">
        <ProductImage/>
        <ProductDetails/>
      </div>
    </div>
  )
}

export default SingleProduct