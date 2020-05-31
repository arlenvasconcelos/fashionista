import React from 'react';
import {Link} from 'react-router-dom';

const Product = ({product}) => {
  return (
    <>
      <Link to={`/produto/${product.name.replace(' ', '-')}`}>
        <div className="product__paper">
          <div className="product__img">
            <img src={product.image} alt={product.name}/>
          </div>
          <div className="product.footer">
            <div>
              {product.name}
            </div>
            <div>
              {product.actual_price}
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Product