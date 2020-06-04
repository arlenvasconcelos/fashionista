import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import './CartFooter.scss';

const CartFooter = () => {

  const {cart} = useSelector(state => state);

  console.log(cart)

  const [totalActualPrice, setTotalActualPrice] = useState(0);
  const [totalRegularPrice, setTotalRegularPrice] = useState(0);

  const formattingValue = (value) => {
    const v = value.toString()
    if (v.includes('.') && v.split('.')[1].length === 0)
     return v + '00';
    else if (v.includes('.') && v.split('.')[1].length === 1)
     return v + '0';
    else if (!v.includes('.'))
      return v + '.00';
    else
      return v
  }

  useEffect(() => {
    if (cart.items.length > 0){
      const values = cart.items.reduce((acc, item) => {
        let actualPrice = item.quantity * parseFloat(item.actual_price.split(' ')[1].replace(',','.'));
        let regularPrice = item.quantity * parseFloat(item.regular_price.split(' ')[1].replace(',','.'));
        console.log(actualPrice, regularPrice)
        return {
          totalActualPrice: acc.totalActualPrice + actualPrice,
          totalRegularPrice: acc.totalRegularPrice + regularPrice,
        };
      }, {totalActualPrice: 0, totalRegularPrice: 0});
 
      setTotalActualPrice(values.totalActualPrice);
      setTotalRegularPrice(values.totalRegularPrice);
    }
  },[cart])

  return (
    <div className="cart__footer">
      <div className="footer__content">
        <div>Total: {formattingValue(totalRegularPrice)}</div>
        <div>Desconto: {formattingValue(totalRegularPrice - totalActualPrice)}</div>
        <div>Total com Desconto: {formattingValue(totalActualPrice)}</div>
      </div>
      <button>
        CONCLUIR COMPRA
      </button>
    </div>
  )
}

export default CartFooter