import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

// components
import SideDrawer from "./SideDrawer";
import CartIcon from "./Cart/CartIcon.js";
import CartDropDown from "./Cart/CartDropDown";
import Search from "./Search";

// styles
import { Media, NavbarText } from "reactstrap";
import { NavbarStyles } from "./Component-Styles/Navbar-styles.js";

// auth0 client
import { useAuth0 } from "./Auth/Auth";

// logo
import logo from "../assets/merchdropper-logo.png";

const NavBar = ({ hidden, history, location }) => {
  const { loginWithRedirect, logout } = useAuth0();
  const { pathname } = location;

  const [state, setState] = useState({ sideDrawerOpen: false });

  const logoutWithRedirect = () => {
    logout({
      returnTo: window.location.origin,
    });
    localStorage.removeItem("profile");
  };

  const customLogin = () => {
    loginWithRedirect({
      redirect_uri: "http://localhost:3000/redirect",
      // redirect_uri: "https://merchdropper.store/redirect",
    });
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

  return (
    <div
      style={
        pathname === "/stripe-setup" || pathname === "/createstore"
          ? { display: "none" }
          : { display: "block" }
      }
    >
      <NavbarStyles />
      <div className="MobileWrapper">
        {sideDrawer}
        <div className="BrandWrapper">
          <img
            className="BrandLogo"
            src="https://uxmasters.org/images/merch_logo_50.svg"
            onClick={() => {
              history.push("/");
            }}
          />

          <div
            className="Brandtitle"
            onClick={() => {
              history.push("/");
            }}
          >
            Merch Dropper
          </div>
        </div>

        <div className="CartAndHamWrapper">
          <CartIcon />

          <button className="Hamburger" onClick={drawerToggleClickHandler}>
            <div className="HamburgerLines"></div>
            <div className="HamburgerLines"></div>
            <div className="HamburgerLines"></div>
          </button>
        </div>

        {hidden ? null : <CartDropDown />}
      </div>

      <div className="DesktopWrapper">
        <div
          className="BrandWrapper"
          onClick={() => {
            history.push("/");
          }}
        >
          <img className="BrandLogo" src={logo} />
          <h2 className="BrandTitle">Merch Dropper</h2>
        </div>

        <nav className="ButtonWrapper">
          {pathname === "/" ? (
            <>
              {localStorage.getItem("profile") ? (
                <span className="links" onClick={logoutWithRedirect}>
                  Sign out
                </span>
              ) : (
                <span className="links" onClick={customLogin}>
                  Sign In
                </span>
              )}

              <span className="links cta">Sign up</span>
            </>
          ) : (
            <>
              <Link to="#" className="links">
                View Store
              </Link>
              <Link to="/dashboard" className="links">
                Dashboard
              </Link>
            </>
          )}
        </nav>
        {hidden ? null : <CartDropDown />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.CartReducer.hidden,
});

export default withRouter(connect(mapStateToProps)(NavBar));
