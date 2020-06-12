import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import history from "../../utils/history";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import {
  SettingsH2,
  SettingsBox,
  StripeH3,
  StripeStatusTitle,
  StripeStatus,
  SettingsContainer,
  StorefrontH3,
  AccountTitle,
  AccountNumber,
  Divider,
  StorefrontStatusTitle,
  StorefrontStatusConainer,
  StorefrontStatusDot,
  StorefrontStatus,
  StorefrontTitle,
  StorefrontName,
  StripeContainer,
  StripeStatusContainer,
  StripeButton,
  AccountContainer,
  StorefrontContainer,
  StorefrontStatusInner,
  StorefrontNameContainer,
} from "./Styled";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { axiosWithEnv } from "../../utils/axiosWithEnv";
const useStyles = makeStyles({
  root: {
    background: "#F8F8F9", // custom style for create store button
  },
});

const Settings = () => {
    // comment can be deleted 
    let connectStripeURL;
    if (process.env.REACT_APP_BASE_URL === "development") {
      connectStripeURL = "http://localhost:3000/stripe-setup";
    } else {
      connectStripeURL = "https://merchdropper.store/stripe-setup";
    }
    const classes = useStyles()
    const [stripe, setStripe] = useState("");
    const [connected, setConnected] = useState(false);
    const [store, setStore] = useState("");


  useEffect(() => {
    async function getInfo() {
      let profile = JSON.parse(localStorage.getItem("profile"));
      //let profile = {
      // email: 'jthanson238@gmail.com'}; //for Testing on local seeded db

      axiosWithEnv()
        .get(`/api/stripe/${profile.email}`)
        .then((res) => {
          console.log(res.data.user.stripe_account);
          if (res.data.user.stripe_account) {
            setStripe(res.data.user.stripe_account);
            setConnected(true);
            
            axiosWithEnv().put(`/api/stores/activate/${res.data.user.id}`);
          }
        });

      const res = await axiosWithEnv().get(`/api/users/email/${profile.email}`);

      console.log(res);

      const userID = localStorage.getItem("id");
      const res2 = await axiosWithEnv().get(`/api/stores/user/${userID}`);
      console.log(res2);
      setStore(res2.data.store_name);
    }
    getInfo();
  }, []);

  return (
    <SettingsContainer>
      <SettingsH2>Settings</SettingsH2>
      <SettingsBox>
        <StripeContainer>
          <StripeH3>Stripe</StripeH3>
          <StripeStatusContainer>
            <StripeStatusTitle>Status:</StripeStatusTitle>
            {connected ? (
              <StripeStatus>Connected</StripeStatus>
            ) : (
              <Link to="/stripe-setup">
                <Button
                  className='stripe-cta'
                  color="primary"
                  size="large"
                  classes={{
                    root: classes.root,
                  }}
                  onClick={()=>{
                    localStorage.setItem('fromSettings', true)
                    history.push("/stripe-setup")
                    window.location.replace(connectStripeURL)
                  }}
                >
                  Connect to Stripe
                </Button>
              </Link>
            )}
          </StripeStatusContainer>

          <AccountContainer>
            <AccountTitle>Account Number:</AccountTitle>
            {connected ? (
              <AccountNumber className='stripeacct'>{stripe}</AccountNumber>
            ) : (
              <AccountNumber>No Account</AccountNumber>
            )}
          </AccountContainer>
        </StripeContainer>

        <Divider />

        <StorefrontContainer>
          <StorefrontH3>Storefront</StorefrontH3>
          <StorefrontStatusConainer>
            <StorefrontStatusTitle>Status:</StorefrontStatusTitle>
            <StorefrontStatusInner>
              <StorefrontStatusDot
                style={
                  connected && store !== ""
                    ? { backgroundColor: "#28E13B" }
                    : { backgroundColor: "red" }
                }
              />
              <StorefrontStatus>
                {connected && store !== "" ? "Online" : "Offline"}
              </StorefrontStatus>
            </StorefrontStatusInner>
          </StorefrontStatusConainer>
          <StorefrontNameContainer>
            <StorefrontTitle>Store Name:</StorefrontTitle>
            {store ? (
              <StorefrontName>{store}</StorefrontName>
            ) : (
              <Link to="/createstore">
                <Button
                  className="store-cta" 
                  color="primary"
                  size="large"
                  classes={{
                    root: classes.root,
                  }}
                >
                  Create Store
                </Button>
              </Link>
            )}
          </StorefrontNameContainer>
        </StorefrontContainer>
      </SettingsBox>
    </SettingsContainer>
  );
};

export default Settings;
