import React, {useState, useEffect}from 'react';
import {Link} from 'react-router-dom';

import './Product.scss'
import ProductPrice from '../ProductPrince.jsx';

const Product = ({product}) => {

  return (
    <>
      <div className="product">
        <Link 
          to={`/produto/${product.style}-${product.name.toLowerCase().trim().replace(/ /g, '-')}`}
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
              <ProductPrice 
                regularPrice={product.regular_price}
                actualPrice={product.actual_price}
                onSale={product.on_sale}
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Product