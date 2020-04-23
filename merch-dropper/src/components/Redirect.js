import React, { useEffect } from "react";
import { useAuth0 } from "./Auth/Auth";

const Redirect = ({ history }) => {
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (user && isAuthenticated) {
      if (
        user["https://merchdropper.store/signup"] ||
        user["https://merchdropper.store/idp/signup"]
      ) {
        setTimeout(() => {
          // store creation form
          history.push("/stripe-setup");
        }, 500);
      } else {
        setTimeout(() => {
          // or user's own storefront
          history.push("/dashboard");
        }, 500);
      }
    }
  });

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Loading before Redirect</h2>
    </div>
  );
};

export default Redirect;
