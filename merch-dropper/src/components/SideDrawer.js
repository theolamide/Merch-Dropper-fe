import React from 'react';
import { withRouter } from "react-router-dom";
import styled from 'styled-components';
import { ButtonWrapper, Button, MediaWrapper } from './NavBar';
import {
    Media,
    NavbarText
} from "reactstrap";


const RootWrapper = styled.div`
    height: 100%;
    width: 60%;
    background: white;
    position: fixed;
    top:0;
    right:0;
    z-index: 200;
    display:flex;
    flex-direction: column;
    align-items: flex-end;
    border: 1px solid black;
`

const CloseHamburger = styled.button`
    width: 3rem;
    height: 3rem;
    background: transparent;
    margin-top: 0.75rem;
    margin-right: 0.75rem;
    border: none;
    cursor:pointer;
    padding: 0;
    font-size: 3rem;
    color: #007bff;
    box-sizing: border-box;
    //border: 1px solid black;
    &:focus{
        outline:none;
    }
`
const LinkDiv = styled.div`
    text-align: right;
    margin: 0.5rem 0;    
    padding:0.15rem;
    padding-right: 1rem;
    border-bottom: 1px solid black;
    cursor: pointer;
`

const SideDrawer = ({ closeDrawer, imgStyle, logoutWithRedirect, customLogin, history }) => {

    const Reroute = (route) => {
        history.push("/route");
    }


    return (
        <RootWrapper>
            <CloseHamburger onClick={closeDrawer} >
                X
                {/* <img src="https://img.icons8.com/ultraviolet/40/000000/multiply.png"></img> */}
            </CloseHamburger>

            <LinkDiv
                onClick={() => {
                    history.push("/designshirt");
                }}
            >
                Design Merch
            </LinkDiv>

            <LinkDiv
                onClick={() => {
                    history.push("/products")
                }}
            >
                Buy Merch
                </LinkDiv>

            {localStorage.getItem("profile") ? (
                <LinkDiv onClick={() => logoutWithRedirect()}>Log out</LinkDiv>
            ) : (
                    <LinkDiv onClick={customLogin}>Log In</LinkDiv>
                )}

            <MediaWrapper >
                {localStorage.getItem("profile") ? (
                    <Media
                        object
                        src={JSON.parse(localStorage.profile).picture}
                        style={imgStyle}
                        alt="Profile Photo"
                    />
                ) : (
                        <Media
                            object
                            src='https://cdn4.iconfinder.com/data/icons/messenger-1-0-line/106/Profile_Line-512.png'
                            style={imgStyle}
                            alt="Profile Photo"
                        />
                    )}
                {localStorage.getItem("profile") ? (
                    <NavbarText style={{ paddingLeft: '1rem' }}>
                        {JSON.parse(localStorage.profile).name}
                    </NavbarText>
                ) : (
                        <p style={{ paddingLeft: '1rem' }}>Guest</p>
                    )}
            </MediaWrapper>
        </RootWrapper>
    )
};

export default withRouter(SideDrawer);