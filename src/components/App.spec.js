import React from "react";
import * as rtl from "@testing-library/react";
import {Provider} from "react-redux";

import configureStore from "redux-mock-store";
import App from "./App";
import {BrowserRouter as Router} from "react-router-dom";
import {useAuth0} from "../components/auth0/Auth0Wrapper";

jest.mock("../components/auth0/Auth0Wrapper");
const user = {
    email: "testuser@email.com",
    email_verified: true,
    sub: `random-oauth2-stringOfText`,
    nickname: "Test User",
    app_metadata: {
        authorization: {
            roles: [],
            permissions: []
        }
    },
    roles: []
};

const mockStore = configureStore([]);
let store;
beforeEach(() => {
    store = mockStore({
        user: {
            currentUser: user
        },
        admin: {
            isModerator: false
        },
        grants: {
            grants: [1, 2]
        },
        filters: {
            pristine: true,
            criteria: {}
        }
    });
    useAuth0.mockReturnValue({
        isAuthenticated: false,
        user,
        getTokenSilently: jest.fn().mockImplementationOnce(() => "Token"),
        logout: jest.fn(),
        loginWithRedirect: jest.fn()
    });
});

describe("Suggestion Component", () => {
    it("should render without crashing", () => {
        rtl.render(
            <Provider store={store}>
                <Router>
                    <App/>
                </Router>
            </Provider>
        );
    });
});
