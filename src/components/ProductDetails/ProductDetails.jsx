import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'

import {openCart, addItem} from '../../store/actions/cart';

import './ProductDetails.scss';
import ProductPrice from '../ProductPrice';

const ProductDetails = ({product}) => {

  const {cart} = useSelector(state => state);

  const dispatch = useDispatch();

  const [selectedSize, setSelectedSize] = useState('');
  const [error, setError] = useState({
    message: '',
    status: false
  });

  const handleSize = (value) => {
    if (value === selectedSize) {
      setSelectedSize('');
    }
    else {
      setSelectedSize(value);
      setError({
        message: "",
        status: false,
      })
    }
  }

  const handleAddItem = (e) => {
    e.preventDefault();

    if (selectedSize !== ''){

      const {sizes, ...rest} = product;
      
      dispatch(addItem({
        ...rest,
        selected_size: selectedSize,
      }))
      dispatch(openCart())
    }
    else {
      setError({
        message: "Por favor, selecione um tamanho.",
        status: true,
      })
    }

  }

  return (
    <div className="product-details">
      <div className="details__content">
        <div className="details__name">
          {product.name}
        </div>
        <div className="details__style">
          {product.style}
        </div>
        <div className="details__color">
          Cor: {product.color ? product.color.charAt(0)+ product.color.slice(1).toLowerCase() : '' }
        </div>
        <div className="details__sizes">
          {
            product.sizes && product.sizes.map((item, key) => (
              <button 
                key={key} 
                disabled={!item.available}
                onClick={() => handleSize(item.size)}
                className={selectedSize === item.size ? `sizes__item selected` : `sizes__item`}
              >
                {item.size}
              </button> 
            ))
          }
        </div>
        <ProductPrice 
          regularPrice={product.regular_price}
          actualPrice={product.actual_price}
          onSale={product.on_sale}
        />
        <div className="details__installments">
          {product.installments ? `${product.installments} sem juros` : ''} 
        </div>
        
        <button 
          className="details__button"
          onClick={handleAddItem}
        >
          COMPRAR
        </button>
        {
          error.status ? <span className="details__error">{error.message}</span> :  <></>
        }
      </div>
    </div>
  )
}

export default ProductDetails;