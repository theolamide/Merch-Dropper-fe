import React from "react";
import { Provider } from "react-redux";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { store } from "../store/store";
import "jest-enzyme";
import "jest-styled-components";

configure({ adapter: new Adapter() });

import Inventory from "../components/Dashboard/Inventory";

const wrapper = shallow(
  <Provider store={store}>
    <Inventory />
  </Provider>
);
