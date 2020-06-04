import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './CartDetails.scss';

const CartFooter = () => {

  const {cart} = useSelector();

  return (
    <div className="cart__footer">
      total
    </div>
  )
}

export default CartFooter