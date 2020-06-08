import React, { useEffect, useState } from 'react';
import {useParams, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux';

import {SingleProduct} from '../../containers';

const SingleProductRoute = () => {

  const {code_color} = useParams();

  const {products} = useSelector(state => state)
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(products.allProducts.find(p => p.code_color === code_color));
  },[products, code_color])

  if (!products.allProducts.length){
    return <Redirect to="/" />
  }
  
  return (
    <>
      <SingleProduct product={product}/>
    </>
  )
}

export default SingleProductRoute