import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {closeCart} from '../../store/actions/cart';

import ProductImage from '../ProductImage';

import './CartDetails.scss';

const CartDetails = ({cart}) => {

  const dispatch = useDispatch();

  const handleClickBackButton = () => {
    dispatch(closeCart())
  }

  const handleDecrementItem = () => {
    
  }

  const handleAddItem = () => {

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
              <div className="item__name">{item.name}</div>
              <div className="item__size">Tam: {item.selected_size}</div>
              <div className="item__installments">{item.installments} sem juros</div>
              <div>
                <button 
                  className="item__button"
                  onClick={() => handleDecrementItem(item.style)}
                >
                  -
                </button>
                {item.quantity ? "1": "0"}
                <button 
                  className="item__button"
                  onClick={() => handleAddItem(item.style)}
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