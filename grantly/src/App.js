// Dependencies
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { checkUser, fetchApi } from "./actions/index";
import { useAuth0 } from "./react-auth0-wrapper";

// Objects
import SubmitForm from "./components/SubmitForm";
import Home from "./views/Home";
import Admin from "./views/Admin";
import About from "./components/About";
import GrantTable from "./components/grants/GrantTable"

// Stylings
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./styles/theme";
import Landing from "./views/Landing";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/Navbar";
import Sitemap from "./components/Sitemap";
import PrivateRoute from "./util/PrivateRoute";
// import EmailDialog from "./components/dialogs/EmailDialog";

function App({ checkUser, currentUser, fetchApi }) {
  const { user, isAuthenticated, getTokenSilently } = useAuth0();


  useEffect(() => {
    if (isAuthenticated) {
      // const authToken = getTokenSilently().then(res => res);
      const auth = getTokenSilently().then(res => {
        const authToken = res;
        checkUser({ ...user, token: authToken });
      });
    }
  }, [user]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Route
            path="/"
            render={props => (
              <NavBar {...props} fetchApi={fetchApi} role={currentUser.role} />
            )}
          />
          {/* <EmailDialog /> */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/grants" render={props => <Home {...props} />} />
          <Route path="/form" render={props => <SubmitForm {...props} />} />
          <Route path="/login" component={LoginForm} />
          <Route path="/about" component={About} />
          <Route path="/table" component={GrantTable} />
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
  { checkUser, fetchApi }
)(App);
