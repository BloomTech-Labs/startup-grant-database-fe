// Dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";


// Objects

import SubmitForm from "./components/SubmitForm";
import Home from "./views/Home";

// Stylings
import { ThemeProvider } from "@material-ui/styles";
import { theme } from "./styles/Theme";
import Landing from "./views/Landing";


function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route exact path="/grants" component={Home} />
          <Route path="/form" component={SubmitForm} />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
