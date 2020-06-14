import React from "react";
import { mount, shallow, render } from "enzyme";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import createStore from "redux-mock-store";

import { Products } from "../../containers";
import { Product } from "../../components";

Enzyme.configure({ adapter: new Adapter() });

const product = {
  actual_price: "R$ 199,90",
  code_color: "20002605_613",
  color: "TAPEÇARIA",
  color_slug: "tapecaria",
  discount_percentage: "",
  image:
    "https://viniciusvinna.netlify.app/assets/api-fashionista/20002605_615_catalog_1.jpg",
  installments: "3x R$ 66,63",
  name: "VESTIDO TRANSPASSE BOW",
  on_sale: false,
  regular_price: "R$ 199,90",
  sizes: [
    { available: false, size: "PP", sku: "5807_343_0_PP" },
    { available: true, size: "P", sku: "5807_343_0_P" },
    { available: true, size: "M", sku: "5807_343_0_M" },
    { available: true, size: "G", sku: "5807_343_0_G" },
    { available: false, size: "GG", sku: "5807_343_0_GG" },
  ],
};

describe("Products Test", () => {
  const mockStore = createStore();
  const INITIAL_STATE = {
    products: {
      allProducts: [],
      filteredProducts: [],
      openedFilter: false,
      errorStatus: false,
      errorMessage: "Error message",
    },
    cart: {
      items: [],
      open: false,
    },
  };

  const store = mockStore(INITIAL_STATE);
  const wrapper = mount(
    <Router>
      <Provider store={store}>
        <Route>
          <Products products={[product]} />
        </Route>
      </Provider>
    </Router>
  );

  it("should match the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render Products", () => {
    expect(wrapper.find(".products")).toBeTruthy();
  });

  it("should find products__noproduct", () => {
    expect(wrapper.find(".products__noproduct")).toBeTruthy();
  });

  it("should find products__quantity", () => {
    expect(wrapper.find(".products__quantity")).toBeTruthy();
    expect(wrapper.find(".products__quantity").text()).toContain("1");
  });

  it("should find product", () => {
    expect(wrapper.find(Product)).toHaveLength(1);
  });
});
