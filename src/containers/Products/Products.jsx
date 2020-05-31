import React from 'react';

import Product from '../../components/Product';

import './Products.scss'

const Products = ({products}) => {

  return (
    <>
      <div className="products">
        <div className="container">
          {
            products.map((product, key) => (
              <Product key={key} product={product}/>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Products