import React from "react";
import renderer from "react-test-renderer";
import App from "../containers/App/App";

import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe("Testing NoProduct", () => {
  const initialState = {
    products: {
      allProducts: [],
      filteredProducts: [],
      openedFilter: false,
    },
    cart: {
      items: [],
      open: false,
    },
  };
  const mockStore = configureStore();
  const store = mockStore(initialState);

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
