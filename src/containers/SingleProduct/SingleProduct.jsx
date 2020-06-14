import React from 'react';
import { ProductImage, ProductDetails } from '../../components';
import { ArrowLeft } from 'react-feather';

import './SingleProduct.scss';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
  return (
    <div className="container">
      <main className="single-product">
        <Link to="/" className="single-product__icon">
          <ArrowLeft />
        </Link>
        <ProductImage path={product.image} />
        <ProductDetails product={product} />
      </main>
    </div>
  );
};

export default SingleProduct;
