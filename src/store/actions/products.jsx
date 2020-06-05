const TYPES = {
  SET_ALL_PRODUCTS: 'SET_ALL_PRODUCTS',
  SET_FILTERED_PRODUCTS: 'SET_FILTERED_PRODUCTS',
  OPEN_FILTER: 'OPEN_FILTER',
  CLOSE_FILTER: 'CLOSE_FILTER',
}

const setAllProducts = (data) => {
  return ({
    type: TYPES.SET_ALL_PRODUCTS,
    payload: data,
  })
}
const setFilteredProducts = (data) => {
  return ({
    type: TYPES.SET_FILTERED_PRODUCTS,
    payload: data,
  })
}
const openFilter = () => {
  return ({
    type: TYPES.OPEN_FILTER,
  })
}
const closeFilter = () => {
  return ({
    type: TYPES.CLOSE_FILTER,
  })
}

export {TYPES, setAllProducts, setFilteredProducts, openFilter, closeFilter}