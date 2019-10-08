import React from "react";
import * as rtl from "@testing-library/react";
import { GrantShowcase } from "./GrantShowcase";

// integration testing
const grant = {
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
};

test("it renders without crashing", () => {
  const container = rtl.render(<GrantShowcase grant={grant} />);
});

test("Explanation header", () => {
  const container = rtl.render(<GrantShowcase grant={grant} />);

  container.queryAllByText(/What it is:/i);
});

test("Deadline header", () => {
  const container = rtl.render(<GrantShowcase grant={grant} />);

  container.queryAllByText(/Deadline/i);
});

test("Domain areas header", () => {
  const container = rtl.render(<GrantShowcase grant={grant} />);

  container.queryAllByText(/This grant is in the areas of:/i);
});

test("Focus area header", () => {
  const container = rtl.render(<GrantShowcase grant={grant} />);

  container.queryAllByText(/Focus Area:/i);
});

test("Region header", () => {
  const container = rtl.render(<GrantShowcase grant={grant} />);

  container.queryAllByText(/Region/i);
});

test("Sponsored by header", () => {
  const container = rtl.render(<GrantShowcase grant={grant} />);

  container.queryAllByText(/Sponsored by:/i);
});

test("Notes header", () => {
  const container = rtl.render(<GrantShowcase grant={grant} />);

  container.queryAllByText(/Notes: /i);
});

// describe("sum function", () => {
//   it("sums two integers", () => {});
// });
