import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CartIcon from "./Cart/CartIcon.js";
import CartDropDown from "./Cart/CartDropDown";
import Search from "./Search";
import { useAuth0 } from "./Auth/Auth";
import {
  Media,
  NavbarText
} from "reactstrap";

const imgStyle = {
  maxHeight: 45,
  maxWidth: 45,
  borderRadius: 10
};

const RootWrapper = styled.div`
  box-shadow: 0 3px 0 0 rgba(236, 236, 236, 0.2), 0 3px 8px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  background: white;
  width: 100%;
  // border: 1px solid black;

      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
      }
`
const BrandWrapper = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  // border: 1px solid black;
`
const BrandLogo = styled.img`
  cursor: pointer;
  width: 3rem;
`
const BrandTitle = styled.div`
  color: #007bff;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
`
const ButtonWrapper = styled.div`
  width: 33%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  // border: 1px solid black;
`
const Button = styled.button`
  text-align: center;
  color: white;
  background: #037BFF;
  border: 1px solid #037BFF;
  border-radius: 0.25rem;
  width: 7rem;
  height: 2.25rem;
  &:hover {
            background: #0369D9;
            border: 1px solid #0369D9;
        }
`

const NavBar = ({ hidden, history }) => {
  const { user, loginWithRedirect, logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const { loading } = useAuth0();

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    console.log(user);
    console.log(loading);
  }, [user]);

  const logoutWithRedirect = () => {
    logout({
      returnTo: window.location.origin
    });
    localStorage.removeItem("profile");
  };

  const customLogin = () => {
    loginWithRedirect({
      redirect_uri: "https://merch-dropper.com/signup"
    });
  };

  return (
    <RootWrapper>
      <BrandWrapper>
        <BrandLogo src="https://uxmasters.org/images/merch_logo_50.svg"
          onClick={() => {
            history.push("/");
          }}
        />

        <BrandTitle onClick={() => {
          history.push("/");
        }}>
          Merch Dropper
        </BrandTitle>
      </BrandWrapper>

      <Search />

      <ButtonWrapper>
        <Button
          onClick={() => {
            history.push("/designshirt");
          }}
        >
          Design Merch
        </Button>

        <Button
          onClick={() => {
            history.push("/products");
          }}
        >
          Buy Merch
        </Button>
        {localStorage.getItem("profile") ? (
          <Button onClick={() => logoutWithRedirect()}>Log out</Button>
        ) : (
            <Button onClick={customLogin}>Log In</Button>
          )}

        <Media>
          {localStorage.getItem("profile") ? (
            <div>
              <Media
                object
                src={JSON.parse(localStorage.profile).picture}
                style={imgStyle}
                alt="Profile Photo"
              />
            </div>
          ) : (
              <div></div>
            )}
        </Media>
        {localStorage.getItem("profile") ? (
          <div>
            <NavbarText>
              {JSON.parse(localStorage.profile).name}
            </NavbarText>
          </div>
        ) : (
            <div></div>
          )}
        <CartIcon />
      </ButtonWrapper>
      {hidden ? null : <CartDropDown />}
    </RootWrapper>
  );
};


const mapStateToProps = state => ({
  hidden: state.CartReducer.hidden
});

export default withRouter(connect(mapStateToProps)(NavBar));

//   return (
//     <div className="divNav">
//       <Navbar color="white" light expand="md" className="navStyle">
//         <img className="mr-5" src="https://uxmasters.org/images/merch_logo_50.svg" />
//         <NavbarBrand id="navTitle" href="/">
//           Merch Dropper
//         </NavbarBrand>

//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               <Search />
//             </NavItem>
//           </Nav>
//           <Button
//             color="primary"
//             className="designBtn"
//             onClick={() => {
//               history.push("/designshirt");
//             }}
//           >
//             Design Merch
//           </Button>
//           <Button
//             color="primary"
//             className="designBtn"
//             onClick={() => {
//               history.push("/products");
//             }}
//           >
//             Buy Merch
//           </Button>
//           {localStorage.getItem('profile') ? <Button onClick={() => logoutWithRedirect()}>Log out</Button> : <Button onClick={customLogin}>Log In</Button>}
//           <CartIcon />
//           <Media>
//             {localStorage.getItem("profile") ? <div><Media object src={JSON.parse(localStorage.profile).picture} style={imgStyle} alt="Generic placeholder image" /></div> : <div></div>}
//           </Media>
//           {localStorage.getItem("profile") ? <div><NavbarText>{JSON.parse(localStorage.profile).name}</NavbarText></div> : <div></div>}
//         {hidden ? null : <CartDropDown />}
//       </Navbar>
//     </div>
//   )
// } else {


{/* <div className="divNav">
  <Navbar color="white" light expand="md" className="navStyle">
  <RootWrapper>
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
    {localStorage.getItem("profile") ? (
      <Button onClick={() => logoutWithRedirect()}>Log out</Button>
    ) : (
        <Button onClick={customLogin}>Log In</Button>
      )}
    <CartIcon />
    <Media>
      {localStorage.getItem("profile") ? (
        <div>
          <Media
            object
            src={JSON.parse(localStorage.profile).picture}
            style={imgStyle}
            alt="Profile Photo"
          />
        </div>
      ) : (
          <div></div>
        )}
    </Media>
    {localStorage.getItem("profile") ? (
      <div>
        <NavbarText>{JSON.parse(localStorage.profile).name}</NavbarText>
      </div>
    ) : (
        <div></div>
      )}
    {hidden ? null : <CartDropDown />}
  </RootWrapper>
  </Navbar>
</div> */}
