import {TYPES} from '../actions/products';

const defaultState = {
  allProducts: [], 
  filteredProducts: [], 
  openedFilter: false
}

const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case TYPES.SET_ALL_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
      }
    case TYPES.SET_FILTERED_PRODUCTS:
      return {
        ...state,
        filteredProducts: action.payload,
      }
    case TYPES.OPEN_FILTER:
      return {
        ...state,
        openedFilter: true,
      }
    case TYPES.CLOSE_FILTER:
      return {
        ...state,
        openedFilter: false,
      }
    default:
      return state;
  }
}

export default productsReducer