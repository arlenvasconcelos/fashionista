import React, {useState} from 'react';
import {useDispatch} from 'react-redux'

import {openCart, addItem} from '../../store/actions/cart';

import './ProductDetails.scss';
import ProductPrice from '../ProductPrice/ProductPrice';

const ProductDetails = ({product}) => {

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
        <h4 className="details__name">
          {product.name}
        </h4>
        <p className="details__style">
          Ref:{product.code_color}
        </p>
        <p className="details__color">
          Cor: {product.color ? product.color.charAt(0)+ product.color.slice(1).toLowerCase() : '' }
        </p>
        <div className="details__sizes">
          {
            product.sizes && product.sizes.map((item, key) => (
              <button 
                key={key}
                name={`tamanho ${item.size}`}
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
          name="comprar"
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