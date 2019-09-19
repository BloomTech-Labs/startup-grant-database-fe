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

function App() {
  // if (loading) {
  //   return (
  //     <div>Loading...</div>
  //   );
  // }

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* <div>Welcome to Grantly</div> */}
          <Route path="/" component={NavBar} />
          <Route path="/" component={SearchBar} />

          <Media query="(max-width:850px)">
            {matches =>
              matches ? (
                <Route path="/" component={MobileTabs} />
              ) : (
                <Route exact path="/" component={Home} />
              )
            }
          </Media>
          {/* <Route path="/grants" component={GrantList} /> */}
          <Route path="/form" component={SubmitForm} />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
