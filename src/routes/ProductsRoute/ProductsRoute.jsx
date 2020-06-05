import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {setAllProducts} from '../../store/actions/products';

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
      dispatch(setAllProducts(data));
    })
    .catch(err => console.log('Error at getProducts'))
    
  },[dispatch])

  console.log(products)
  
  return (
    <>
      {
        products.allProducts.length
          ? <Products
              openedFilter={products.openedFilter}
              products={ products.openedFilter ? products.filteredProducts : products.allProducts }
            />
          : <Loading/>
      }
    </>
  )
}

export default ProductsRoutes