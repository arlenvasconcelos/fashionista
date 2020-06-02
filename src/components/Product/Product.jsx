import React, {useState, useEffect}from 'react';
import {Link} from 'react-router-dom';

import './Product.scss'

const Product = ({product}) => {

  return (
    <>
      <div className="product">
        <Link 
          to={`/produto/${product.name.toLowerCase().trim().replace(/ /g, '-')}`}
        >
          <div className="product__content">
            {
              product.image 
                ? <img src={product.image} alt={product.name}/>
                : <div className="product__noimage">Imagem indisponível</div>
            }
            { product.on_sale 
                ? <div className="price__off">{'- ' + product.discount_percentage}</div>
                : <></>
            }
            <div className="product__footer">
              <div className="product__name">
                {product.name}
              </div>
              <div className="product__price">
                {product.actual_price}
                { product.on_sale
                  ? <span>{product.regular_price}</span>
                  : <></>
                }
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Product