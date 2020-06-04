import {TYPES} from '../actions/products';

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.SET_PRODUCTS:
      return [
        ...state,
        ...action.payload,
      ]
    default:
      return state;
  }
}

export default productsReducer