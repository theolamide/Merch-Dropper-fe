import React from "react";
import { withRouter } from "react-router-dom";
import "../App.css";
import { Navbar, Nav, NavLink } from "reactstrap";

const Footer = ({ location }) => {
  const { pathname } = location;
  return (
    <div
      className="mt-5 footer"
      style={
        pathname === "/stripe-setup" || pathname === "/createstore"
          ? { display: "none" }
          : { display: "block" }
      }
    >
      <Navbar color="white" light expand="md" className="navStyle">
        <p className="pt-3 pl-5 ml-auto">© Merch Dropper 2020</p>
        <Nav className="ml-auto">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/">Store</NavLink>
        </Nav>
      </Navbar>
    </div>
  );
};

export default withRouter(Footer);
