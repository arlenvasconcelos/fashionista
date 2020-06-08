import React, { useEffect, useState } from 'react';
import {useParams, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux';

import {SingleProduct} from '../../containers';

const SingleProductRoute = () => {

  const {name} = useParams();

  const {products} = useSelector(state => state)
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(products.allProducts.find(p => p.style + '-' + p.name.toLowerCase().trim().replace(/ /g, '-') === name));
  },[products, name])

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