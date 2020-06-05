import {TYPES} from '../actions/cart';

const defaultState = {
  items: [],
  open: false
}

const cartReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.UPDATE_ITEMS:
      return {
        ...state,
        items: action.payload
      }
    case TYPES.ADD_ITEM:
      if (state.items.find(item => item.style === action.payload.style 
        && item.selected_size === action.payload.selected_size)
      ){
        const items = state.items.map(item => {
          if (item.style === action.payload.style && item.selected_size === action.payload.selected_size){
            return ({
              ...item, 
              quantity: item.quantity + 1,
            });
          }
          else {
            return item;
          }
        })
        return {
          ...state,
          items
        }
      }
      return {
        ...state,
          items: [...state.items, {...action.payload, quantity: 1}]
      }
    case TYPES.DECREASE_ITEM:
      const items = state.items.map(item => {
        if (item.style === action.payload.style && item.selected_size === action.payload.selected_size){
          return ({
            ...item, 
            quantity: item.quantity - 1,
          });
        }
        else {
          return item;
        }
      })
      return {
        ...state,
        items
      }
    case TYPES.REMOVE_ITEM:
      const filteredItems = state.items.filter(item => !(item.style === action.payload.style 
        && item.selected_size === action.payload.selected_size))
      return {
        ...state,
        items: filteredItems
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