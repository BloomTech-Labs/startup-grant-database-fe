// Dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

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

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* <Route path = "/login" component={LoginForm} /> */}
          <NavBar location={window.location.pathname} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/grants" component={Home} />
          <Route path="/form" component={SubmitForm} />
          <Route path="/admin" component={Admin} />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
