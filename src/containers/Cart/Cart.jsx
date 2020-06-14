import React, { useRef, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { closeCart } from '../../store/actions/cart';

import { Drawer, CartDetails, CartHeader, CartFooter } from '../../components';

import './Cart.scss';

const Cart = () => {
  const wrapperRef = useRef(null);

  const { cart } = useSelector((state) => state);

  useOutsideClick(wrapperRef, cart.open);

  return (
    <Drawer open={cart.open}>
      <div ref={wrapperRef} className="cart">
        <CartHeader />
        <CartDetails cart={cart} />
        <CartFooter />
      </div>
    </Drawer>
  );
};

function useOutsideClick(ref, open) {
  const dispatch = useDispatch();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target) && open) {
        dispatch(closeCart());
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, open, dispatch]);
}

export default Cart;
