import {TYPES} from '../actions/cart';

const cartReducer = (state = {items: [], open: false}, action) => {
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
        console.log('entreou aqui')
        const items = state.items.map(item => {
          console.log(item, action.payload)
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