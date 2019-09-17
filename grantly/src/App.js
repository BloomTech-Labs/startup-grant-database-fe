// Dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createAuth0Client from "@auth0/auth0-spa-js";

// Objects
import GrantList from "./components/grants/GrantList";
import NavBar from "./components/Navbar";

// Stylings
import "./App.css";
import Filters from "./components/Filters";
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <div>Welcome to Grantly</div> */}
        {/* <Route path="/" component={NavBar} /> */}
        <Route path="/grants" component={GrantList} />
        <Route path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
