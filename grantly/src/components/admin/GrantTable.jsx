import React, { useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { connect } from "react-redux";
import moment from "moment";
import { ActionsContext } from "../../context/ActionsContext";
import { useSelector } from "react-redux";
import { useAuth0 } from "../auth0/Auth0Wrapper";

// Styling
import MaterialTable from "material-table";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
// Components
import TableRow from "./TableRow";
import { GrantTableContent } from "./GrantTableContent.jsx";
import { StylesProvider } from "@material-ui/core";
// import { tableValues } from "./values/GrantTableValues.jsx";

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
    details_last_updated: "string"
  }
];

const styles = makeStyles(theme => ({
  paper: {
    // width: '100%',
    margin: ".5em"
  }
}));

const GrantTable = props => {
  const actions = useContext(ActionsContext);

  useEffect(() => {
    actions.grants.fetchGrants();
  }, []);

  // setTableValues(useValues())
  return (
    // edit
    <React.Fragment>
      <TextField
        id="standard basic"
        style={{
          minWidth: "400px",
          fontFamily: "EB Garamond"
        }}
        multiline
        //  value={props.value}
        //  onChange={e => props.onChange(e.target.value)}
      />

      <Paper className={styles.paper}>{/* <GrantTableContent /> */}</Paper>
    </React.Fragment>
  );
};

export default GrantTable;
