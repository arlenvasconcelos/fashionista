import {getProducts as getProductsAPI} from '../../service/api'

const TYPES = {
  CLEAR_CART: 'CLEAR_CART',
  OPEN_CART: 'OPEN_CART',
  CLOSE_CART: 'CLOSE_CART',
  UPDATE_ITEMS: 'UPDATE_ITEMS',
  ADD_ITEM: 'ADD_ITEM',
}


const updateItems = (data) => {
  return ({
    type: TYPES.UPDATE_ITEMS,
    payload: data,
  })
}

const addItem = (data) => {
  return ({
    type: TYPES.ADD_ITEM,
    payload: data,
  })
}

const clearCart = () => {
  return ({
    type: TYPES.CLEAR_CART,
  })
}

const openCart = () => {
  return ({
    type: TYPES.OPEN_CART,
  })
}
const closeCart = () => {
  return ({
    type: TYPES.CLOSE_CART,
  })
}

export { TYPES, updateItems, addItem, clearCart, openCart, closeCart }