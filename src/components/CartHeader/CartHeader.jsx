import React from 'react';
import {useDispatch} from 'react-redux';
import {closeCart} from '../../store/actions/cart';

import './CartDetails.scss';

const CartHeader = () => {

  const dispatch = useDispatch();

  const handleCloseCart = () => {
    dispatch(closeCart())
  }

  return (
    <div>
      <button onClick={handleCloseCart} className="cart__header">
        <i class="fas fa-arrow-right"></i>
      </button>
    </div>
  )
}

export default CartHeader