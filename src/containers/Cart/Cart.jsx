import React from 'react';

import {useSelector} from 'react-redux';

import './Cart.scss';
import Drawer from '../../components/Drawer';
import CartDetails from '../../components/CartDetails';

const Cart = () => {

  const {cart} = useSelector(state => state)

  console.log(cart)

  return (
    <>
      {
        cart.open ? (
          <Drawer>
            <CartDetails cart={cart}/>
          </Drawer>
        ) : (
          <></>
        )
      }
    </>
  )
}

export default Cart