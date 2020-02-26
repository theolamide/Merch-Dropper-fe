import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CartIcon from './Cart/CartIcon.js';
import CartDropDown from './Cart/CartDropDown';
import { useAuth0 } from "./Auth/Auth";
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



const NavBar = ({ hidden, history }) => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    console.log(user);
  }, []);


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

            {!isAuthenticated && (
                <button onClick={() => loginWithRedirect({})}>Log in</button>
            )}

            <Button color="primary" className="designBtn"
              color="primary" className="designBtn"
              onClick={() => {
                history.push('/designshirt');
              }}
            >
              Design Merch
            </Button>

            <Button color="primary" className="designBtn"
              onClick={() => {
                history.push('/products');
              }}
            >
              Buy Merch
            </Button>

            <CartIcon />

          </Collapse>
          {hidden ? null :
            <CartDropDown />
          }
        </Navbar>
      </div>
    );

  } else {
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
            <img src={user.picture} />
            <h4>{user.name}</h4>
            {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hidden: state.CartReducer.hidden
})

export default withRouter(connect(mapStateToProps)(NavBar));