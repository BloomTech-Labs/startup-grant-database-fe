import React from "react";
import * as rtl from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../store";
import UserSettings from "./userSettings.js";
import {BrowserRouter as Router} from "react-router-dom";

describe("Suggestion Component", () => {
    it("should render without crashing", () => {
        rtl.render(
            <Provider store={store}>
                <Router>
                    <UserSettings/>
                </Router>
            </Provider>
        );
    });
});
