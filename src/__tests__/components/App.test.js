import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-16";
import createStore from "redux-mock-store";

import { Products, App, Cart } from "../../containers";
import { Loading } from "../../components";

Enzyme.configure({ adapter: new Adapter() });

describe("App Test", () => {
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

  const wrapper = shallow(
    <Provider store={store}>
      <App />
    </Provider>
  );

  it("should match the snapshot", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should find Loading Component", () => {
    expect(wrapper.find(Products)).toBeTruthy();
  });

  it("should find Loading Component", () => {
    expect(wrapper.find(Loading)).toBeTruthy();
  });

  it("should find Cart Component", () => {
    expect(wrapper.find(Cart)).toBeTruthy();
  });
});
