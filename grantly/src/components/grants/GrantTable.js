import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchApi,
  adminFetchApi,
  postGrants,
  putGrants,
  deleteGrants,
  deleteSuggestion
} from "../../actions";
import moment from "moment";

// Styling
import MaterialTable from "material-table";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import grantTableStyles from "../../styles/grantTableStyles";

// Components
import Suggestions from "./Suggestions.js";

export const GrantTable = props => {
  console.log("GrantTable props", props);

  // reformat deadline and last updated dates
  props.data.forEach(grant => {
    grant.most_recent_application_due_date =
      moment(grant.most_recent_application_due_date).format("MMM DD, YYYY") ===
      "Invalid date"
        ? undefined
        : moment(grant.most_recent_application_due_date).format("MMM DD, YYYY");
    grant.details_last_updated =
      moment(grant.details_last_updated).format("L LT") === "Invalid date"
        ? undefined
        : moment(grant.details_last_updated).format("L LT");
  });

  const [state, setState] = useState({
    // This array is currently needed in order for state to save onRowUpdate
    data: []
  });

  useEffect(() => {
    if (props.currentUser.id) {
      props.adminFetchApi(props.currentUser);
    }
  }, [props.currentUser]);

  const editComponentFunc = props => {
    console.log("edit props", props);
    return (
      <TextField
        id="standard basic"
        style={{
          minWidth: "400px",
          fontFamily: "EB Garamond"
        }}
        multiline
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
      />
    );
  };

  const style = grantTableStyles();

  return (
    <Paper className={style.paper}>
      <MaterialTable
        title="Edit and Approve Grants"
        // title={() => (
        //   <h2>Edit and Approve Grants</h2>
        // )}
        columns={[
          {
            title: "User Suggestions",
            cellStyle: {
              minWidth: "75px"
            },
            customSort: (a, b) => a.requests.length - b.requests.length,
            render: rowData => <Suggestions rowData={rowData} />
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
            type: "date",
            editable: "never"
          }, //sent to server in action. not editable by user
          {
            title: "Name",
            field: "competition_name",
            cellStyle: {
              minWidth: "200px"
            }
          },
          { title: "Amount", field: "amount", type: "integer" },
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
            type: "date"
          },
          {
            title: "Focus Area",
            field: "area_focus",
            lookup: {
              "Agriculture": "Agriculture",
              "Arts": "Arts",
              "Child Care": "Child Care",
              "Communication Services": "Communication Services",
              "Consumer Discretionary": "Consumer Discretionary",
              "Consumer Staples": "Consumer Staples",
              "Economic Opportunity": "Economic Opportunity",
              "Energy & Resources": "Energy & Resources",
              "Environment": "Environment",
              "Financial": "Financial",
              "Food": "Food",
              "Industrials": "Industrials",
              "Information Technology": "Information Technology",
              "Health": "Health",
              "Housing": "Housing",
              "Life Improvement": "Life Improvement",
              "Materials": "Materials",
              "Real Estate": "Real Estate",
              "Social Change": "Social Change",
              "Social Entrepreneurship": "Social Entrepreneurship",
              "Utilities": "Utilities",
              "Workforce Development": "Workforce Development",
              "Other": "Other",
              "N/A": "N/A"
            }
          },
          { title: "Sponsor", field: "sponsoring_entity" },
          {
            title: "Notes",
            field: "notes",
            cellStyle: {
              minWidth: "400px"
            },
            editComponent: editComponentFunc
          },
          { title: "Website", field: "website" },
          {
            title: "Geographic Region",
            field: "geographic_region",
            lookup: {
              "Global": "Global",
              "North America": "North America",
              "Europe": "Europe",
              "South America": "South America",
              "Africa": "Africa",
              "Asia": "Asia",
              "Australia": "Australia",
              "Other": "Other",
              "N/A": "N/A"
            }
          },
          {
            title: "Target Demographic",
            field: "target_entrepreneur_demographic",
            lookup: {
              "Minority Business Enterprise": "Minority Business Enterprise",
              "Women Business Enterprise": "Women Business Enterprise",
              "Disadvantaged Business Enterprise": "Disadvantaged Business Enterprise",
              "Veteran Business Enterprise": "Veteran Business Enterprise",
              "Other": "Other",
              "All": "All"
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
        ]}
        data={props.data}
        options={{
          headerStyle: {
            fontFamily: "Nunito Sans",
            fontSize: "1em",
            color: "#3A3A3A",
            // letterSpacing: "0.025em",
            fontWeight: 700,
            backgroundColor: "#83D7D1"
          }
        }}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                let filteredData = Object.assign({}, newData);
                delete filteredData.requests;
                props.postGrants(filteredData);
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  let filteredData = Object.assign({}, newData);
                  delete filteredData.requests;
                  props.putGrants(
                    {
                      ...filteredData,
                      details_last_updated: moment().format("YYYY-MM-DD")
                    },
                    props.currentUser
                  );
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  delete oldData.requests;
                  props.deleteGrants(oldData.id, props.currentUser);
                }
              }, 600);
            })
        }}
        zeroMinWidth
      />
    </Paper>
  );
};

const mapStateToProps = state => {
  return {
    error: state.error,
    isFetching: state.isFetching,
    data: state.filteredGrants,
    grantStore: state.data,
    currentUser: state.currentUser,
    savedFilters: state.filters,
    columns: state.columns
  };
};

export default connect(mapStateToProps, {
  fetchApi,
  adminFetchApi,
  postGrants,
  putGrants,
  deleteGrants,
  deleteSuggestion
})(GrantTable);
