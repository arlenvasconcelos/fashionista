import {TYPES} from '../actions/cart';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case TYPES.UPDATE_CART:
      return {
        ...state,
        cart: action.payload
      }
    case TYPES.CLEAR_CART:
      return {
        ...state,
        cart: [],
      }
      
    default:
      return state
  }
}

export default cartReducer;