const getProducts = () => fetch('https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog', { method: 'GET'})
  .then(response => response.json())
  .catch(err => console.log(err))

export {getProducts}