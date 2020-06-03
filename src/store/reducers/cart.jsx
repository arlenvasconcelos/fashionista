import {TYPES} from '../actions/cart';

const cartReducer = (state = {items: [], open: false}, action) => {
  switch (action.type) {
    case TYPES.UPDATE_ITEMS:
      return {
        ...state,
        cart: action.payload
      }
    case TYPES.CLEAR_CART:
      return {
        ...state,
        cart: [],
      }
    case TYPES.OPEN_CART:
      return {
        ...state,
        open: true,
      }
    case TYPES.CLOSE_CART:
      return {
        ...state,
        open: false,
      }
      
    default:
      return state
  }
}

export default cartReducer;