const TYPES = {
  SET_ALL_PRODUCTS: 'SET_ALL_PRODUCTS',
  SET_FILTERED_PRODUCTS: 'SET_FILTERED_PRODUCTS',
  TOOGLE_SHOW_FILTER: 'HANDLE_SHOW_FILTER',
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
const toogleShowFilter = () => {
  return ({
    type: TYPES.TOOGLE_SHOW_FILTER,
  })
}

export {TYPES, setAllProducts, setFilteredProducts, toogleShowFilter}