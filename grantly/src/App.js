// Dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Objects
import GrantList from "./components/GrantList";
import NavBar from "./components/Navbar";

// Stylings
import "./App.css";
import Filters from "./components/Filters";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <div>Welcome to Grantly</div>
        {/* <Route path="/" component={NavBar} />
        <Route path="/grants" component={GrantList} /> */}
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
