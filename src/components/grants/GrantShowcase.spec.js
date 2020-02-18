import React from "react";
import * as rtl from "@testing-library/react";
import GrantShowcase from "./GrantShowcase.jsx";
import { Provider } from "react-redux";
import store from "../../store/index.ts";
const grant = {
  competition_name: "GIST Tech-I Competition",
  area_focus: "Social Entrepreneurship",
  sponsoring_entity: "Global Innovation Through Science and Technology",
  website: "http://www.gistnetwork.org/content/gist-tech-i",
  most_recent_application_due_date: null,
  amount: 15000,
  amount_notes:
    "$15,000 along with trip to compete in the live pitching finals at the Global Entrepreneurship Summit; grants and mentoring",
  geographic_region: "Global",
  target_entrepreneur_demographic: null,
  notes:
    "Idea can be an invention, product, service, app, or any combination, or something unique",
  early_stage_funding: false,
  is_reviewed: false,
  has_requests: true,
  details_last_updated: "8/23/2017"
};

const renderComponent = () =>
  rtl.render(
    <Provider store={store}>
      <GrantShowcase showcase={grant} />
    </Provider>
  );

describe("Grant showcase", () => {
  it("renders without crashing", () => {
    renderComponent();
  });
  it("renders 'Amount' header", () => {
    const container = renderComponent();

    container.queryAllByText(/Amount/i);
  });
  it("renders 'Deadline' header", () => {
    const container = renderComponent();

    container.queryAllByText(/Deadline/i);
  });
  it("renders Select Button", () => {
    const container = renderComponent();

    container.queryAllByText(/Select/i);
  });
});
