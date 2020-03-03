import React from "react";
import SuggestionModal from "../SuggestionModal.jsx";

export const tableValues = {
    title: "Edit and Approve Grants",
    columns: [
        {
            title: "User Suggestions",
            cellStyle: {
                minWidth: "75px"
            },
            customSort: (a, b) => a.requests.length - b.requests.length,
            render: rowData => <SuggestionModal rowData={rowData}/>
        },
        {
            title: "Grant Status",
            cellStyle: cellData => ({
                backgroundColor: cellData === "Pending" ? "#3DB8B3" : "none"
            }),
            field: "is_reviewed",
            lookup: {
                true: "Approved",
                false: "Pending"
            }
        },
        {
            title: "Last Updated",
            field: "details_last_updated",
            type: "string",
            editable: "never"
        }, //sent to server in action. not editable by user
        {
            title: "Name",
            field: "competition_name",
            cellStyle: {
                minWidth: "200px"
            }
        },
        {title: "Amount", field: "amount", type: "integer"},
        {
            title: "Amount Notes",
            field: "amount_notes",
            cellStyle: {
                minWidth: "300px"
            }
        },
        {
            title: "Deadline",
            field: "most_recent_application_due_date",
            type: "string"
        },
        {
            title: "Focus Area",
            field: "area_focus",
            lookup: {
                Agriculture: "Agriculture",
                Arts: "Arts",
                "Child Care": "Child Care",
                "Communication Services": "Communication Services",
                "Consumer Discretionary": "Consumer Discretionary",
                "Consumer Staples": "Consumer Staples",
                "Economic Opportunity": "Economic Opportunity",
                "Energy & Resources": "Energy & Resources",
                Environment: "Environment",
                Financial: "Financial",
                Food: "Food",
                Industrials: "Industrials",
                "Information Technology": "Information Technology",
                Health: "Health",
                Housing: "Housing",
                "Life Improvement": "Life Improvement",
                Materials: "Materials",
                "Real Estate": "Real Estate",
                "Social Change": "Social Change",
                "Social Entrepreneurship": "Social Entrepreneurship",
                Utilities: "Utilities",
                "Workforce Development": "Workforce Development",
                Other: "Other",
                "N/A": "N/A"
            }
        },
        {title: "Sponsor", field: "sponsoring_entity"},
        {
            title: "Notes",
            field: "notes",
            cellStyle: {
                minWidth: "400px"
            }
            // editComponent: editComponentFunc
        },
        {title: "Website", field: "website"},
        {
            title: "Geographic Region",
            field: "geographic_region",
            lookup: {
                Global: "Global",
                "North America": "North America",
                Europe: "Europe",
                "South America": "South America",
                Africa: "Africa",
                Asia: "Asia",
                Australia: "Australia",
                Other: "Other",
                "N/A": "N/A"
            }
        },
        {
            title: "Target Demographic",
            field: "target_entrepreneur_demographic",
            lookup: {
                "Minority Business Enterprise": "Minority Business Enterprise",
                "Women Business Enterprise": "Women Business Enterprise",
                "Disadvantaged Business Enterprise":
                    "Disadvantaged Business Enterprise",
                "Veteran Business Enterprise": "Veteran Business Enterprise",
                Other: "Other",
                All: "All"
            }
        },
        {
            title: "Early Stage Funding",
            field: "early_stage_funding",
            lookup: {
                true: "Yes",
                false: "No"
            }
        }
    ]
};
