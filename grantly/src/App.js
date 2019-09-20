// Dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Media from "react-media";

import createAuth0Client from "@auth0/auth0-spa-js";

// Objects
import GrantList from "./components/grants/GrantList";
import NavBar from "./components/Navbar";
import SubmitForm from "./components/SubmitForm";
import Home from "./views/Home";
import MobileTabs from "./components/MobileTabs";
import SearchBar from "./components/SearchBar";

// Stylings
import "./App.scss";
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./styles/Theme";
import Landing from "./views/Landing";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* <div>Welcome to Grantly</div> */}
          {/* I put the Navbar into the Home View Component, so we don't need to have a specific route to the NavBar, and to clean up the code -PJ */}
          {/* <Route path="/" component={NavBar} /> */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/grants" component={Home} />

          {/* <Route path="/grants" component={GrantList} /> */}
          <Route path="/form" component={SubmitForm} />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
