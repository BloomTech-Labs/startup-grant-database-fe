// Dependencies
import React from "react";
import createAuth0Client from "@auth0/auth0-spa-js";

// Objects
import GrantList from "./components/GrantList";

// Stylings
import "./App.css";
import NavBar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div>Welcome to Grantly</div>
      {/* <NavBar /> */}
      <GrantList />
    </div>
  );
}

export default App;
