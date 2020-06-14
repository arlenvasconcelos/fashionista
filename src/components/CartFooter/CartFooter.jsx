import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './CartFooter.scss';

const CartFooter = () => {
  const { cart } = useSelector((state) => state);

  const [totalActualPrice, setTotalActualPrice] = useState(0);
  const [totalRegularPrice, setTotalRegularPrice] = useState(0);

  const formattingValue = (value) => {
    const v = value.toLocaleString('pt-br', { minimumFractionDigits: 2 });
    return v;
  };

  useEffect(() => {
    if (cart.items.length > 0) {
      const values = cart.items.reduce(
        (acc, item) => {
          let actualPrice =
            item.quantity *
            parseFloat(item.actual_price.split(' ')[1].replace(',', '.'));
          let regularPrice =
            item.quantity *
            parseFloat(item.regular_price.split(' ')[1].replace(',', '.'));

          return [
            acc[0] + parseFloat(actualPrice.toFixed(2)),
            acc[1] + parseFloat(regularPrice.toFixed(2)),
          ];
        },
        [0, 0]
      );

      setTotalActualPrice(values[0]);
      setTotalRegularPrice(values[1]);
    } else {
      setTotalActualPrice(0);
      setTotalRegularPrice(0);
    }
  }, [cart]);

  return (
    <div className="cart__footer">
      <div className="footer__content">
        <p className="content__row">
          Total: <span>{formattingValue(totalRegularPrice)}</span>
        </p>
        <p className="content__row">
          Desconto:{' '}
          <span>{formattingValue(totalRegularPrice - totalActualPrice)}</span>
        </p>
        <p className="content__row--total">
          Total com desconto: <span>{formattingValue(totalActualPrice)}</span>
        </p>
      </div>
      <button>CONCLUIR COMPRA</button>
    </div>
  );
};

export default CartFooter;
