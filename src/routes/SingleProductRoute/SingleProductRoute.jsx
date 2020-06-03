import React, { useEffect, useState } from 'react';
import {useParams, Redirect} from 'react-router-dom'
import { useSelector } from 'react-redux';

import SingleProduct from '../../containers/SingleProduct';

const SingleProductRoute = () => {

  const {name} = useParams();
  console.log(name)

  const {products} = useSelector(state => state)
  console.log(products)
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(products.find(p => p.style + p.name.toLowerCase().trim().replace(/ /g, '-') === name));
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