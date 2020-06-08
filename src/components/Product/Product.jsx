import React from 'react';
import {Link} from 'react-router-dom';

import ProductPrice from '../ProductPrice/ProductPrice';
import NoImage from '../NoImage/NoImage';

import './Product.scss'

const Product = ({product}) => {

  return (
    <>
      <div className={`product ${product.image ? '' : 'no-image' }`}>
        <Link 
          to={`/produto/${product.style}-${product.name.toLowerCase().trim().replace(/ /g, '-')}`}
        >
          <div className="product__content">
            {
              product.image 
                ? <img src={product.image} alt={product.name}/>
                : <NoImage/>
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