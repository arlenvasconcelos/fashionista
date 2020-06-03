import {TYPES} from '../actions/cart';

const cartReducer = (state = {items: [], open: false}, action) => {
  switch (action.type) {
    case TYPES.UPDATE_ITEMS:
      return {
        ...state,
        items: action.payload
      }
    case TYPES.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      }
    case TYPES.CLEAR_CART:
      return {
        ...state,
        items: []
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