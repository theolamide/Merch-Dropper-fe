import React, { useState, useEffect, useContext } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";

// meat and bones of login form
// for more information, see Auth0 documentation for this code
// https://auth0.com/docs/quickstart/spa/react/01-login

// this code removes the "code=" and "state=" from URL so if user refreshes the page, the app does not try and parse the state and code again
const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);
console.log("This is useAuth0 in Auth.js: ", useAuth0);

// Auth0 Provider is imported in index.js
export const Auth0Provider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  // onRedirectCallback routes the user to the right place once they have logged in
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);

  // popupOpen is for the login form popping up
  const [popupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    const initAuth0 = async () => {
      // createAuth0Client is creating an instance of Auth0 using our domain and client_id, and then setting it to auth0FromHook
      const auth0FromHook = await createAuth0Client(initOptions);
      // initOptions in this case is
      // domain={config.domain}
      // client_id={config.clientId}
      // as stated in index.js
      // which is imported from auth_config.json

      setAuth0(auth0FromHook);

      // this code is looking for "code=" and "state=" in the URL
      // if it's there, it will await the response from the handleRedirectCallback hook
      if (
        window.location.search.includes("code=") &&
        window.location.search.includes("state=")
      ) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        // After the browser redirects back to the callback page, call handleRedirectCallback to handle success and error responses from Auth0. If the response is successful, results will be valid according to their expiration times.
        // handleRedirectCallback is built into Auth0Client and since we are creating an instance of the Auth0Client (aka auth0FromHook), it inherits the handleRedirectCallback hook

        // after being authenticated via Auth0, the user is redirected to where they were before being authenticated
        onRedirectCallback(appState);
      }

      // this code sets isAuthenticated to a boolean as returned from auth0FromHook.isAuthenticated()
      const isAuthenticated = await auth0FromHook.isAuthenticated();

      // this code is setting the local state for authentication
      setIsAuthenticated(isAuthenticated);

      // now we check the state, if it's true, we use the .getUser() method inherited from Auth0Client
      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
        localStorage.setItem("profile", JSON.stringify(user));
      }

      setLoading(false);
    };

    // the block above defines initAuth0() so it can be called below when the useEffect is triggered
    initAuth0();
    // eslint-disable-next-line
  }, []);

  // creates login popup form - to be modified/removed when we create our own login form because we don't want a popup form
  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);

    // this code executes
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      // console.error outputs an error message to the console
      console.error(error);
    } finally {
      // finally executes no matter what
      setPopupOpen(false);
    }
    const user = await auth0Client.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };

  // this hook redirects the user after the user hits submit on the login form by calling the Auth0Client method of the same name, and then sets the local state for user, loading, and authentication
  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
  };

  // For more information on terminology, see:
  // https://auth0.github.io/auth0-spa-js/classes/auth0client.html
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        // getIdTokenClaims has two properties: audience and scope
        // returns all claims from the id_token if available
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),

        // Performs a redirect to /authorize using the parameters provided as arguments. Random and secure state and nonce parameters will be auto-generated.
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),

        // getTokenSilently - If there's a valid token stored, returns it. Otherwise, opens an iframe (aka inline frame) with the /authorize URL using the parameters provided as arguments. Random and secure state and nonce parameters will be auto-generated. If the response is successful, results will be valid according to their expiration times.
        // An inline frame is used to embed another document within the current HTML document.
        // The HTML inline frame allows you to embed another HTML page into your current HTML page. HTML inception.
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),

        // getTokenWithPopup - Opens a popup with the /authorize URL using the parameters provided as arguments. Random and secure state and nonce parameters will be auto-generated. If the response is successful, results will be valid according to their expiration times.
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),

        // Clears the application session and performs a redirect to /v2/logout, using the parameters provided as arguments, to clear the Auth0 session. If the federated option is specified it also clears the Identity Provider session. If the localOnly option is specified, it only clears the application session. It is invalid to set both the federated and localOnly options to true, and an error will be thrown if you do.
        // To read more about how Auth0 handles logout:
        // https://auth0.com/docs/logout
        logout: (...p) => auth0Client.logout(...p)
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
