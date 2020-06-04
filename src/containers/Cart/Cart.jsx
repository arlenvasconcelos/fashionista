import React, {useRef, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {closeCart} from '../../store/actions/cart'

import './Cart.scss';

import Drawer from '../../components/Drawer';
import CartDetails from '../../components/CartDetails';
import CartHeader from '../../components/CartHeader';
import CartFooter from '../../components/CartFooter';

const Cart = () => {

  const wrapperRef = useRef(null);

  const {cart} = useSelector(state => state);

  useOutsideAlerter(wrapperRef, cart.open);
  
  return (
    <Drawer open={cart.open}>
      <div ref={wrapperRef} className="cart">
        <CartHeader />
        <CartDetails cart={cart}/>
        <CartFooter />
      </div>
    </Drawer>
  )
}

function useOutsideAlerter(ref, open) {
  const dispatch = useDispatch();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && open) {
        dispatch(closeCart());
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, open, dispatch]);
}

export default Cart