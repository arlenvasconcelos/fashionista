import React from 'react';

import './Drawer.scss';

const Drawer = ({ open, children }) => {
  return <div className={`drawer ${!open ? 'inactive' : ''}`}>{children}</div>;
};

export default Drawer;
