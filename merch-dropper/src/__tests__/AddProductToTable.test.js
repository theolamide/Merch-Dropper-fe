import React from "react";
// import "babel-polyfill";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { Provider } from "react-redux";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { store } from "../store/store";

import AddProductToTable from "../components/Shirt/AddProductToTable";

configure({ adapter: new Adapter() });

it("renders the AddProductToTable component", () => {
  const component = shallow(
    <Provider store={store}>
      <AddProductToTable />{" "}
    </Provider>
  );
  expect(component.length).toEqual(1);
});
