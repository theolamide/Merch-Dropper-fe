import React, { useState } from "react";
import { connect } from "react-redux";
import { postUser } from "../../store/actions";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

const initialStoreName = {
  store_name: ""
};

function CreateStore({ postUser, history }) {
  const [storeName, setStoreName] = useState(initialStoreName);

  const handleChange = e => {
    setStoreName({
      ...storeName,
      [e.target.name]: e.target.value
    });
  };

  const callCreateStore = e => {
    e.preventDefault();
    postUser(storeName);
    history.push("/");
  };

  // if user submits the store creation form, a new route is created based on the user's custom store name
  // if user skips this step, the user is forwarded to /dashboard until they create a custom store name

  return (
    <OnBoardingContainer>
      <div>
        <OnBoardingHeader>Merch made easy.</OnBoardingHeader>
        <OnBoardingH2>
          Sell your custom print-on-demand designs with Merch Dropper
        </OnBoardingH2>
        <OnBoardingCreateH3>Create your store</OnBoardingCreateH3>
        <OnBoardingCreateP>
          Simplified setup includes free custom domain and storefront template.
        </OnBoardingCreateP>
        <OnBoardingDesignsH3>Upload your designs</OnBoardingDesignsH3>
        <OnBoardingDesignsP>
          Add your artwork or create a design with our easy-to-use tool.
        </OnBoardingDesignsP>
        <OnBoardingSalesH3>Hassle-free sales</OnBoardingSalesH3>
        <OnBoardingSalesP>
          We print and shop merchandise straight to the customer.
        </OnBoardingSalesP>
      </div>
      <OnBoardingForm>
        <OnBoardingFormHeader>Create store</OnBoardingFormHeader>
        <OnBoardingStoreTextDiv>
          <TextField
            id="outlined-basic"
            label="Store Name"
            variant="outlined"
          />
        </OnBoardingStoreTextDiv>
        <Button>Create store</Button>
        <Button>Skip for now</Button>
      </OnBoardingForm>
    </OnBoardingContainer>
  );
}

const mapStateToProps = state => {
  let register = state.RegisterReducer;

  return {
    isFetching: register.isFetching,
    error: register.error
  };
};

export default connect(mapStateToProps, { postUser })(CreateStore);

// All the styling
const OnBoardingContainer = styled.div`
  width: 1440px;
  height: 1024px;
  background: #f3f3f3;
`;

const OnBoardingHeader = styled.h1`
  position: absolute;
  width: 392px;
  height: 56px;
  left: 104px;
  top: 153px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  color: #000000;
`;

const OnBoardingH2 = styled.h2`
  position: absolute;
  width: 555px;
  height: 84px;
  left: 104px;
  top: 225px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 36px;
  line-height: 42px;
  color: #333333;
`;

const OnBoardingCreateH3 = styled.h3`
  position: absolute;
  width: 186px;
  height: 28px;
  left: 104px;
  top: 365px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`;

const OnBoardingDesignsH3 = styled.h3`
  position: absolute;
  width: 220px;
  height: 28px;
  left: 104px;
  top: 495px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`;

const OnBoardingSalesH3 = styled.h3`
  position: absolute;
  width: 190px;
  height: 28px;
  left: 104px;
  top: 625px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
`;

const OnBoardingCreateP = styled.p`
  position: absolute;
  width: 311px;
  height: 42px;
  left: 104px;
  top: 397px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

const OnBoardingDesignsP = styled.p`
  position: absolute;
  width: 311px;
  height: 42px;
  left: 104px;
  top: 527px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

const OnBoardingSalesP = styled.p`
  position: absolute;
  width: 311px;
  height: 42px;
  left: 104px;
  top: 657px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`;

const OnBoardingForm = styled.form`
  position: absolute;
  width: 550px;
  height: 888px;
  left: 786px;
  top: 68px;
  background: #ffffff;
  border-radius: 30px;
`;

const OnBoardingFormHeader = styled.h2`
  position: absolute;
  width: 199px;
  height: 42px;
  left: calc(50% - 199px / 2 - 0.5px);
  top: 86px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
`;

const OnBoardingStoreTextDiv = styled.div`
  position: absolute;
  width: 344px;
  height: 59px;
  left: calc(50% - 344px / 2);
  top: 252px;
  border: 3px solid #ededed;
  box-sizing: border-box;
  border-radius: 10px;
`;
