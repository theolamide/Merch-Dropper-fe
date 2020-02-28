import React from "react";
import { withRouter } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import MerchDropperLogo from "../assets/MerchDropperLogo.JPG";

const StripeCheckoutButton = ({ price, history }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_BMXGPoL1peDqHyy42iFEoAMg00l0M6PNex";
  //const publishableKey = 'pk_live_3zwsNFDgIC2nJd4h7F9Y5K8s00exa06IRd'; //Uncomment this line for when stripe is collecting Live payments. Make sure to also change the environment variable on the Backend to the Live key.

  let config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const onToken = token => {
    console.log(token);
    axios
      .post("https://merchdropper-production.herokuapp.com/api/payments/", {
        amount: priceForStripe,
        token,
        config
      })
      .then(function() {
        alert("payment successful");
        history.push("/products");
      })
      .catch(error => {
        console.log("payment error", error);
        alert("There was an issue with your payment.");
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="MerchDropper"
      billingAddress
      shippingAddress
      image={`${MerchDropperLogo}`}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default withRouter(StripeCheckoutButton);
