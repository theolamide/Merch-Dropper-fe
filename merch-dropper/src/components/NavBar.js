import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
// components
import SideDrawer from "./SideDrawer";
import CartIcon from "./Cart/CartIcon.js";
import CartDropDown from "./Cart/CartDropDown";
// styles
import { NavbarStyles } from "./Component-Styles/Navbar-styles.js";
// auth0 client
import { useAuth0 } from "./Auth/Auth";
// logo
import logo from "../assets/merchdropper-logo.png";

const NavBar = ({ hidden, history, location }) => {
  const { loginWithRedirect, logout } = useAuth0();
  const { pathname } = location;
  const domain_name = localStorage.getItem("domain_name");

  const store_name = localStorage.getItem("store_name");

  const [state, setState] = useState({ sideDrawerOpen: false });
  const [inDevelop, setInDevelop] = useState(false);

  const logoutWithRedirect = () => {
    localStorage.removeItem("profile");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("store_name");
    localStorage.removeItem("storeID");
    logout({
      returnTo: window.location.origin,
    });
  };

  useEffect(() => {
    if (process.env.REACT_APP_BASE_URL === "development") {
      setInDevelop(true);
    }
  }, []);

  let url = "";

  if (process.env.REACT_APP_BASE_URL === "development") {
    url = "http://localhost:3000/redirect";
  } else {
    url = "https://merchdropper.store/redirect";
  }

  const customLogin = () => {
    loginWithRedirect({
      redirect_uri: url,
    });
  };

  const customSignup = () => {
    loginWithRedirect({
      redirect_uri: url,
      signup: true,
    });
  };

  const homepageRedirect = () => {
    history.push("/");
  };

  let drawerToggleClickHandler = () => {
    setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  let closeBackDropClickHandler = () => {
    setState({ sideDrawerOpen: false });
  };

  let sideDrawer;
  const imgStyle = {
    maxHeight: 45,
    maxWidth: 45,
    borderRadius: 10,
  };

  if (state.sideDrawerOpen) {
    sideDrawer = (
      <SideDrawer
        closeDrawer={closeBackDropClickHandler}
        imgStyle={imgStyle}
        logoutWithRedirect={logoutWithRedirect}
        customLogin={customLogin}
      />
    );
  }

  const Nav = () => {
    if (!!localStorage.getItem("profile")) {
      return (
        <nav className="ButtonWrapper">
          {store_name ? (
            <Link to={`/${store_name}`} className="links">
              Your Store
            </Link>
          ) : null}

          <Link
            to="/dashboard"
            className="links"
            style={
              pathname === "/dashboard"
                ? { fontWeight: 700 }
                : { fontWeight: 500 }
            }
          >
            Dashboard
          </Link>
          <span
            className="links"
            onClick={logoutWithRedirect}
            style={{ marginLeft: "32px" }}
          >
            Logout
          </span>
        </nav>
<<<<<<< HEAD
      );
    } else if (domain_name === pathname.substr(1).split("/")[0]) {
      return (
        <nav className="ButtonWrapper">
          <Link to={`/${domain_name}`} className="links">
            {domain_name}
          </Link>
          <CartIcon />
        </nav>
      );
    } else {
      return (
        <nav className="ButtonWrapper">
          {inDevelop ? (
            <>
              <Link className="links login" to="/develop">
                Dev Auth
              </Link>
              <button
                className="links cta"
                onClick={() => {
                  setInDevelop(false);
                }}
              >
                Prod Nav
              </button>
            </>
          ) : (
            <>
              <span className="links login" onClick={customLogin}>
                Sign in
              </span>
              <button className="links cta" onClick={customSignup}>
                Get Started
              </button>
            </>
          )}
        </nav>
      );
    }
=======
             );
           } else {
             return (
               <nav className="ButtonWrapper">
                 {inDevelop ? 
                 <>
                  
                 <Link className="links" to='/develop'>Dev Auth</Link>
                 <button className="links cta" onClick={()=>{setInDevelop(false)}}>Prod Nav</button>
                 </>
                 : 
                 <>
                 <span className="links" onClick={customLogin}>
                   Login
                 </span>
                 <button className="links cta" onClick={customSignup}>
                   Sign Up
                 </button>
                 </>
                 }
               </nav>
             );
           }
>>>>>>> 7d88c44c459b1d8d5a864f5621844a651c04ddfc
  };

  return (
    <div
      style={
        pathname === "/stripe-setup" || pathname === "/createstore"
          ? { display: "none" }
          : { display: "block" }
      }
    >
      <NavbarStyles />
      <div className="MobileWrapper" data-cy="mobileWrapper">
        {sideDrawer}
        <div className="BrandWrapper" onClick={homepageRedirect}>
          <img
            className="BrandLogo"
            src={logo}
            alt="merch-dropper logo"
            onClick={homepageRedirect}
          />

          <h2 className="BrandTitle">Merch Dropper</h2>
        </div>
        <div className="CartAndHamWrapper">
          <CartIcon />

          <button className="Hamburger" onClick={drawerToggleClickHandler}>
            <div className="HamburgerLines"></div>
            <div className="HamburgerLines"></div>
            <div className="HamburgerLines"></div>
            CLICK ME
          </button>
        </div>
        {hidden ? null : <CartDropDown />}
      </div>

      <div className="DesktopWrapper">
        <div className="BrandWrapper" onClick={homepageRedirect}>
          <img className="BrandLogo" src={logo} alt="merch-dropper logo" />
          <h2 className="BrandTitle">Merch Dropper</h2>
        </div>

        <Nav />
        {hidden ? null : <CartDropDown />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.CartReducer.hidden,
});

export default withRouter(connect(mapStateToProps)(NavBar));
