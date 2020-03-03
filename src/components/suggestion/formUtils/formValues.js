//Array of values for the "Early Stage Funding" dropdown

const funding = [
    {
        value: true,
        label: "yes"
    },
    {
        value: false,
        label: "no"
    }
];

//Array of values for the "Geographic Region" dropdown

const geographicRegion = [
    {
        value: "North America",
        label: "North America"
    },
    {
        value: "Europe",
        label: "Europe"
    },
    {
        value: "South America",
        label: "South America"
    },
    {
        value: "Africa",
        label: "Africa"
    },
    {
        value: "Asia",
        label: "Asia"
    },
    {
        value: "Australia",
        label: "Australia"
    },
    {
        value: "Global",
        label: "Global"
    },
    {
        value: "Other",
        label: "Other"
    },
    {
        value: "N/A",
        label: "N/A"
    }
];

//Array of values for the "Target Demographic" dropdown

const targetDemographic = [
    {
        value: "Minority Business Enterprise",
        label: "Minority Business Enterprise"
    },
    {
        value: "Women Business Enterprise",
        label: "Women Business Enterprise"
    },
    {
        value: "Disadvantaged Business Enterprise",
        label: "Disadvantaged Business Enterprise"
    },
    {
        value: "Veteran Business Enterprise",
        label: "Veteran Business Enterprise"
    },
    {
        value: "Other",
        label: "Other"
    },
    {
        value: "N/A",
        label: "N/A"
    }
];

const areaFocus = [
    {
        value: "Agriculture",
        label: "Agriculture"
    },
    {
        value: "Arts",
        label: "Arts"
    },
    {
        value: "Child Care",
        label: "Child Care"
    },
    {
        value: "Communication Services",
        label: "Communication Services"
    },
    {
        value: "Consumer Discretionary",
        label: "Consumer Discretionary"
    },
    {
        value: "Consumer Staples",
        label: "Consumer Staples"
    },
    {
        value: "Economic Opportunity",
        label: "Economic Opportunity"
    },
    {
        value: "Energy & Resources",
        label: "Energy & Resources"
    },
    {
        value: "Financial",
        label: "Financial"
    },
    {
        value: "Food",
        label: "Food"
    },
    {
        value: "Industrials",
        label: "Industrials"
    },
    {
        value: "Information Technology",
        label: "Information Technology"
    },
    {
        value: "Health",
        label: "Health"
    },
    {
        value: "Housing",
        label: "Housing"
    },
    {
        value: "Life Improvement",
        label: "Life Improvement"
    },
    {
        value: "Materials",
        label: "Materials"
    },
    {
        value: "Real Estate",
        label: "Real Estate"
    },
    {
        value: "Social Change",
        label: "Social Change"
    },
    {
        value: "Social Entrepreneurship",
        label: "Social Entrepreneurship"
    },
    {
        value: "Utilities",
        label: "Utilities"
    },
    {
        value: "Workforce Development",
        label: "Workforce Development"
    },
    {
        value: "Other",
        label: "Other"
    },
    {
        value: "N/A",
        label: "N/A"
    }
];

export const FocusFormData = [
    {
        label: "Sponsoring Entity",
        type: "text",
        name: "sponsoring_entity",
        data: []
    },
    {
        label: "Grant Categories",
        name: "area_focus",
        select: true,
        data: areaFocus
    }
];

//Data for the grant info form

export const InfoFieldData = [
    {
        label: "Grant Name",
        type: "text",
        name: "competition_name",
        multiline: false,
        data: []
    },
    {
        label: "Website",
        type: "url",
        name: "website",
        placeholder: "https://foundergrants.com",
        multiline: false,
        data: []
    },
    {
        label: "Amount",
        type: "number",
        name: "amount",
        multiline: false,
        data: []
    },
    {
        label: "Amount Notes",
        type: "text",
        name: "amount_notes",
        rows: "3",
        variant: "outlined",
        multiline: true,
        data: []
    }
];

export const DemoFormData = [
    {
        label: "Geographic Region",
        name: "geographic_region",
        select: true,
        data: geographicRegion
    },
    {
        label: "Target Demographic",
        name: "target_entrepreneur_demographic",
        select: true,
        data: targetDemographic
    },
    {
        label: "Application Due Date",
        name: "most_recent_application_due_date",
        type: "string",
        inputLabel: {shrink: true},
        sm: 6,
        data: []
    },
    {
        label: "Early Stage Funding",
        name: "early_stage_funding",
        select: true,
        sm: 6,
        data: funding
    },
    {
        label: "Description",
        type: "text",
        name: "notes",
        multiline: true,
        variant: "outlined",
        rows: "3",
        data: []
    }
];
