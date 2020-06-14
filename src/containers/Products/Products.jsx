import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { toogleShowFilter } from '../../store/actions/products';

import { AlertTriangle } from 'react-feather';
import { Product, NavSearch } from '../../components';

import './Products.scss';

const Products = ({ products }) => {
  const dispatch = useDispatch();

  const [showInput, setShowInput] = useState(false);

  const handleShowInput = () => {
    setShowInput(!showInput);
    dispatch(toogleShowFilter());
  };

  return (
    <>
      <div className="container">
        <main className="products">
          {products.length ? (
            <>
              <div className="products__quantity">
                <p>{`${products.length} items`}</p>
              </div>
              <div className="products__items">
                {products.map((product, key) => (
                  <Product key={key} product={product} />
                ))}
              </div>
            </>
          ) : (
            <div className="products__noproduct">
              <AlertTriangle />
              <p>Desculpe. Não encontramos nenhum produto.</p>
            </div>
          )}
          <NavSearch showInput={showInput} handleShowInput={handleShowInput} />
        </main>
      </div>
    </>
  );
};

export default Products;
