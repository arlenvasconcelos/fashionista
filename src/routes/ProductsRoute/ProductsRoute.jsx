import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { setAllProducts, setErrorMessage } from "../../store/actions/products";

import { Products } from "../../containers";
import { Loading, Footer, Error } from "../../components";

import { getProducts } from "../../service/api";

const ProductsRoutes = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await getProducts();
      if (data.error) {
        dispatch(setErrorMessage(data.error.message));
      } else {
        dispatch(setAllProducts(data));
      }
      setLoading(false);
    };
    loadProducts();
  }, [dispatch, setLoading]);

  console.log(products);

  return (
    <>
      {!loading ? (
        !products.errorStatus ? (
          <Products
            openedFilter={products.openedFilter}
            products={
              products.openedFilter
                ? products.filteredProducts
                : products.allProducts
            }
          />
        ) : (
          <Error />
        )
      ) : (
        <Loading />
      )}
      <Footer
        stylePosition={`${products.allProducts.length ? "relative" : "fixed"}`}
      />
    </>
  );
};

export default ProductsRoutes;
