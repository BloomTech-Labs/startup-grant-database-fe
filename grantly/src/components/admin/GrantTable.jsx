import React, {useContext, useEffect} from 'react';

import { connect } from "react-redux";
import moment from "moment";
import {ActionsContext} from "../../context/ActionsContext";
import {useSelector} from "react-redux";
import {useAuth0} from "../auth0/Auth0Wrapper";

// Styling
import MaterialTable from "material-table";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import tableValues from "./styles/grantTableStyles";

// Components
import TableSuggestions from "./TableSuggestions";
import {GrantTableContent} from './values/GrantTableValues'

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

 const GrantTable = props => {

  const { isAuthenticated, user, loading } = useAuth0();
  const actions = useContext(ActionsContext);

 
  useEffect(() => {
    actions.grants.fetchGrants();
  })
  // setTableValues(useValues())
  console.log(tableValues)
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



          <Paper>
              <GrantTableContent />     
          </Paper>
      </React.Fragment>
     );
  }

  export default GrantTable