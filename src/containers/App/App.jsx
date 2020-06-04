import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {openCart} from '../../store/actions/cart'

import './App.scss';

import Routes from '../../routes';
import TopBar from '../../components/TopBar';
import Cart from '../Cart';

function App() {

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(openCart())
  }
  

  return (
    <div className="App">
      <Router>
        <TopBar 
          closeCart={closeCart}
        />
        <Cart/>
        {/* <Drawer/> */}
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
