import React from 'react';

import Product from '../../components/Product';

import './Products.scss'
import NavSearch from '../../components/NavSearch';

const Products = ({products, openedFilter}) => {

  return (
    <>
      <div className="container">
        <div className="products">
          {
            products.map((product, key) => (
              <Product key={key} product={product}/>
            ))
          }
          {
            !products.length && openedFilter
              ? <p>Desculpe. Não encontramos nenhum produto com esse nome.</p>
              : <></>
          }
          <NavSearch/>
        </div>
      </div>
    </>
  )
}

export default Products