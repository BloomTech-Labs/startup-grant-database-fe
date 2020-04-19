//Array of values for the "Early Stage Funding" dropdown

const funding = [
  {
    value: true,
    label: "yes",
  },
  {
    value: false,
    label: "no",
  },
];

//Array of values for the "Geographic Region" dropdown

const geographicRegion = [
  {
    value: "North America",
    label: "North America",
  },
  {
    value: "Europe",
    label: "Europe",
  },
  {
    value: "South America",
    label: "South America",
  },
  {
    value: "Africa",
    label: "Africa",
  },
  {
    value: "Asia",
    label: "Asia",
  },
  {
    value: "Australia",
    label: "Australia",
  },
  {
    value: "Global",
    label: "Global",
  },
];

//Array of values for the "Target Demographic" dropdown

const targetDemographic = [
  {
    value: "N/A",
    label: "N/A",
  },
  {
    value: "Minority Founder",
    label: "Minority Team",
  },
  {
    value: "Women Founder",
    label: "Women Founder",
  },
  {
    value: "Disadvantaged Founder",
    label: "Disadvantaged Founder",
  },
  {
    value: "Veteran Founder",
    label: "Veteran Founder",
  },
  {
    value: "Other",
    label: "Other",
  },
];

const areaFocus = [
  {
    value: "Business",
    label: "Business",
  },
  {
    value: "Social",
    label: "Social",
  },
  {
    value: "Science",
    label: "Child Care",
  },
];

export const FocusFormData = [
  {
    label: "Sponsoring Entity",
    type: "text",
    name: "sponsoring_entity",
    data: [],
  },
  {
    label: "Grant Categories",
    name: "area_focus",
    select: true,
    data: areaFocus,
  },
];

//Data for the grant info form

export const InfoFieldData = [
  {
    label: "Grant Name",
    type: "text",
    name: "competition_name",
    multiline: false,
    data: [],
  },
  {
    label: "Website",
    type: "url",
    name: "website",
    placeholder: "https://foundergrants.com",
    multiline: false,
    data: [],
  },
  {
    label: "Amount",
    type: "number",
    name: "amount",
    multiline: false,
    data: [],
  },
  {
    label: "Amount Notes",
    type: "text",
    name: "amount_notes",
    rows: "3",
    variant: "outlined",
    multiline: true,
    data: [],
  },
];

export const DemoFormData = [
  {
    label: "Geographic Region",
    name: "geographic_region",
    select: true,
    data: geographicRegion,
  },
  {
    label: "Target Demographic",
    name: "target_entrepreneur_demographic",
    select: true,
    data: targetDemographic,
  },
  {
    label: "Application Due Date",
    name: "most_recent_application_due_date",
    type: "string",
    inputLabel: { shrink: true },
    sm: 6,
    data: [],
  },
  {
    label: "Early Stage Funding",
    name: "early_stage_funding",
    select: true,
    sm: 6,
    data: funding,
  },
  {
    label: "Description",
    type: "text",
    name: "notes",
    multiline: true,
    variant: "outlined",
    rows: "3",
    data: [],
  },
];
