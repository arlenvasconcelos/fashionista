import React, { useState } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import './App.scss';

import Routes from '../../routes'
import TopBar from '../../components/TopBar';
import Drawer from '../../components/Drawer';
import Cart from '../Cart';

function App() {

  const [showDrawer, setShowDrawer] = useState();

  const handleCloseDrawer = () => {
    setShowDrawer(false)
  }

  return (
    <div className="App">
      <Router>
        <TopBar/>
        <Cart/>
        {/* <Drawer/> */}
        <Routes/>
      </Router>
    </div>
  );
}

export default App;
