const api = "https://5e9935925eabe7001681c856.mockapi.io/api/v1/catalog";

const getProducts = () =>
  fetch(api, { method: "GET" })
    .then((response) => {
      if (response && response.ok) {
        return response.json();
      } else {
        return {
          error: {
            message: "Erro ao buscar produtos da api",
          },
        };
      }
    })
    .then((data) => data)
    .catch((err) => console.log(err));
export { getProducts };
