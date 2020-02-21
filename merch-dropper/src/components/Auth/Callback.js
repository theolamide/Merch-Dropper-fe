import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import auth0Client from "./Auth";
import SignUp from './SignUp';

class Callback extends Component {
  async componentDidMount() {
       await auth0Client.handleAuthentication();
       this.props.history.replace("/");
  }

  render() {
    return <SignUp />;
  }
}

export default withRouter(Callback);
