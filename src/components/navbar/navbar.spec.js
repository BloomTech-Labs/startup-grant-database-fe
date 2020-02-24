import React from 'react';
import {render} from '@testing-library/react';
import {Provider} from "react-redux";
import configureStore from 'redux-mock-store';
import Navbar from "./Navbar";
import {BrowserRouter as Router} from "react-router-dom";
import {useAuth0} from "../auth0/Auth0Wrapper";
import {ActionsProvider} from "../../context/ActionsContext";

const user = {
    email: "testuser@email.com",
    email_verified: true,
    sub: `random-oauth2-stringOfText`,
    nickname: 'Test User',
    app_metadata: {
        authorization: {
            roles: [],
            permissions: []
        }
    },
    roles: []
};

const mockStore = configureStore([]);

jest.mock('../auth0/Auth0Wrapper');
jest.mock('../../store/useActions');

describe('NavBar.js', () => {
    let store;
    let wrapper;

    beforeEach(() => {
        store = mockStore({
            user: {
                currentUser: user
            },
            admin: {
                isModerator: false
            }
        });
        useAuth0.mockReturnValue({
            isAuthenticated: false,
            user,
            logout: jest.fn(),
            loginWithRedirect: jest.fn()
        });
        const actions = {
            user: {
                setToken: jest.fn(),
                getUserFromAuth0: jest.fn(),
                getFavorites: jest.fn()
            },
            admin: {
                isAdmin: jest.fn(),
                isModerator: jest.fn(),
                fetchAdminGrants: jest.fn(),
                fetchAllUsers: jest.fn(),
                fetchAllRoles: jest.fn()
            }
        };
        wrapper = render(
            <Provider store={store}>
                <ActionsProvider value={actions}>
                    <Router>
                        <Navbar/>
                    </Router>
                </ActionsProvider>
            </Provider>
        )
    });
    it('should render without crashing', async () => {
        const logoText = wrapper.getByText(/Founder Grants/i);
        expect(logoText).toBeInTheDocument;
    })
});
describe('NavBar.js Authenticated', () => {
    let store;
    let wrapper;
    beforeEach(() => {
        store = mockStore({
            user: {
                currentUser: user,
                isLoading: false
            },
            admin: {
                isModerator: false
            }
        });
        useAuth0.mockReturnValue({
            isAuthenticated: true,
            user,
            getTokenSilently: jest.fn().mockImplementationOnce(() => 'Token'),
            logout: jest.fn(),
            loginWithRedirect: jest.fn()
        });
        const actions = {
            user: {
                setToken: jest.fn(),
                getUserFromAuth0: jest.fn(),
                getFavorites: jest.fn()
            },
            admin: {
                isAdmin: jest.fn(),
                isModerator: jest.fn(),
                fetchAdminGrants: jest.fn(),
                fetchAllUsers: jest.fn(),
                fetchAllRoles: jest.fn()
            }
        };
        wrapper = render(
            <Provider store={store}>
                <ActionsProvider value={actions}>
                    <Router>
                        <Navbar/>
                    </Router>
                </ActionsProvider>
            </Provider>
        )

    });
    it('should say welcome user', () => {
        const welcomeText = wrapper.getByText(/Welcome, Test User/i);
        expect(welcomeText).toBeInTheDocument;
    })
});

