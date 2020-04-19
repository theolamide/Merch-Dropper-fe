import React from "react";
import Enzyme, { mount } from "enzyme";
// component to test
import NavBar from "../components/NavBar.js";
// import the auth0 hook
import { useAuth0 } from "../components/Auth/Auth";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../store/store";
import { Provider } from "react-redux";
Enzyme.configure({ adapter: new Adapter() });
// create a dummy user profile
const user = {
  email: "test@email.com",
  sub: "auth0|100000",
  picture: null,
};
// intercept the useAuth0 function and mock it
jest.mock("../components/Auth/Auth");
describe("components/NavBar - logged in", () => {
  beforeEach(() => {
    // Mock the Auth0 hook and make it return a logged in state
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    });
    localStorage.setItem("profile", JSON.stringify(user));
  });

  it("localStorage has profile", () => {
    expect(localStorage.getItem("profile")).toBeTruthy();
  });

  it("Renders with required props", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    );
    expect(wrapper).toBeTruthy();
  });
  it("Renders the sign out button", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <NavBar />
        </Router>
      </Provider>
    );

    expect(wrapper.find("span.links")).toHaveLength(1);
    expect(wrapper.containsMatchingElement(<span>Sign out</span>)).toBeTruthy();
  });
});
