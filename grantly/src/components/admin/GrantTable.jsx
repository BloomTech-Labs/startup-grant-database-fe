import React, {useContext, useEffect, useState} from 'react';
import {ActionsContext} from "../../context/ActionsContext";
import {useSelector} from "react-redux";
import MaterialTable, {FilterRow} from "material-table";
import { makeStyles } from "@material-ui/core/styles";

// Styling
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
// Components
import {tableValues} from './values/GrantTableValues'
import {EditGrantFunctions} from './values/EditGrantFunctions'
import EditForm from './EditGrantForm'
import SuggestionForm from './SuggestionModal'

const grantTableStyles = makeStyles(theme => ({
  displayNone: {
    color: "#EF7B5C",
    fontSize: 40
  },
  paper: {
    margin: ".5em"
  },
  headerStyle: {
    fontFamily: "Nunito Sans",
    fontSize: "1em",
  },
}));

const tableStyles = {
  headerStyle: {
      fontFamily: "Nunito Sans",
      fontSize: "1em",
      color: "#3A3A3A",
      padding: "1em",
      fontWeight: 700,
      backgroundColor: "#83D7D1"
    }
}
 const GrantTable = props => {

  const actions = useContext(ActionsContext);
  const { token, isModerator } = useSelector(state => state.user);
  const { adminGrants } = useSelector(state => state.grants)

  const style = grantTableStyles();

    useEffect(() => {
      isModerator && actions.grants.fetchAdminGrants(token)

        } ,[isModerator])

    console.log("admin grants",adminGrants)

    return (
      <React.Fragment>
          <Paper className={style.paper}>
          <MaterialTable
                        title={tableValues.title}
                        columns={tableValues.columns}
                        options={tableStyles}
                        data={adminGrants}
                        editable={EditGrantFunctions}
                        zeroMinWidth
                    />
          </Paper>
      </React.Fragment>
     );
  }

  export default GrantTable
