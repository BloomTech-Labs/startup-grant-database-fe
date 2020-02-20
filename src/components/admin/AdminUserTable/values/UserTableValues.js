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
      editable: "never",
      title: "Job Title",
      field: "amount_notes",
      cellStyle: {
        minWidth: "300px"
      }
    },
    {
      editable: "never",
      title: "Project Name",
      field: "company"
    },
    {
      editable: "never",
      title: "Project Website",
      field: "company_url"
    },
    {
      editable: "never",
      title: "What are they working on?",
      field: "about",
      cellStyle: {
        minWidth: "400px"
      }
      // editComponent: editComponentFunc
    },
    { title: "Website", field: "website", editable: "never" }
  ]
};
