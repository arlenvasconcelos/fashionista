import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import {Search, ShoppingCart} from 'react-feather';
import {useSelector} from 'react-redux'

import Notification from '../Notification';

import './TopBar.scss';

export default ({closeCart}) => {

  const {cart} = useSelector(state => state);

  const [quantity, setQuantity] = useState(0)

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
            <button className="icon" >
              <Search/>
            </button>
            <button className="icon" onClick={closeCart}>
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