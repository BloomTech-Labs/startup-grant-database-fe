// import { sum } from "./index";
// const summer = require("./GrantList");
const summer = require("./index");

// import React, { Component } from "react";
// import * as rtl from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import App from "./App";

// afterEach(rtl.cleanup);

// funcs
// const sum = (a, b) => a + b;

describe("sum function", () => {
  it("sums two integers", () => {
    // Arrange - set up mock data
    let expected = 3;
    let a = 1;
    let b = 2;

    // Act - invokes the test with arranged params
    let actual = summer.sum(a, b);

    // Assert
    expect(actual).toBe(expected);

    // second assertion
    expected = 5;
    expect(summer.sum(2, 3)).toBe(expected);
  });
});
