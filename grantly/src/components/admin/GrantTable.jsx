import React, { useContext, useEffect, useState } from "react";
import { ActionsContext } from "../../context/ActionsContext";
import { useSelector } from "react-redux";
import MaterialTable, { FilterRow } from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { useAuth0 } from "../auth0/Auth0Wrapper";

// Styling
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
// Components
import { tableValues } from "./values/GrantTableValues";
import { EditGrantFunctions } from "./values/EditGrantFunctions";
import EditForm from "./EditGrantForm";
import SuggestionForm from "./SuggestionModal";

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
    fontSize: "1em"
  }
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
};

const GrantTable = props => {
  const actions = useContext(ActionsContext);
  const { token, isModerator, currentUser } = useSelector(state => state.user);
  const { grants } = useSelector(state => state.grants);
  const { isAuthenticated } = useAuth0();

  const style = grantTableStyles();
  console.log("moderator?", isModerator);

  useEffect(() => {
    if (isAuthenticated && currentUser["https://founder-grants.com/appdata"]) {
      if (
        currentUser[
          "https://founder-grants.com/appdata"
        ].authorization.roles.find(() => "Moderator") === "Moderator"
      ) {
        actions.user.isModerator();
      }
    }
  }, [currentUser]);

  useEffect(() => {
    isModerator && actions.grants.fetchAdminGrants(token);
  }, [isModerator]);

  console.log("admin grants", grants);
  console.log("props", props);
  console.log(
    "whats going on with fetch grants?",
    actions.grants.fetchAdminGrants(token)
  );

  return (
    <React.Fragment>
      <Paper className={style.paper}>
        <MaterialTable
          title={tableValues.title}
          columns={tableValues.columns}
          options={tableStyles}
          data={grants}
          // editable={{
          //   onRowAdd: newData =>
          //     new Promise(resolve => {
          //       setTimeout(() => {
          //         resolve();
          //         let filteredData = Object.assign({}, newData);
          //         delete filteredData.requests;
          //         props.postGrants(filteredData, props.currentUser.token);
          //       }, 600);
          //     }),
          //   onRowUpdate: (newData, oldData) =>
          //     new Promise(resolve => {
          //       setTimeout(() => {
          //         resolve();
          //         if (oldData) {
          //           let filteredData = Object.assign({}, newData);
          //           delete filteredData.requests;
          //           props.putGrants(
          //             {
          //               ...filteredData,
          //               details_last_updated: moment().format("YYYY-MM-DD")
          //             },
          //             props.currentUser.token
          //           );
          //         }
          //       }, 600);
          //     }),
          //   onRowDelete: oldData =>
          //     new Promise(resolve => {
          //       setTimeout(() => {
          //         resolve();
          //         if (oldData) {
          //           delete oldData.requests;
          //           props.deleteGrants(oldData.id, props.currentUser.token);
          //         }
          //       }, 600);
          //     })
          // }}
          // zeroMinWidth
        />
      </Paper>
    </React.Fragment>
  );
};

export default GrantTable;
