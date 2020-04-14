import React from "react";
import { Provider } from "react-redux";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { store } from "../store/store";
import "jest-enzyme";
import "jest-styled-components";
import styled from "styled-components";

configure({ adapter: new Adapter() });

import CreateStore from "../components/Onboarding/CreateStore";
import {
  FormHeader,
  MainContainer,
  CreateStoreForm,
  StepperDiv,
  StoreTextDiv,
  URLPreviewDiv,
  CreateStoreButton,
  SkipCreateStoreButton,
} from "../components/Onboarding/Styled";

const wrapper = shallow(
  <Provider store={store}>
    <CreateStore />
  </Provider>
);

it("renders the CreateStore component", () => {
  expect(wrapper.length).toEqual(1);
});

it("renders the MainContainer styled component", () => {
  const component = shallow(<MainContainer />);
  expect(component).toMatchSnapshot();
});

it("renders the URLPreview", () => {
  const URLPreview = shallow(
    <Provider store={store}>
      <URLPreview />
    </Provider>
  );
  // expect(URLPreview).toMatchSnapshot();
  expect(URLPreview.length).toEqual(1);
});

it("renders the Create store button", () => {
  const storeButton = shallow(<CreateStoreButton />);
  expect(storeButton.length).toEqual(1);
});

it("renders the Skip for now button", () => {
  const skipButton = shallow(<SkipCreateStoreButton />);
  expect(skipButton.length).toEqual(1);
});
