import React, { useState, useEffect, useContext } from "react";
import createAuth0Client from "@auth0/auth0-spa-js";
import Auth0Lock from "auth0-lock";

const DEFAULT_REDIRECT_CALLBACK = () =>
  window.history.replaceState({}, document.title, window.location.pathname);

export const Auth0Context = React.createContext();
export const useAuth0 = () => useContext(Auth0Context);

const clientId = `${process.env.REACT_APP_CLIENT_ID}`;
const domain = `${process.env.REACT_APP_CLIENT_DOMAIN}`;
const options = {
  languageDictionary: {
    emailInputPlaceholder: "Enter your email",
    passwordInputPlaceholder: "Enter your password",

    title: "Welcome"
  },
  popupOptions: { width: 300, height: 400, left: 200, top: 300 },

  theme: {
    primaryColor: "#3DB8B3",

    authButtons: {
      testConnection: {
        displayName: "Test Conn",
        primaryColor: "#3DB8B3",
        foregroundColor: "#000000",
        icon: "http://example.com/icon.png"
      },
      testConnection2: {
        primaryColor: "#000000",
        foregroundColor: "#ffffff"
      }
    }
  },
  additionalSignUpFields: [
    {
      name: "First_name",
      placeholder: "Enter your first name"
    },
    {
      name: "Last_name",
      placeholder: "Enter your last name"
    }
  ]
};
export const lock = new Auth0Lock(clientId, domain, options);

export const Auth0Provider = ({
  children,
  onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
  ...initOptions
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState();
  const [user, setUser] = useState();
  const [auth0Client, setAuth0] = useState();
  const [loading, setLoading] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  console.log(clientId, domain);

  useEffect(() => {
    const initAuth0 = async () => {
      const auth0FromHook = await createAuth0Client(initOptions);
      setAuth0(auth0FromHook);

      if (window.location.search.includes("code=")) {
        const { appState } = await auth0FromHook.handleRedirectCallback();
        onRedirectCallback(appState);
      }

      const isAuthenticated = await auth0FromHook.isAuthenticated();

      setIsAuthenticated(isAuthenticated);

      if (isAuthenticated) {
        const user = await auth0FromHook.getUser();
        setUser(user);
      }
      setLoading(false);
    };
    initAuth0();
  }, []);

  const loginWithPopup = async (params = {}) => {
    setPopupOpen(true);
    try {
      await auth0Client.loginWithPopup(params);
    } catch (error) {
      console.error(error);
    } finally {
      setPopupOpen(false);
    }
    const user = await auth0Client.getUser();
    setUser(user);
    setIsAuthenticated(true);
  };

  const handleRedirectCallback = async () => {
    setLoading(true);
    await auth0Client.handleRedirectCallback();
    const user = await auth0Client.getUser();
    setLoading(false);
    setIsAuthenticated(true);
    setUser(user);
  };

  lock.on("authenticated", function(authResult) {
    lock.getUserInfo(authResult.accessToken, function(error, profile) {
      if (error) {
        // Handle error
        return;
      }

      localStorage.setItem("accessToken", authResult.accessToken);
      localStorage.setItem("profile", JSON.stringify(profile));
      setIsAuthenticated(true);
      setUser(JSON.stringify(profile));

      return "Success";
      // Update DOM
    });
  });
  return (
    <Auth0Context.Provider
      value={{
        isAuthenticated,
        user,
        loading,
        popupOpen,
        loginWithPopup,
        handleRedirectCallback,
        getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
        loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
        getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
        getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
        logout: (...p) => auth0Client.logout(...p)
      }}
    >
      {children}
    </Auth0Context.Provider>
  );
};
