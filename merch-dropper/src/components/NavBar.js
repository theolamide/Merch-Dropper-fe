import React, { useState, useEffect } from 'react';
import auth0Client from "./Auth";
import { connect } from 'react-redux';


import CartIcon from './CartIcon.js';
import CartDropDown from './CartDropDown';


import '../App.css';
import "./NavBar.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  FormGroup,
  Input,
  Button
} from 'reactstrap';




const NavBar = ({ hidden }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [token, setToken] = useState(localStorage.getItem("Id_token"))

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    console.log(auth0Client.getProfile());
    setToken(localStorage.getItem("Id_token"));
  }, [localStorage.getItem("Id_token")]);

  async function profileSignIn() {
    auth0Client.signIn();
    await auth0Client.getProfile();
  }


  const signOut = () => {
    auth0Client.signOut();
    this.props.history.replace("/");
  };




  if (!localStorage.getItem("Id_token") || localStorage.getItem("Id_token") == "undefined") {
    return (
      <div className="divNav">
        <Navbar color="white" light expand="md" className="navStyle">
          <img
            className="mr-5"
            src="https://uxmasters.org/images/merch_logo_50.svg"
            style={{ width: '2rem' }}
          />
          <NavbarBrand id="navTitle" href="/">
            Merch Dropper
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />

          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <FormGroup className="searchStyle pt-3">
                  <Input
                    className="rounded-pill"
                    type="search"
                    name="search"
                    id="exampleSearch"
                    placeholder="Search... "
                  />
                </FormGroup>
              </NavItem>
            </Nav>

            {!token ||
              token == "undefined" ?
              <Button className="ml-5 mr-5" onClick={profileSignIn}>
                Sign In
              </Button> : null
            }

            <Button color="primary" href="/" className="designBtn">
              Design Merch
            </Button>

            <CartIcon />

            {/* <Button className="ml-5" outline color="primary" href="/cart">
              ShoppingCart
            </Button> */}
          </Collapse>
          {hidden ? null : <CartDropDown />}
        </Navbar>
      </div>
    );
  }
  else {
    return (
      <div class="divNav">
        <Navbar color="white" light expand="md" className="navStyle">
          <img
            className="mr-5"
            src="https://uxmasters.org/images/merch_logo_50.svg"
          />
          <NavbarBrand id="navTitle" href="/">
            Merch Dropper
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <FormGroup className="searchStyle pt-3">
                  <Input
                    className="rounded-pill"
                    type="search"
                    name="search"
                    id="exampleSearch"
                    placeholder="Search... "
                  />
                </FormGroup>
              </NavItem>
            </Nav>
            <Button color="primary" href="/" className="designBtn">
              Design Merch
            </Button>
            <Button className="ml-5" outline color="primary" href="/">
              Buy Merch
            </Button>
            <img src={auth0Client.getProfile().picture} className="img-rounded img-fluid avatar" />
            <p><b>Hello {auth0Client.getProfile().name}</b></p>
            <Button className="ml-5" onClick={signOut}>
              Sign Out
            </Button>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = ({ CartReducer: { hidden } }) => ({
  hidden
})

export default connect(mapStateToProps)(NavBar);