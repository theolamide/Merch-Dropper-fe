import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartIcon from "./Cart/CartIcon.js";
import CartDropDown from "./Cart/CartDropDown";
import Search from "./Search";
import { useAuth0 } from "./Auth/Auth";
// import "../App.css";
// import "./NavBar.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  FormGroup,
  Input,
  Button,
  Media,
  NavbarText
} from "reactstrap";

const imgStyle = {
  maxHeight: 45,
  maxWidth: 45,
  borderRadius: 10
}

const NavBar = ({ hidden, history }) => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    console.log(user);
    console.log(loading);
  }, [user]);

  const { loading } = useAuth0();

  // if(loading) {
  //   return <div>Loading...</div>
  // }

  const logoutWithRedirect = () => {
    logout({
      returnTo: window.location.origin
    });
  };

  if (!user || user == "undefined") {
    return (
      <div className="divNav">
        <Navbar color="white" light expand="md" className="navStyle">
          <img
            className="mr-5"
            src="https://uxmasters.org/images/merch_logo_50.svg"
            style={{ width: "2rem" }}
          />
          <NavbarBrand id="navTitle" href="/">
            Merch Dropper
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />

          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Search />
              </NavItem>
            </Nav>

            <Button
              color="primary"
              className="designBtn"
              onClick={() => {
                history.push("/designshirt");
              }}
            >
              Design Merch
            </Button>

            <Button
              color="primary"
              className="designBtn"
              onClick={() => {
                history.push("/products");
              }}
            >
              Buy Merch
            </Button>

            {!isAuthenticated && <Button onClick={() => loginWithRedirect({})}>Log in</Button>}

            <CartIcon />
          </Collapse>
          {hidden ? null : <CartDropDown />}
        </Navbar>
      </div>
    );
  } else {
    return (
      <div className="divNav">
        <Navbar color="white" light expand="md" className="navStyle">
          <img className="mr-5" src="https://uxmasters.org/images/merch_logo_50.svg" />
          <NavbarBrand id="navTitle" href="/">
            Merch Dropper
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Search />
              </NavItem>
            </Nav>
            <Button
              color="primary"
              className="designBtn"
              onClick={() => {
                history.push("/designshirt");
              }}
            >
              Design Merch
            </Button>
            <Button
              color="primary"
              className="designBtn"
              onClick={() => {
                history.push("/products");
              }}
            >
              Buy Merch
            </Button>
            {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
            <CartIcon />
            <Media>
              <Media object src={user.picture} style={imgStyle} alt="Generic placeholder image" />
            </Media>
            <NavbarText>{user.name}</NavbarText>
          </Collapse>
          {hidden ? null : <CartDropDown />}
        </Navbar>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  hidden: state.CartReducer.hidden
});

export default withRouter(connect(mapStateToProps)(NavBar));
