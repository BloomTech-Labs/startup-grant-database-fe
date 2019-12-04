import React from "react";
import * as rtl from "@testing-library/react";
import { NavBar } from "./Navbar";
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { useAuth0 } from '../react-auth0-wrapper';
import { ExpansionPanelActions } from "@material-ui/core";


afterEach(rtl.cleanup);

const user = {
  email: 'testuser@email.com',
  email_verified: true,
  sub: `google-oauth2|${process.env.TEST_KEY}`
}

jest.mock('../react-auth0-wrapper');

describe('<NavBar />', () => {

    beforeEach(() => {
      useAuth0.mockReturnValue({
        isAuthenticated: true,
        user,
        logout: jest.fn(),
        loginWithRedirect: jest.fn()
      })
    })

    it('should render NavBar', () => {
      rtl.render(
        <Router>
          <NavBar />
        </Router>
      );
    });

    it('should contain text "Grants"', () => {
      const { getByTestId } = rtl.render(<Router><NavBar /></Router>);
      
      expect(getByTestId('main-nav')).toHaveTextContent(/grants/i);
    })
});
