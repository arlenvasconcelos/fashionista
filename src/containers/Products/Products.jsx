import React, {useState} from 'react';

import {useDispatch} from 'react-redux';
import {handleShowFilter} from '../../store/actions/products';

import Product from '../../components/Product';
import NavSearch from '../../components/NavSearch';

import './Products.scss'

const Products = ({products, openedFilter}) => {

  const dispatch = useDispatch();

  const [showInput, setShowInput] =  useState(false);

  const handleShowInput = () => {
    setShowInput(!showInput)
    dispatch(handleShowFilter())
  }

  return (
    <>
      <div className="container">
        <div className="products">
          {
            products.map((product, key) => (
              <Product key={key} product={product}/>
            ))
          }
          {
            !products.length && openedFilter
              ? <p>Desculpe. Não encontramos nenhum produto com esse nome.</p>
              : <></>
          }
          <NavSearch 
            showInput={showInput} 
            handleShowInput={handleShowInput}
          />
        </div>
      </div>
    </>
  )
}

export default Products