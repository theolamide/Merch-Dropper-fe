import React from "react";
import { withRouter } from "react-router-dom";
import {useStyles} from "./Component-Styles/Footer"
import { Navbar, Nav, NavLink } from "reactstrap";

const Footer = ({ location }) => {
  const classes = useStyles();
  const { pathname } = location;
  return (
    <div
      className={classes.footer}
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
