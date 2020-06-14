import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeCart } from '../../store/actions/cart';

import { ArrowRight } from 'react-feather';

import './CartHeader.scss';

const CartHeader = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state);

  const [quantity, setQuantity] = useState(0);

  const handleCloseCart = () => {
    dispatch(closeCart());
  };

  useEffect(() => {
    setQuantity(
      cart.items.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0)
    );
  }, [cart]);

  return (
    <div className="cart__header">
      <button onClick={handleCloseCart}>
        <ArrowRight />
      </button>
      <span>Carrinho ({quantity})</span>
    </div>
  );
};

export default CartHeader;
