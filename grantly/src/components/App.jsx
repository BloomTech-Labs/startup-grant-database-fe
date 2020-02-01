import React from 'react';
import {Route} from 'react-router-dom'
import {CssBaseline} from "@material-ui/core";
import Navbar from "./navbar/Navbar";

import Suggestion from './suggestion/Suggestion'

function App() {
    return (
        <>
            <CssBaseline/>
            <Navbar/>
            
            <Suggestion />
        </>
    )
}

export default App;
