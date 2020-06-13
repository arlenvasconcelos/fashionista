const TYPES = {
  SET_ALL_PRODUCTS: "SET_ALL_PRODUCTS",
  SET_FILTERED_PRODUCTS: "SET_FILTERED_PRODUCTS",
  TOOGLE_SHOW_FILTER: "TOOGLE_SHOW_FILTER",
  SET_ERROR: "SET_ERROR",
};

const setAllProducts = (data) => {
  return {
    type: TYPES.SET_ALL_PRODUCTS,
    payload: data,
  };
};
const setFilteredProducts = (data) => {
  return {
    type: TYPES.SET_FILTERED_PRODUCTS,
    payload: data,
  };
};
const setErrorMessage = (data) => {
  return {
    type: TYPES.SET_ERROR,
    payload: data,
  };
};
const toogleShowFilter = () => {
  return {
    type: TYPES.TOOGLE_SHOW_FILTER,
  };
};

export {
  TYPES,
  setAllProducts,
  setFilteredProducts,
  toogleShowFilter,
  setErrorMessage,
};
