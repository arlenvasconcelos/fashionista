import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {setProducts as setProductsAction} from '../../store/actions/products';

//components
import Products from '../../containers/Products';
import Loading from '../../components/Loading';

//service
import {getProducts} from '../../service/api'

const ProductsRoutes = () => {

  const dispatch = useDispatch();

  const {products} = useSelector(state => state);

  useEffect(() => {
    getProducts()
      .then(data => {
        dispatch(setProductsAction(data));
        console.log(data)
      })
      .catch(err => console.log('Error at getProducts'))
    
  },[dispatch])
  
  return (
    <>
      {
        products.length 
          ? <Products products={products}/>
          : <Loading/>
      }
    </>
  )
}

export default ProductsRoutes