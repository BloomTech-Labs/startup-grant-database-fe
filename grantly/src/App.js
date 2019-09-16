// Dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import { useAuth0 } from "./react-auth0-wrapper";


// Objects
import GrantList from "./components/GrantList";
import NavBar from "./components/Navbar";


// Stylings
import "./App.css";

function App() {


  return (
    <Router>

  
    <div className="App">
      <div>Welcome to Grantly</div>
      <Route path="/" component={NavBar} />
      <Route path="/grants" component={GrantList} />

    </div>
</Router>
  );
}

export default App;
