import React from "react";
import { Provider } from "react-redux";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { store } from "../store/store";

configure({ adapter: new Adapter() });

import CreateStore from "../components/Auth/CreateStore";

const wrapper = shallow(
  <Provider store={store}>
    <CreateStore />
  </Provider>
);

it("renders the CreateStore component", () => {
  expect(wrapper.length).toEqual(1);
});

it("renders a div", () => {
  expect(wrapper.find("Container").length).toEqual(1);
});
