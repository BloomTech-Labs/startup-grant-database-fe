// Dependencies
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { checkUser } from "./actions/index";
import { useAuth0 } from "./react-auth0-wrapper";

// Objects

import SubmitForm from "./components/SubmitForm";
import Home from "./views/Home";
import Admin from "./views/Admin";

// Stylings
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./styles/Theme";
import Landing from "./views/Landing";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/Navbar";
import Sitemap from "./components/Sitemap";
import PrivateRoute from "./util/PrivateRoute";

function App({ checkUser, currentUser }) {
  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      checkUser(user);
    }
  }, [user]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <NavBar location={window.location.pathname} role={currentUser.role} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/grants" component={Home} />
          <Route path="/form" component={SubmitForm} />
          <Route path="/login" component={LoginForm} />
          {/* Making Admin Route public for testing purposes */}
          <Route path="/admin" component={Admin} />
          {/* {isAuthenticated && (
            <PrivateRoute exact path="/admin" component={Admin} />
          )} */}
          <Sitemap />
        </div>
      </ThemeProvider>
    </Router>
  );
}
const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};
export default connect(
  mapStateToProps,
  { checkUser }
)(App);
