import React, {useState} from 'react';

import {useDispatch} from 'react-redux';
import {toogleShowFilter} from '../../store/actions/products';

import { AlertTriangle } from 'react-feather';
import {Product, NavSearch} from '../../components';


import './Products.scss'

const Products = ({products, openedFilter}) => {

  const dispatch = useDispatch();

  const [showInput, setShowInput] =  useState(false);

  const handleShowInput = () => {
    setShowInput(!showInput)
    dispatch(toogleShowFilter())
  }

  return (
    <>
      <div className="container">
        <main className="products">
          {
            products.map((product, key) => (
              <Product key={key} product={product}/>
            ))
          }
          {
            !products.length && openedFilter
              ? <div className="products__no-product">
                  <AlertTriangle/>
                  <p>Desculpe. Não encontramos nenhum produto com esse nome.</p>
                </div>
              : <></>
          }
          <NavSearch 
            showInput={showInput} 
            handleShowInput={handleShowInput}
          />
        </main>
      </div>
    </>
  )
}

export default Products