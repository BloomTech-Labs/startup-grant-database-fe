import React from 'react';
import {CssBaseline} from "@material-ui/core";
import Navbar from "./navbar/Navbar";
import {Footer} from './footer/Footer';

function App() {
    return (
        <>
            <CssBaseline/>
            <Navbar/>
            <Footer/>
        </>
    )
}

export default App;
