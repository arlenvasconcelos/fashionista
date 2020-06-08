import React from 'react';
import {ProductImage, ProductDetails} from '../../components'

import './SingleProduct.scss';

const SingleProduct = ({product}) => {

  return (
    <div className="container">
      <main className="single-product">
        <ProductImage path={product.image}/>
        <ProductDetails product={product}/>
      </main>
    </div>
  )
}

export default SingleProduct