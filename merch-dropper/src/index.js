import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Auth0Provider } from "./components/Auth/Auth";
import history from "./utils/history.js";

import config from "./components/Auth/auth_config.json";
// auth_config.json is for Auth0 purposes
// domain is our auth0 domain
// clientId is assigned to us by Auth0
// no more changes likely needed

import { store, persistor } from "./store/store";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

// onRedirectCallback routes the user to the right place once they have logged in. For example, if the user tries to access a page that requires them to be authenticated, they will be asked to log in. When they return to the application, they will be forwarded to the page they were originally trying to access thanks to this function.
const onRedirectCallback = (appState) => {
  history.push(
    // if appState and appState.targetUrl exist, then push the user to appState.targetUrl
    // else, push the user to window.location.pathname, in this case it would be the URL of the current page, the login form
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <PersistGate persistor={persistor}>
        <Auth0Provider
          domain={config.domain}
          client_id={config.clientId}
          redirect_uri={window.location.origin}
          audience={config.audience}
          onRedirectCallback={onRedirectCallback}
        >
          <App />
        </Auth0Provider>
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
