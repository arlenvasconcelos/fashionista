const TYPES = {
  LOAD_PRODUCTS: 'LOAD_PRODUCTS'
}

const setProducts = (data) => {
  return ({
    type: TYPES.LOAD_PRODUCTS,
    payload: data,
  })
}

export {TYPES, setProducts}