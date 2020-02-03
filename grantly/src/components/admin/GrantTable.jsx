import React, {useContext, useEffect, useState} from 'react';

import { connect } from "react-redux";
// import {
  // fetchApi,
  // adminFetchApi,
  // postGrants,
  // putGrants,
  // deleteGrants,
  // deleteSuggestion
  // grants
// } from "../../store/useActions";
import moment from "moment";
import {ActionsContext} from "../../context/ActionsContext";
import {useSelector} from "react-redux";
import {useAuth0} from "../auth0/Auth0Wrapper";

// Styling
import MaterialTable from "material-table";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import grantTableStyles from "./styles/grantTableStyles";

// Components
import TableSuggestions from "./GrantRow";

const data = [
  {
    id: 21,
    competition_name: "string",
    area_focus: "string",
    sponsoring_entity: "string",
    website: "string",
    most_recent_application_due_date: "string",
    amount: 1000,
    amount_notes: "string",
    geographic_region: "string",
    target_entrepreneur_demographic: "string",
    notes: "string",
    early_stage_funding: 1,
    is_reviewed: 1,
    has_requests: 1,
    details_last_updated: "string",
  }
]

export const GrantTable = props => {
  // console.log("GrantTable props", props);
  const { isAuthenticated, user, loading } = useAuth0();

  const actions = useContext(ActionsContext);
  const {grants} = useSelector(state => state.grants);

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



    return (
      <Paper className={null}>
        <MaterialTable />
         
      </Paper>
    );
  }


const mapStateToProps = state => {
  return {
    error: state.error,
    isFetching: state.isFetching,
    data: state.filteredGrants,
    grantStore: state.data,
    savedFilters: state.filters,
    columns: state.columns
  };
};

export default connect(mapStateToProps, {
  // fetchApi,
  // adminFetchApi,
  // postGrants,
  // putGrants,
  // deleteGrants,
  // deleteSuggestion
  // fetchGrants
})(GrantTable);
