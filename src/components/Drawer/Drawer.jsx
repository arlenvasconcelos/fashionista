import React from 'react';

import './Drawer.scss';

const Drawer = ({children}) => {
  return (
  <>
    <div className="drawer">
      {children}
    </div>
  </>
  )
}

export default Drawer