import React from "react";
import { Provider } from "react-redux";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { store } from "../store/store";
import "jest-enzyme";
import "jest-styled-components";
import { BrowserRouter as Router } from "react-router-dom";
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

it("renders the Create Store form", () => {
  const createForm = shallow(<CreateStoreForm />);
  expect(createForm.length).toEqual(1);
});

it("renders the Create Store button", () => {
  const storeButton = shallow(<CreateStoreButton />);
  expect(storeButton.length).toEqual(1);
});

it("renders the Skip for now button", () => {
  const skipButton = shallow(<SkipCreateStoreButton />);
  expect(skipButton.length).toEqual(1);
});

// it("button click should call callSignUp", () => {
//   const clickFn = jest.fn();
//   const form = mount(<CreateStoreForm onSubmit={clickFn} />);
//   // form.find('[type="submit"]').simulate("click");
//   // expect(clickFn).toHaveBeenCalled();

//   // expect(form.find("button[type='submit']").text()).toEqual("Create store");

//   expect(form.length).toEqual(1);

//   // expect(form.find('[type="submit"]').text().toEqual(["Create store"]));
//   // expect(form.find('[type="submit"]').getElements()).toEqual(["Create store"])
//   // const submitButton = shallow(<CreateStoreButton />)
// });

// it("button click should call callSignUp", () => {
//   const clickFn = jest.fn();
//   const form = mount(<CreateStoreForm onSubmit={clickFn} />);
//   form.find('[type="submit"]').simulate("click");
//   expect(clickFn).toHaveBeenCalled();
// });

// it("test", () => {
//   const callSignupMock = jest.fn();
//   const wrapper = mount(
//     <Provider store={store}>
//       <Router>
//         <CreateStore callSignupMock={callSignupMock} />
//       </Router>
//     </Provider>
//   );

//   expect(wrapper.find("button[type='submit']").text()).toEqual("Create store");

//   wrapper.find("button[type='submit']").simulate("click");
//   expect(callSignupMock).toHaveBeenCalled();
// });
