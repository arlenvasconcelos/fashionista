import React, { useEffect, useState } from 'react';

import Products from '../../containers/Products';

import {getProducts} from '../../service/api'

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
      <Products products={products}/>
    </>
  )
}

export default ProductsRoutes