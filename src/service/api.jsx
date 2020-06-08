const api = 'https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog'

const getProducts = () => fetch(api, { method: 'GET'})
  .then(response => response.json())
  .catch(err => console.log(err))

export {getProducts}