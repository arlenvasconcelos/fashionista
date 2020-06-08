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
    case TYPES.TOOGLE_SHOW_FILTER:
      if (state.openedFilter === false){
        return {
          ...state,
          filteredProducts: state.allProducts,
          openedFilter: true,
        }
      }
      return {
        ...state,
        openedFilter: false,
      }
    default:
      return state;
  }
}

export default productsReducer