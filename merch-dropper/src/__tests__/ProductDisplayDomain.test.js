import React from "react";
import { Provider } from "react-redux";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { store } from "../store/store";

import ProductDisplayDomain from "../components/ProductDisplayDomain";

configure({ adapter: new Adapter() });

it("renders the ProductDisplayDomain component", () => {
  const component = shallow(
    <Provider store={store}>
      <ProductDisplayDomain />
    </Provider>
  );
  expect(component.length).toEqual(1);
});

describe("Domain component", () => {
  it("renders correctly", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ProductDisplayDomain />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
