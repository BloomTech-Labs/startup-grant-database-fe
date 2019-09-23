// import { sum } from "./index";
// const summer = require("./GrantList");

import React from "react";
import * as rtl from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
import { GrantList, addFieldGoal } from "./GrantList";
// import { addFieldGoal } from "./GrantList";
const summer = require("./index");

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

// integration testing
const mockData = {
  data: {
    amount: 15000,
    amount_notes:
      "$15,000 along with trip to compete in the live pitching finals at the Global Entrepreneurship Summit; grants and mentoring",
    area_focus: "Social Entrepreneurship",
    competition_name: "GIST Tech-I Competition",
    details_last_updated: "2017-08-23T00:00:00.000Z",
    domain_areas:
      "Environment, conservation, water, agriculture, energy, ICT, health",
    early_stage_funding: false,
    geographic_region: "Global",
    id: 1,
    most_recent_application_due_date: null,
    notes:
      "Idea can be an invention, product, service, app, or any combination, or something unique",
    sponsoring_entity: "Global Innovation Through Science and Technology",
    target_entrepreneur_demographic: null,
    type: "Competition",
    website: "http://www.gistnetwork.org/content/gist-tech-i"
  }
};

test("it renders without crashing", () => {
  const container = rtl.render(<GrantList data={mockData} />);
});

test("contains grants", () => {
  const container = rtl.render(<GrantList data={mockData} />);

  container.queryAllByText(/grants/i);
});

// test('props.data.length is truthy', () =? {
//   const container = rtl.render(<GrantList data={mockData} />);
//   container

// });

// test("addFieldGoal adds 3 to current score", () => {
//   expect(addFieldGoal(7)).toBe(10);
//   expect(addFieldGoal(0)).toBe(3);
// });
