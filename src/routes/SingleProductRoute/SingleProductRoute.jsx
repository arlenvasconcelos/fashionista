import React, { useEffect, useState } from 'react';
import {useParams, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux';

import SingleProduct from '../../containers/SingleProduct';

const SingleProductRoute = () => {

  const {name} = useParams();

  const {products} = useSelector(state => state)
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(products.find(p => p.style + '-' + p.name.toLowerCase().trim().replace(/ /g, '-') === name));
  },[products, name])

  if (!products.length){
    return <Redirect to="/" />
  }
  
  return (
    <>
      <SingleProduct product={product}/>
    </>
  )
}

export default SingleProductRoute