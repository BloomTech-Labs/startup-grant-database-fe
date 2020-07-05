import { FilterFormState } from "../../store/filters/filterTypes";

export const filterFormState: FilterFormState = {
  amount: [
    {
      key: "$0-$100,000",
      checked: false,
      values: {
        min: null,
        max: 100000,
      },
    },
    {
      key: "$100,000+",
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
  area_focus: [
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
