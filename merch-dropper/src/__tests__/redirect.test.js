import React from "react";
import Enzyme, { mount } from "enzyme";
import Redirect from "../components/Redirect";
import Adapter from "enzyme-adapter-react-16";
import { useAuth0 } from "../components/Auth/Auth";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../store/store";

Enzyme.configure({ adapter: new Adapter() });

const user = {
  "https://merch-dropper.com/signup": true,
  email: "test@email.com",
  sub: "auth0|100000",
  picture: null,
};

jest.mock("../components/Auth/Auth");

describe("Component renders", () => {
  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    });
  });

  it("renders loading message", () => {
    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Redirect />
        </Router>
      </Provider>
    );

    expect(
      wrapper.containsMatchingElement(<h2>Loading before Redirect</h2>)
    ).toBeTruthy();
  });
});

describe("component redirects to /stripe-setup when signing up via auth0", () => {
  let history;

  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    });

    history = { push: jest.fn() };

    jest.useFakeTimers();

    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Redirect history={history} />
        </Router>
      </Provider>
    );

    jest.advanceTimersByTime(500);
  });

  it("calls history.push", () => {
    expect(history.push).toHaveBeenCalledTimes(1);
  });

  it("redirects to /stripe-setup", () => {
    expect(history.push).toHaveBeenCalledWith("/stripe-setup");
  });
});

describe("component redirects to /stripe-setup when signing up via google/facebook", () => {
  let history;

  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user: {
        ...user,
        "https://merch-dropper.com/idp/signup": true,
      },
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    });

    history = { push: jest.fn() };

    jest.useFakeTimers();

    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Redirect history={history} />
        </Router>
      </Provider>
    );

    jest.advanceTimersByTime(500);
  });

  it("calls history.push", () => {
    expect(history.push).toHaveBeenCalledTimes(1);
  });

  it("redirects to /stripe-setup", () => {
    expect(history.push).toHaveBeenCalledWith("/stripe-setup");
  });
});

describe("component redirects to /dashboard when logging in", () => {
  let history;

  beforeEach(() => {
    useAuth0.mockReturnValue({
      isAuthenticated: true,
      user: {
        ...user,
        "https://merch-dropper.com/signup": false,
      },
      logout: jest.fn(),
      loginWithRedirect: jest.fn(),
    });

    history = { push: jest.fn() };

    jest.useFakeTimers();

    const wrapper = mount(
      <Provider store={store}>
        <Router>
          <Redirect history={history} />
        </Router>
      </Provider>
    );

    jest.advanceTimersByTime(500);
  });

  it("calls history.push", () => {
    expect(history.push).toHaveBeenCalledTimes(1);
  });

  it("redirects to /stripe-setup", () => {
    expect(history.push).toHaveBeenCalledWith("/dashboard");
  });
});
