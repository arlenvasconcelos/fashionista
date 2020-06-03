import React from 'react';

import {useSelector} from 'react-redux';

import './Cart.scss';

const Cart = () => {

  const {cart} = useSelector(state => state)

  console.log(cart)

  return (
    <div>
      cart
    </div>
  )
}

export default Cart