import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {closeCart, addItem, decreaseItem, removeItem} from '../../store/actions/cart';

import ProductImage from '../ProductImage';

import './CartDetails.scss';

const CartDetails = ({cart}) => {

  const dispatch = useDispatch();

  const handleClickBackButton = () => {
    dispatch(closeCart())
  }

  const handleDecreaseItem = (item) => {
    if (item.quantity > 1){
      dispatch(decreaseItem(item))
    }
    else {
      dispatch(removeItem(item));
    }
  }

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  }

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  }

  return (
    <div className="cart__details">
      <button onClick={handleClickBackButton} className="cart__button__back">
        <i class="fas fa-arrow-right"></i>
      </button>
      {
        cart.items && cart.items.map((item) => (
          <div className="cart__item">
            <div className="item__image">
              <ProductImage path={item.image}/>
            </div>
            <div className="item__details"> 
              <div className="item__header">
                {item.name}
                <button onClick={() => handleRemoveItem(item)}>
                  <i class="fas fa-trash-alt"></i> 
                </button>
              </div>
              <div className="item__size">Tam: {item.selected_size}</div>
              <div className="item__installments">{item.installments} sem juros</div>
              <div>
                <button 
                  className="item__button"
                  onClick={() => handleDecreaseItem(item)}
                >
                  -
                </button>
                {item.quantity}
                <button 
                  className="item__button"
                  onClick={() => handleAddItem(item)}
                >
                  +
                </button>  
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CartDetails