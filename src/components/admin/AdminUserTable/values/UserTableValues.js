export const tableValues = {
    title: "Manage and observe users",
    columns: [
        {
            title: "Email",
            field: "email",
            cellStyle: {
                minWidth: "75px"
            },
            editable: "never"
        },
        {
            title: "Moderator",
            cellStyle: cellData => ({
                backgroundColor: cellData === "Pending" ? "#3DB8B3" : "none"
            }),
            field: "moderator",
            lookup: {
                true: "True",
                false: "False"
            }
        },

        {
            title: "First Name",
            field: "first_name",
            editable: "never"
        },
        {
            title: "Last Name",
            field: "last_name",
            editable: "never",
            cellStyle: {
                minWidth: "200px"
            }
        },
        {
            title: "Job Title",
            field: "role",

            editable: "never",
            cellStyle: {
                minWidth: "300px"
            }
        },
        {
            title: "Project Name",
            field: "company",
            editable: "never"
        },
        {
            title: "Project Website",
            field: "company_url",
            editable: "never"
        },
        {
            title: "What are they working on?",
            field: "about",
            cellStyle: {
                minWidth: "400px"
            },
            editable: "never"
        },
        {title: "Website", field: "website", editable: "never"}
    ]
};
