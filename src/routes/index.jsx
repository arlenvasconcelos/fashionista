import React from 'react';
import {Route, Switch} from 'react-router-dom';

import ProductsRoute from './ProductsRoute/ProductsRoute'
import SingleProductRoute from './SingleProductRoute/SingleProductRoute'

const Routes = () => (
  <>
    <Switch>
      <Route path="/" exact component={ProductsRoute} />
      <Route path="/produto/:name" component={SingleProductRoute} />
    </Switch>
  </>
)

export default Routes;