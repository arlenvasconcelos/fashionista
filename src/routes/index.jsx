import React from 'react';
import {Route, Switch} from 'react-router-dom';

import ProductsRoute from './ProductsRoute'
import SingleProductRoute from './SingleProductRoute'

const Routes = () => (
  <>
    <Switch>
      <Route path="/" component={ProductsRoute} />
      <Route path="/produto/:name" component={SingleProductRoute} />
    </Switch>
  </>
)

export default Routes;