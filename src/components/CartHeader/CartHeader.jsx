import React from 'react';
import {useDispatch} from 'react-redux';
import {closeCart} from '../../store/actions/cart';

import './CartHeader.scss';

const CartHeader = () => {

  const dispatch = useDispatch();

  const handleCloseCart = () => {
    dispatch(closeCart())
  }

  return (
    <div className="cart__header">
      <button onClick={handleCloseCart} >
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  )
}

export default CartHeader