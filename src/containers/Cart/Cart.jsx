import React from 'react';

import {useSelector} from 'react-redux';

import './Cart.scss';

import Drawer from '../../components/Drawer';
import CartDetails from '../../components/CartDetails';
import CartHeader from '../../components/CartHeader';
import CartFooter from '../../components/CartFooter';

const Cart = () => {

  const {cart} = useSelector(state => state);

  return (
    <Drawer open={cart.open}>
      <CartHeader />
      <CartDetails cart={cart}/>
      <CartFooter />
    </Drawer>
  )
}

export default Cart