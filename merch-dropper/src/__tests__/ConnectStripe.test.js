import React from "react";
import { configure, mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import StripeConnect from "../components/Onboarding/StripeConnect";
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() });

const wrapper = shallow(<StripeConnect />);

describe("Stripe setup functionality", () => {
  it("expect to render Stripe connect component", () => {
    expect(wrapper.length).toEqual(1);
  });
});
