import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store.js";
import { useAuth0 } from "../components/Auth/Auth.js";
import NavBar from "../components/NavBar.js";

configure({ adapter: new Adapter() });

jest.mock("../components/Auth/Auth");

describe("Navbar in '/' route", () => {
  let wrapper;
  let location;
  let customLogin;

  beforeEach(() => {
    useAuth0.mockReturnValue({
      loginWithRedirect: jest.fn(),
      logout: jest.fn(),
    });

    customLogin = jest.fn();

    location = {
      pathname: "/",
    };

    wrapper = mount(
      <Provider store={store}>
        <Router>
          <NavBar location={location} customLogin={customLogin} />
        </Router>
      </Provider>
    );
  });

  it("renders in homepage", () => {
    expect(wrapper).toBeTruthy();
  });

  it("display 'Sign in' and 'Sign up' links", () => {
    const links = wrapper.find("span.links");
    const signup = wrapper.find("span.cta");
    const signin = wrapper.find("nav").childAt(0);

    expect(links).toHaveLength(2);
    expect(signup.text()).toEqual("Sign up");
    expect(signin.text()).toEqual("Sign in");
  });

  it("DOES NOT display 'View Store' and 'Dashboard' links", () => {
    const links = wrapper.find("a.links");
    expect(links).toHaveLength(0);
  });

  it("signin btn calls customLogin() when clicked", () => {
    const signin = wrapper.find("nav").childAt(0);
    const { loginWithRedirect } = useAuth0();
    signin.simulate("click");

    expect(loginWithRedirect).toHaveBeenCalledTimes(1);
  });
});

describe("Navbar in '/' route - user is logged in", () => {
  const user = {
    email: "test@email.com",
    sub: "auth0|100000",
    picture: null,
  };

  let wrapper;
  let location;

  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
    });

    location = {
      pathname: "/",
    };

    wrapper = mount(
      <Provider store={store}>
        <Router>
          <NavBar location={location} />
        </Router>
      </Provider>
    );

    localStorage.setItem("profile", JSON.stringify("user"));
  });

  it("renders in homepage", () => {
    expect(wrapper).toBeTruthy();
  });

  it("displays 'Sign out' link", () => {
    const link = wrapper.find("span.links");

    expect(link).toHaveLength(1);
    expect(link.text()).toEqual("Sign out");
  });

  it("signin btn calls customLogin() when clicked", () => {
    const signout = wrapper.find(".links");
    const { logout } = useAuth0();
    signout.simulate("click");

    expect(logout).toHaveBeenCalledTimes(1);
  });
});
