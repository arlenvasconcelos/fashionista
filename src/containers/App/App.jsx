import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import './App.scss';

import Routes from '../../routes';
import TopBar from '../../components/TopBar';
import Cart from '../Cart';

function App() {
 
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Cart/>
        {/* <Drawer/> */}
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
