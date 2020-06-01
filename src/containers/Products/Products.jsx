import React from 'react';

import Product from '../../components/Product';

import './Products.scss'

const Products = ({products}) => {

  return (
    <>
      <div className="container">
        <div className="products">
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