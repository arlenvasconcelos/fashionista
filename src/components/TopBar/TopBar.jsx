import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {ShoppingCart} from 'react-feather';

import {useSelector, useDispatch} from 'react-redux';
import {openCart} from '../../store/actions/cart';
import {handleShowFilter} from '../../store/actions/products';

import Notification from '../Notification/Notification';
import NavSearch from '../NavSearch/NavSearch';

import './TopBar.scss';

export default () => {

  const {cart} = useSelector(state => state);

  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(0);
  const [showInput, setShowInput] =  useState(false);

  const handleShowInput = () => {
    setShowInput(!showInput)
    dispatch(handleShowFilter())
  }

  const handleCartButton = () => {
    dispatch(openCart())
  }

  useEffect(() => {
    setQuantity(
      cart.items.reduce((acc, item) => {
        return acc + item.quantity
      }, 0)
    );
  },[cart])

  return (
    <header className="topbar">
      <div className="container">
        <div className="topbar__content">
          <Link to="/">
            <div className="topbar__logo">
              FASHIONISTA
            </div>
          </Link>
          <div className="topbar__icons">
            <NavSearch 
              onTopbar={true} 
              handleShowInput={handleShowInput}
              showInput={showInput}
            />
            <button className="icon" onClick={handleCartButton}>
              {
                cart.items.length 
                  ? <Notification value={quantity}/>
                  : <></>
              }
              <ShoppingCart/>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
};