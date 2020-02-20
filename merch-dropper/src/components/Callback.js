import React, { Component } from "react";
import NavBar from "./NavBar";
import { withRouter } from "react-router-dom";
import auth0Client from "./Auth";

class Callback extends Component {
  async componentDidMount() {
       await auth0Client.handleAuthentication();
       this.props.history.replace("/");
  }

  render() {
    return (
    <div>
      {/* <NavBar /> */}
      <p>Loading profile...</p>
    </div>
    )}
}

export default withRouter(Callback);
