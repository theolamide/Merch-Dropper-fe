import React from "react";
import { Provider } from "react-redux";
import { configure, mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { store } from "../store/store";
import "jest-enzyme";

configure({ adapter: new Adapter() });

import Inventory from "../components/Dashboard/Inventory";
import InventoryList from "../components/Dashboard/InventoryList";

const wrapper = render(
  <Provider store={store}>
    <Inventory />
  </Provider>
);

it("renders the Inventory component", () => {
  expect(wrapper.length).toEqual(1);
});

it("renders the Inventory List component", () => {
  const listWrapper = shallow(<InventoryList />);
  expect(listWrapper.length).toEqual(1);
});

it("simulates the Add new item button being clicked", () => {
  const addButton = jest.fn();
  const buttonWrapper = shallow(
    <button onClick={addButton}>Add new item</button>
  );
  const button = buttonWrapper.find("button");
  button.simulate("click");
  expect(addButton).toHaveBeenCalledTimes(1);
});
