const TYPES = {
  SET_PRODUCTS: 'SET_PRODUCTS'
}

const setProducts = (data) => {
  return ({
    type: TYPES.SET_PRODUCTS,
    payload: data,
  })
}

export {TYPES, setProducts}