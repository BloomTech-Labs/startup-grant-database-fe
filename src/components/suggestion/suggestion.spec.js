import React from "react";
import * as rtl from "@testing-library/react";
import {Provider} from "react-redux";
import store from "../../store";
import {SuggestionForm} from "../suggestion/Suggestion";
import {BrowserRouter as Router} from "react-router-dom";

describe("Suggestion Component", () => {
    it("should render without crashing", () => {
        const renderComponent = rtl.render(
            <Provider store={store}>
                <Router>
                    <SuggestionForm/>
                </Router>
            </Provider>
        );

        const titleText = renderComponent.getByText(/Submit a New Grant/i);
        // expect(titleText).toBeInTheDocument;
    });
});
