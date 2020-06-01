import React, { useState } from "react";
import { connect } from "react-redux";
import { userSignup } from "../../store/actions";
import {
  StyledHeader,
  SignUpBox,
  StyledForm,
  StyledInput,
  StyledButton
} from "./Styled.js";

const initialSignupInfo = {
  username: "",
  password: ""
};

function Signup({ userSignup, history }) {
  const [signupInfo, setSignupInfo] = useState(initialSignupInfo);

  const handleChange = e => {
    setSignupInfo({
      ...signupInfo,
      [e.target.name]: e.target.value
    });
  };

  const callSignup = e => {
    e.preventDefault();
    userSignup(signupInfo, history);
  };

  return (
    <SignUpBox>
      <StyledHeader>Sign up</StyledHeader>
      <StyledForm onSubmit={callSignup}>
        <StyledInput
          name="username"
          type="text"
          value={signupInfo.username}
          placeholder="username"
          onChange={handleChange}
        />
        <StyledInput
          name="password"
          type="password"
          value={signupInfo.password}
          placeholder="password"
          onChange={handleChange}
        />
        <StyledButton>Sign up</StyledButton>
      </StyledForm>
    </SignUpBox>
  );
}

const mapStateToProps = state => {
  let signup = state.RegisterReducer;

  return {
    isFetching: signup.isFetching,
    error: signup.error
  };
};

export default connect(mapStateToProps, { userSignup })(Signup);
