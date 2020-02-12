import React from "react";
import * as rtl from "@testing-library/react";
import GrantShowcase from "./GrantShowcase.jsx";

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
  const container = rtl.render(<GrantShowcase showcase={grant} />);
});
