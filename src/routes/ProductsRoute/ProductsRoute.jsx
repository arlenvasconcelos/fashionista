import React, { useEffect } from 'react';

import { useSelector, useDispatch } from "react-redux";
import {setAllProducts} from '../../store/actions/products';

import {Products} from '../../containers';
import {Loading, Footer} from '../../components';

import {getProducts}from '../../service/api'

const ProductsRoutes = () => {

  const dispatch = useDispatch();

  const {products} = useSelector(state => state);

  useEffect(() => {
    getProducts()
    .then(data => {
      dispatch(setAllProducts(data));
    })
    .catch(err => console.log('Error at getProducts'))
    
  },[dispatch])
  
  return (
    <>
      {
        products.allProducts.length
          ? <Products
              openedFilter={products.openedFilter}
              products={ products.openedFilter 
                ? products.filteredProducts 
                : products.allProducts
              }
            />
          : <Loading/>
      }
      <Footer stylePosition={`${products.allProducts.length ? 'relative' : 'fixed'}`}/>
    </>
  )
}

export default ProductsRoutes