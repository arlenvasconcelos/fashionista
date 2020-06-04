import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

import './CartFooter.scss';

const CartFooter = () => {

  const {cart} = useSelector(state => state);

  const [totalActualPrice, setTotalActualPrice] = useState(0);
  const [totalRegularPrice, setTotalRegularPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

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
        
        return {
          totalActualPrice: acc.totalActualPrice + actualPrice,
          totalRegularPrice: acc.totalRegularPrice + regularPrice,
        };
      }, {totalActualPrice: 0, totalRegularPrice: 0});
 
      setTotalActualPrice(values.totalActualPrice);
      setTotalRegularPrice(values.totalRegularPrice);
    }
  },[cart])

  useEffect(() => {
    setQuantity(
      cart.items.reduce((acc, item) => {
        return acc + item.quantity
      }, 0)
    );
    
  },[cart])

  return (
    <div className="cart__footer">
      <div className="footer__content">
        <p className="content__row">Quantidade de items: <span>{quantity}</span></p>
        <p className="content__row">Total: <span>{formattingValue(totalRegularPrice)}</span></p>
        <p className="content__row">Desconto: <span>{formattingValue(totalRegularPrice - totalActualPrice)}</span></p>
        <p className="content__row--total">Total com Desconto: <span>{formattingValue(totalActualPrice)}</span></p>
      </div>
      <button>
        CONCLUIR COMPRA
      </button>
    </div>
  )
}

export default CartFooter