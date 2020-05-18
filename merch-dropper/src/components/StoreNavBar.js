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



// logo
import logo from "../assets/merchdropper-logo.png";

const StoreNavBar = ({ hidden, history, location, match }) => {
  const { pathname } = location;
  const { domain_name } = match.params;

  const [state, setState] = useState({ sideDrawerOpen: false });

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
      />
    );
  }

  return (
    <div
    //   style={
    //     pathname === "/stripe-setup" || pathname === "/createstore"
    //       ? { display: "none" }
    //       : { display: "block" }
    //   }
    >
      <NavbarStyles />
      <div className="MobileWrapper">
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

        <Search />

        <nav className="ButtonWrapper">
            <CartIcon />
        </nav>
        {hidden ? null : <CartDropDown />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  hidden: state.CartReducer.hidden,
});

export default withRouter(connect(mapStateToProps)(StoreNavBar));