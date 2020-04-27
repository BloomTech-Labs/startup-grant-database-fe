import { FilterFormState } from "../../store/filters/filterTypes";

export const filterFormState: FilterFormState = {
  amount: [
    {
      key: "Seed ($0-$100,000)",
      checked: false,
      values: {
        min: null,
        max: 100000,
      },
    },
    {
      key: "Venture (>$100,000)",
      checked: false,
      values: {
        min: 100000,
        max: null,
      },
    },
  ],
  geographic_region: [
    {
      key: "Global",
      checked: false,
    },
    {
      key: "North America",
      checked: false,
    },
    {
      key: "Europe",
      checked: false,
    },
    {
      key: "South America",
      checked: false,
    },
    {
      key: "Africa",
      checked: false,
    },
    {
      key: "Asia",
      checked: false,
    },
    {
      key: "Australia",
      checked: false,
    },
  ],
  domain_areas: [
    {
      key: "Business",
      checked: false,
    },
    {
      key: "Science",
      checked: false,
    },
    {
      key: "Social",
      checked: false,
    },
  ],
};
