import auth0 from "auth0-js";

class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      // the following three lines MUST be updated
      domain: "merch-dropper.auth0.com",
      audience: "https://merch-dropper.auth0.com/userinfo",
      clientID: "Pb3Cp5ptYghmNVDjusjPmsHPRkJq6RAP",
      redirectUri: "http://localhost:3000/callback",
      // redirectUri: "https://flamboyant-minsky-4b61e4.netlify.com/callback",
      responseType: "id_token",
      scope: "openid profile"
    });

    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  getProfile() {
    localStorage.setItem("Id_token", this.idToken);
    console.log("Profile", this.profile);
    return this.profile;
  }

  getIdToken() {
    return this.idToken;
  }

  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }

  signIn() {
    // localStorage.setItem("Id_token", this.idToken);
    this.auth0.authorize();
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        // set the time that the id token will expire at
        this.expiresAt = authResult.idTokenPayload.exp * 1000;
        resolve();
      });
    });
  }

  signOut() {
    // clear id token, profile, and expiration
    this.idToken = null;
    this.profile = null;
    this.expiresAt = null;
    localStorage.removeItem("Id_token");
    this.auth0.logout({
      returnTo: "http://localhost:3000",
      // returnTo: "https://flamboyant-minsky-4b61e4.netlify.com",
      clientID: "Pb3Cp5ptYghmNVDjusjPmsHPRkJq6RAP"
    });
  }
}

const auth0Client = new Auth();

export default auth0Client;
