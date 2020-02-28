import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartIcon from "./Cart/CartIcon.js";
import CartDropDown from "./Cart/CartDropDown";
import Search from "./Search";
import { useAuth0 } from "./Auth/Auth";

import {
  Navbar,
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
  const { user, isAuthenticated, loginWithRedirect, logout, getTokenSilently } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const { loading } = useAuth0();

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    console.log(user);
    console.log(loading);
  }, [user]);

  // useEffect(() => {
  // if( user == undefined || localStorage.getItem('profile') == "undefined")
  // {
  //   return;
  // }
  // else
  // {
  //  const profileName = JSON.parse(localStorage.profile).name;
  //  let profilePicture = JSON.parse(localStorage.profile).picture;
  //  console.log(profileName);
  //  console.log(profilePicture);
  // }
  // }, [localStorage.getItem('profile')]);

  const logoutWithRedirect = () => {
    logout({
      returnTo: window.location.origin
    });
    localStorage.removeItem('profile');
  };

  const customLogin = () => {
    loginWithRedirect({
      redirect_uri: "https://merch-dropper.com/signup"
    });
  };

  // if (localStorage .getItem("profile") == "undefined") {
  //   return (
  //     <div className="divNav">
  //       <Navbar color="white" light expand="md" className="navStyle">
  //         <img
  //           className="mr-5"
  //           src="https://uxmasters.org/images/merch_logo_50.svg"
  //           style={{ width: '2rem' }}
  //         />
  //         <NavbarBrand id="navTitle" href="/">
  //           Merch Dropper
  //         </NavbarBrand>
  //         <NavbarToggler onClick={toggle} />
  //
  //         <Collapse isOpen={isOpen} navbar>
  //           <Nav className="mr-auto" navbar>
  //             <NavItem>
  //               <FormGroup className="searchStyle pt-3">
  //                 <Input
  //                   className="rounded-pill"
  //                   type="search"
  //                   name="search"
  //                   id="exampleSearch"
  //                   placeholder="Search... "
  //                 />
  //               </FormGroup>
  //             </NavItem>
  //           </Nav>
  //
  //           {!isAuthenticated && (
  //               <button onClick={() => loginWithRedirect({})}>Log in</button>
  //           )}
  //
  //           <Button color="primary" className="designBtn"
  //             color="primary" className="designBtn"
  //             onClick={() => {
  //               history.push('/designshirt');
  //             }}
  //           >
  //             Design Merch
  //           </Button>
  //
  //           <Button color="primary" className="designBtn"
  //             onClick={() => {
  //               history.push('/products');
  //             }}
  //           >
  //             Buy Merch
  //           </Button>
  //
  //           <CartIcon />
  //
  //         </Collapse>
  //         {hidden ? null :
  //           <CartDropDown />
  //         }
  //       </Navbar>
  //     </div>
  //   );
  //
  // } else {
    return (
      <div className="divNav">
        <Navbar color="white" light expand="md" className="navStyle">
          <img className="mr-5" src="https://uxmasters.org/images/merch_logo_50.svg" />
          <NavbarBrand id="navTitle" href="/">
            Merch Dropper
          </NavbarBrand>

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
            {localStorage.getItem('profile') ? <Button onClick={() => logoutWithRedirect()}>Log out</Button> : <Button onClick={customLogin}>Log In</Button>}
            <CartIcon />
            <Media>
              {localStorage.getItem("profile") ? <div><Media object src={JSON.parse(localStorage.profile).picture} style={imgStyle} alt="Generic placeholder image" /></div> : <div></div>}
            </Media>
            {localStorage.getItem("profile") ? <div><NavbarText>{JSON.parse(localStorage.profile).name}</NavbarText></div> : <div></div>}
          </Collapse>
          {hidden ? null : <CartDropDown />}
        </Navbar>
      </div>
    );
  }

const mapStateToProps = state => ({
  hidden: state.CartReducer.hidden
});

export default withRouter(connect(mapStateToProps)(NavBar));
