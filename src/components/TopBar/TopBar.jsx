import React from 'react';

import './TopBar.scss'
import { Link } from 'react-router-dom';

export default () => (
  <header className="topbar">
    <div className="container">
      <div className="topbar__content">
        <Link to="/">
          <div className="topbar__logo">
            FASHIONISTA
          </div>
        </Link>
        <div className="topbar__icons">
          <button className="icon">
            <i className="fas fa-search"></i>
          </button>
          <button className="icon">
            <i className="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  </header>
)