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

  return (
    <div className="cart__details">
      <button onClick={handleClickBackButton} className="cart__button__back">
        <i class="fas fa-arrow-left"></i>
      </button>
      {
        cart.items && cart.items.map((item) => (
          <div className="cart__item">
            <div className="item__image">
              <ProductImage path={item.image}/>
            </div>
            <div className="item__details">
              {item.style}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default CartDetails