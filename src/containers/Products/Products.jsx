import React from 'react';

import Product from '../../components/Product';

const Products = ({products}) => {

  return (
    <>
      {
        products.map((product, key) => (
          <Product key={key} product={product}/>
        ))
      }
    </>
  )
}

export default Products