import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MemoryRouter, Link } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store.js";
import { useAuth0 } from "../components/Auth/Auth.js";
import NavBar from "../components/NavBar.js";

configure({ adapter: new Adapter() });

jest.mock("../components/Auth/Auth");

describe("Navbar displays logo and brand name", () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      loginWithRedirect: jest.fn(),
      logout: jest.fn(),
    });
  });

  it("renders with logo", () => {
    const wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <NavBar />
        </MemoryRouter>
      </Provider>
    );

    const logo = wrapper.find(".BrandLogo");
    const name = wrapper.find(".DesktopWrapper .BrandTitle");

    console.log(name.debug());

    expect(logo).toBeTruthy();
    expect(name).toBeTruthy();
    expect(name.text()).toEqual("Merch Dropper");
  });
});

describe("Navbar in '/' route", () => {
  let wrapper;
  let customLogin;

  beforeEach(() => {
    useAuth0.mockReturnValue({
      loginWithRedirect: jest.fn(),
      logout: jest.fn(),
    });

    customLogin = jest.fn();

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <NavBar customLogin={customLogin} />
        </MemoryRouter>
      </Provider>
    );
  });

  it("renders in homepage", () => {
    expect(wrapper).toBeTruthy();
  });

  it("display 'Sign in' and 'Get Started' links", () => {
    const links = wrapper.find("span.links");
    const signup = wrapper.find("button.cta");
    const signin = wrapper.find("nav").childAt(0);

    expect(links).toHaveLength(1);
    expect(signup.text()).toEqual("Get Started");
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

  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
    });

    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <NavBar />
        </MemoryRouter>
      </Provider>
    );

    localStorage.setItem("profile", JSON.stringify("user"));
  });

  it("renders in homepage", () => {
    expect(wrapper).toBeTruthy();
  });

  it("display 'Logout', 'View Store', 'Dashboard' links", () => {
    const signout = wrapper.find("span.links");
    const links = wrapper.find("a.links");

    expect(links).toHaveLength(2);
    expect(links.at(0).text()).toEqual("View Store");
    expect(links.at(1).text()).toEqual("Dashboard");
    expect(signout.text()).toEqual("Logout");
  });

  it("signout btn calls logout() when clicked", () => {
    const signout = wrapper.find("span.links");
    const { logout } = useAuth0();
    signout.simulate("click");

    expect(logout).toHaveBeenCalledTimes(1);
  });
});

describe("Navbar in '/stripe-setup' and '/createstore' routes", () => {
  const user = {
    email: "test@email.com",
    sub: "auth0|100000",
    picture: null,
  };

  let wrapper;

  beforeEach(() => {
    useAuth0.mockReturnValue({
      user,
      isAuthenticated: true,
      loginWithRedirect: jest.fn(),
      logout: jest.fn(),
    });
  });

  it("does not display in /stripe-setup route", () => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/stripe-setup"]}>
          <NavBar />
        </MemoryRouter>
      </Provider>
    );

    const div = wrapper.find("div").get(0);

    expect(div.props.style).toHaveProperty("display", "none");
  });

  it("does not display in /createstore route", () => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/createstore"]}>
          <NavBar />
        </MemoryRouter>
      </Provider>
    );
    const div = wrapper.find("div").get(0);

    expect(div.props.style).toHaveProperty("display", "none");
  });
});

describe("Navbar in other routes", () => {
  let wrapper;

  beforeEach(() => {
    useAuth0.mockReturnValue({
      loginWithRedirect: jest.fn(),
      logout: jest.fn(),
    });
  });

  it("renders on /dashboard route", () => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/dashboard"]}>
          <NavBar />
        </MemoryRouter>
      </Provider>
    );

    expect(wrapper).toBeTruthy();
    expect(wrapper.find("div").get(0).props.style).toHaveProperty(
      "display",
      "block"
    );
  });

  it("display 'View Store' and 'Dashboard' links", () => {
    wrapper = mount(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/dashboard"]}>
          <NavBar />
        </MemoryRouter>
      </Provider>
    );

    const links = wrapper.find("a.links");
    expect(links).toHaveLength(2);
  });
});
