import React from 'react';
import {Link} from 'react-router-dom';

import './Product.scss'

const Product = ({product}) => {
  return (
    <>
      <div className="product">
        <Link to={`/produto/${product.name.replace(' ', '-')}`}>
          <div>
            <img src={product.image} alt={product.name}/>
          </div>
          <div className="product__footer">
            <div className="product__name">
              {product.name}
            </div>
            <div>
              {product.actual_price}  
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Product