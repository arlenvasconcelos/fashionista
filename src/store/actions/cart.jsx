import {getProducts as getProductsAPI} from '../../service/api'

const TYPES = {
  CLEAR_CART: 'CLEAR_CART',
  UPDATE_CART: 'UPDATE_CART',
}


const updateCart = (payload) => {
  return ({
    type: TYPES.UPDATE_CART,
    payload,
  })
}
const clearCart = () => {
  return ({
    type: TYPES.CLEAR_CART,
  })
}

export { TYPES, updateCart, clearCart }