import React from "react";
import * as rtl from "@testing-library/react";
import { NavBar } from "./Navbar";
import '@testing-library/jest-dom/extend-expect';
import { useAuth0 } from '../react-auth0-wrapper';

// test("sample test", () => {});

// test('it renders without crashing', () => {
//     const container = rtl.render(<NavBar  />)
// })

// const summer = require('./grants/index');

// unit testing

// describe("sum function", () => {
//   it("sums two integers", () => {
//     // Arrange - set up mock data
//     let expected = 3;
//     let a = 1;
//     let b = 2;

//     // Act - invokes the test with arranged params
//     let actual = summer.sum(a, b);

//     // Assert
//     expect(actual).toBe(expected);

//     // second assertion
//     expected = 5;
//     expect(summer.sum(2, 3)).toBe(expected);
//   });
// });

afterEach(rtl.cleanup);


describe('<NavBar/>', () => {
    it('should render NavBar', () => {
      const container = rtl.render(<NavBar 
        isAuthenticated={false}
        />);
      
      container.queryAllByText(/grants/i);
    });
  });
