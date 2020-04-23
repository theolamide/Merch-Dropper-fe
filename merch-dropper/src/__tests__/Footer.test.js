import React from "react";
import { configure, mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { store } from "../store/store.js";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import Footer from "../components/Footer";

it("expect to render Footer component", () => {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <Footer />
      </MemoryRouter>
    </Provider>
  );

  const div = wrapper.find("div").get(0);
  const ul = wrapper.find("ul a");

  expect(wrapper).toBeTruthy();
  expect(div.props.style).toHaveProperty("display", "block");
  expect(ul).toHaveLength(2);
  expect(ul.containsMatchingElement(<a>Home</a>)).toBeTruthy();
  expect(ul.containsMatchingElement(<a>Store</a>)).toBeTruthy();
});

it("has display:none style on '/stripe-setup' route", () => {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/stripe-setup"]}>
        <Footer />
      </MemoryRouter>
    </Provider>
  );

  const div = wrapper.find("div").get(0);

  expect(div.props.style).toHaveProperty("display", "none");
});

it("has display:none style on '/createstore' route", () => {
  const wrapper = mount(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/createstore"]}>
        <Footer />
      </MemoryRouter>
    </Provider>
  );

  const div = wrapper.find("div").get(0);
  expect(div.props.style).toHaveProperty("display", "none");
});
