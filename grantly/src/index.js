// Dependencies
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Auth0Provider } from "./react-auth0-wrapper";
import config from "./auth_config.json";

// Objects
import App from "./App";
import { store } from "./store";

// Stylings
import "./index.css";

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const AppWithProvider = (
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
console.log(window.location.origin)
ReactDOM.render(AppWithProvider, document.getElementById("root"));
