import React from 'react';

const CartDetails = ({cart}) => {
  return (
    <div className="">
      {
        cart.items && cart.items.map((item) => (
          <p>{item.style}</p>
        ))
      }
    </div>
  )
}

export default CartDetails