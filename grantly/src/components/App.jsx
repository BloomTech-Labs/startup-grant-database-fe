import React from 'react';
import {CssBaseline} from "@material-ui/core";
import {MuiThemeProvider} from "@material-ui/core/styles";
import Navbar from "./navbar/Navbar";
import {Footer} from './footer/Footer';
import {useActions} from "../store/useActions";
import {ActionsProvider} from "../context/ActionsContext";
import {theme} from "./theme";

function App() {
    const actions = useActions();
    return (
        <MuiThemeProvider theme={theme}>
            <ActionsProvider value={actions}>
                <CssBaseline/>
                <Navbar/>
                <Footer/>
            </ActionsProvider>
        </MuiThemeProvider>
    )
}

export default App;
