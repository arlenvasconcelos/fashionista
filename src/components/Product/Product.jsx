import React from 'react';

const Product = ({product}) => {
  return (
    <>
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
    </>
  )
}

export default Product