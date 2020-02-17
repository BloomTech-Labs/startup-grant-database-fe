import React from "react";
import * as rtl from "@testing-library/react";
import { NavBar } from "./Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { Auth0Provider } from "../../components/auth0/Auth0Wrapper.jsx";

afterEach(rtl.cleanup);

const user = {
  email: "testuser@email.com",
  email_verified: true,
  sub: `google-oauth2|${process.env.TEST_KEY}`
};

jest.mock("../../components/auth0/Auth0Wrapper.jsx");

describe("<NavBar />", () => {
  beforeEach(() => {
    Auth0Provider.mockReturnValue({
      isAuthenticated: true,
      user,
      logout: jest.fn(),
      loginWithRedirect: jest.fn()
    });
  });

  it("should render NavBar", () => {
    rtl.render(
      <Router>
        <NavBar />
      </Router>
    );
  });

  //   it('should contain text "Grants"', () => {
  //     const { getByTestId } = rtl.render(
  //       <Router>
  //         <NavBar />
  //       </Router>
  //     );

  //     expect(getByTestId("main-nav")).toHaveTextContent(/grants/i);
  //   });
});
