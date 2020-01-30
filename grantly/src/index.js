// Dependencies

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Auth0Provider } from "./react-auth0-wrapper";
// import config from "./auth_config.json";
import * as Sentry from "@sentry/browser";

// Objects
import App from "./App";
// import { store } from "./store";
import store from './store/index';
// Stylings
import "./index.css";
import "./index.scss";

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

//this connects app to slack sentry
Sentry.init({
  dsn: "https://3fff2a57bcec4d419f25f24c703f14b9@sentry.io/1811765"
});

const AppWithProvider = (
  <Auth0Provider
    domain={process.env.REACT_APP_CLIENT_DOMAIN}
    client_id={process.env.REACT_APP_CLIENT_ID}
    redirect_uri={`${window.location.origin}`}
    audience={process.env.REACT_APP_CLIENT_AUDIENCE}
    onRedirectCallback={onRedirectCallback}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
ReactDOM.render(AppWithProvider, document.getElementById("root"));
