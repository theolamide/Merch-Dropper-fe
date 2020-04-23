import React, { useState } from "react";
import { connect } from "react-redux";
import { postUser } from "../../store/actions";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StripeCTA from "./StripeCTA";
import {
  FormHeader,
  MainContainer,
  CreateStoreForm,
  StepperDiv,
  StoreTextDiv,
  URLPreviewDiv,
  CreateStoreButton,
  SkipCreateStoreButton,
} from "./Styled";

import axios from "axios";

// All the material UI
function getSteps() {
  return ["Create account", "Connect Stripe", "Create store"];
}

const useStyles = makeStyles((theme) => ({
  textField: {
    width: "38.2ch",
  },
}));

// This profile const is hardcoded for testing the store creation functionality. Remove for production.
// const profile = {
//   email: "email@test.com",
// };

function CreateStore({ history }) {
  const [storeName, setStoreName] = useState("");
  const [domain, setDomain] = useState("");
  const [activeStep, setActiveStep] = React.useState(2);
  const [isSubmit, setIsSubmit] = useState(false);

  // This code is specific to the Material-UI components for displaying the progress bar (steps 1, 2, 3)
  const steps = getSteps();
  const classes = useStyles();

  // This change handler watches the TextField input box
  // Then it sets the user's input to storeName
  // And calls the convertToDomain function to convert the user's input to a suitable domain name by removing spaces and special characters
  const handleChange = (e) => {
    setStoreName(e.target.value);
    convertToDomain(e.target.value);
  };

  const convertToDomain = (string) => {
    let splitString = string.split(/[^A-Za-z0-9]/);
    let joinedString = splitString.join("");

    setDomain(joinedString);
  };

  // The code below must be adjusted for the correct end point once merged
  const profile = JSON.parse(localStorage.getItem("profile"));
  // console.log(profile);

  // The callSignUp function sends a post request to the back end to create a new store associated with the logged in user
  // The store_name is the unedited input from the user to be displayed on their dashboard and buyer-facing storefront
  // The domain_name is the edited input from the user to make a clean URL for their store
  const callSignUp = (e) => {
    e.preventDefault();
    setIsSubmit(true);

    axios
      .post(`https://merchdropper-production.herokuapp.com/api/stores`, {
        store_name: storeName,
        domain_name: domain,
        email: profile.email,
      })
      .then((res) => {
        console.log("This is res: ", res);
        setIsSubmit(false);
        alert("Store Created!");
        history.push("/dashboard");
      })
      .catch((err) => {
        setIsSubmit(false);
        console.log("This is error: ", err);
      });
  };

  // This function allows the user to skip the store creation form and be forwarded to the user's dashboard
  const skipToDashboard = (e) => {
    e.preventDefault();
    history.push("/dashboard");
  };

  // if user submits the store creation form, a new route is created based on the user's custom store name
  // if user skips this step, the user is forwarded to /dashboard until they create a custom store name

  return (
    <MainContainer>
      <StripeCTA />
      <CreateStoreForm onSubmit={callSignUp}>
        <FormHeader>Create store</FormHeader>
        <StepperDiv>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </StepperDiv>
        <StoreTextDiv>
          <TextField
            className={classes.textField}
            id="outlined-basic"
            label="Store name"
            name="store-name"
            variant="outlined"
            inputProps={{ maxLength: 25 }}
            value={storeName}
            onChange={handleChange}
          />
        </StoreTextDiv>
        <URLPreviewDiv>
          {domain.length < 14 ? (
            <p>merchdropper.store/{domain}</p>
          ) : (
            <>
              <p style={{ color: "grey" }}>merchdropper.store/</p>
              <p>{domain}</p>
            </>
          )}
        </URLPreviewDiv>
        <CreateStoreButton type="submit">Create store</CreateStoreButton>
        <SkipCreateStoreButton onClick={skipToDashboard}>
          Skip for now
        </SkipCreateStoreButton>
      </CreateStoreForm>
    </MainContainer>
  );
}

const mapStateToProps = (state) => {
  let register = state.RegisterReducer;

  return {
    isFetching: register.isFetching,
    error: register.error,
  };
};

export default connect(mapStateToProps, { postUser })(CreateStore);
