import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import Typography from "@material-ui/core/Typography";
import { useAuth0 } from "../../react-auth0-wrapper";
import { fetchApi, adminFetchApi } from "../../actions";
import moment from 'moment';

export const GrantTable = (props) => {
  console.log('GrantTable props',props)
  // console.log('GrantTable current user',props.currentUser)
  // console.log('adminprops', props.inAdmin);

  props.data.forEach(grant => {
    grant.most_recent_application_due_date = 
      moment(grant.most_recent_application_due_date).format(
        "YYYY-MM-DD"
      ) === "Invalid date"
        ? undefined
        : moment(grant.most_recent_application_due_date).format(
            "YYYY-MM-DD"
      )
  })

  const [state, setState] = useState({
    columns: [
      { title: "Name", field: "competition_name" },
      { title: "Amount", field: "amount", type: "numeric" },
      { title: "Suggestions", field: "has_requests", lookup: {
        "Approve": "Approve",
        "Deny": "Deny"
      } },
      { title: "Deadline", field: "most_recent_application_due_date", type: "date" },
      // {
      //   title: "Grant Categories",
      //   field: "domain_areas",
      //   lookup: { "Environment": "Environment", 63: "Economic Opportunity" }
      // },
      {
        title: "Focus Area",
        field: "area_focus",
        lookup: { 
          "Arts": "Arts", 
          "Child Care": "Child Care", 
          "Economic Opportunity": "Economic Opportunity", 
          "Energy & Resources": "Energy & Resources",
          "Environment": "Environment",
          "Financial": "Financial", 
          "Food": "Food", 
          "Health": "Health", 
          "Housing": "Housing", 
          "Information Technology": "Information Technology", 
          "Life Improvement": "Life Improvement", 
          "Social Entrepreneurship": "Social Entrepreneurship", 
          "Workforce Development": "Workforce Development" }
      },
      { title: "Sponsor", field: "sponsoring_entity" },
      { title: "Notes", field: "notes" },
      { title: "Website", field: "website"}
    ]
  });

  // const [hasCurrentUser, setHasCurrentUser] = useState({});

  // useEffect(() => {
  //   if (props.inAdmin) {
  //     console.log("what?", props.inAdmin);
  //     console.log("yes");
  //     props.adminFetchApi(props.currentUser);
  //   } else if (props.data.length === 0) {
  //     console.log('elseif');
  //     props.fetchApi();
  //   } else  {
  //     // props.fetchApi();
  //   }
  // }, []);

  console.log("Current user from reducer", props.currentUser);

  useEffect(() => {

      if (props.currentUser.id) {
        props.adminFetchApi(props.currentUser);
      }

  }, [props.currentUser]);

  // TODO: display a count of items needing to be reviewed
  // const needToBeReviewed = props.data.filter(
  //   grant => grant.is_reviewed === false
  // ).length;

  return (
    <div>
      <MaterialTable
        title="Editable Example"
        columns={state.columns}
        data={props.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              }, 600);
            })
        }}
        zeroMinWidth
      />
    </div>
  );
}

const mapStateToProps = state => {
  // console.log("GrantList mapStateToProps state", state);
  return {
    error: state.error,
    isFetching: state.isFetching,
    data: state.filteredGrants,
    grantStore: state.data,
    currentUser: state.currentUser,
    savedFilters: state.filters
  };
};

export default connect(
  mapStateToProps,
  { fetchApi, adminFetchApi }
)(GrantTable);
