import { createStore } from 'redux';
import { combineReducers } from 'redux';
import products from './reducers/products';
import cart from './reducers/cart';

const rootReducer = combineReducers({
  products,
  cart,
});

const store = createStore(rootReducer);

export default store;
