import React from 'react';

import './TopBar.scss'

export default () => (
  <header className="topbar">
    <div className="container">
      <div className="topbar__content">
        <div>
          FASHIONISTA
        </div>
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