import React from 'react';
import {CssBaseline} from "@material-ui/core";
import Navbar from "./navbar/Navbar";
import {Footer} from './footer/Footer';
import {useActions} from "../store/useActions";
import {ActionsProvider} from "../context/ActionsContext";

function App() {
    const actions = useActions();
    return (
        <ActionsProvider value={actions}>
            <CssBaseline/>
            <Navbar/>
            <Footer/>
        </ActionsProvider>
    )
}

export default App;
