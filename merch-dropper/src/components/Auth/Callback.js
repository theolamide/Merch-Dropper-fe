import React, { Component } from "react";
import NavBar from "./NavBar";
import { withRouter } from "react-router-dom";
import auth0Client from "./Auth";
import SignUp from './SignUp';

class Callback extends Component {
  async componentDidMount() {
       await auth0Client.handleAuthentication();
       this.props.history.replace("/");
  }

  render() {
<<<<<<< HEAD:merch-dropper/src/components/Callback.js
    return (
    <div>
      {/* <NavBar /> */}
      <p>Loading profile...</p>
    </div>
    )}
=======
    return <SignUp />;
  }
>>>>>>> 8d457b25d6628707454d1c2ee6b6dd53cb901400:merch-dropper/src/components/Auth/Callback.js
}

export default withRouter(Callback);
