import React from 'react';
import {useDispatch} from 'react-redux';
import {closeCart} from '../../store/actions/cart';

import {ArrowRight} from 'react-feather'

import './CartHeader.scss';

const CartHeader = () => {

  const dispatch = useDispatch();

  const handleCloseCart = () => {
    dispatch(closeCart())
  }

  return (
    <div className="cart__header">
      <button onClick={handleCloseCart} >
        <ArrowRight/>
      </button>
    </div>
  )
}

export default CartHeader