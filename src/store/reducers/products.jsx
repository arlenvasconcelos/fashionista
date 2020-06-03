import {TYPES} from '../actions/products';

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.SET_PRODUCTS:
      console.log(action.payload) 
      return [
        ...state,
        ...action.payload,
      ]
    default:
      return state;
  }
}

export default productsReducer