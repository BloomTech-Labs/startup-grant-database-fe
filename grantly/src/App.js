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
import About from "./components/About";

// Stylings
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./styles/Theme";
import Landing from "./views/Landing";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/Navbar";
import Sitemap from "./components/Sitemap";
import PrivateRoute from "./util/PrivateRoute";

function App({ checkUser, currentUser }) {
  const { user, isAuthenticated,  getTokenSilently } = useAuth0();
  useEffect(() => {
    if (isAuthenticated) {
      const authToken = getTokenSilently();
      console.log("auth", authToken)

      checkUser(user);
    }
  }, [user]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* <Route path = "/login" component={LoginForm} /> */}
          <Route path="/" render={props => <NavBar {...props} role={currentUser.role} />} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/grants" component={Home} />
          <Route path="/form" component={SubmitForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/about" component={About} />
          {/* <Route path="/admin" component={Admin} /> */}
          {isAuthenticated && (
            <PrivateRoute exact path="/admin" component={Admin} />
          )}
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
