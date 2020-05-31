import React, { useEffect, useState } from 'react';

import Products from '../../containers/Products';

import {getProducts} from '../../service/api'
import Loading from '../../components/Loading';

const ProductsRoutes = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
      .then(data => {
        setProducts(data)
        console.log(data)
      })
      .catch(err => console.log('Error at getProducts'))
  },[])
  
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