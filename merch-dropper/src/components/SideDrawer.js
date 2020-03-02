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
`

const SideDrawer = ({ closeDrawer, imgStyle, logoutWithRedirect, customLogin, history }) => {

    return (
        <RootWrapper>
            <button onClick={closeDrawer} >
                X
            </button>

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

            <MediaWrapper>
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