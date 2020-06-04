import React from 'react';
import {Search, ShoppingCart} from 'react-feather'

import './TopBar.scss'
import { Link } from 'react-router-dom';

export default ({closeCart}) => (
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
            <ShoppingCart/>
          </button>
        </div>
      </div>
    </div>
  </header>
)