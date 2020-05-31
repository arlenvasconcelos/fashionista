import React from 'react';
import {Route} from 'react-router-dom';

import ProductsRoute from './ProductsRoute'
import SingleProductRoute from './SingleProductRoute'

export default () => (
  <>
    <Route path="/" component={ProductsRoute} />
    <Route path="/:product" component={SingleProductRoute} />
  </>
)