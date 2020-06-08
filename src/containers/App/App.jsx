import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.scss';

import Routes from '../../routes';
import {TopBar} from '../../components';
import Cart from '../Cart/Cart';

function App() {
 
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Cart/>
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
