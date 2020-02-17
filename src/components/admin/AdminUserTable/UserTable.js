import React, { useContext, useEffect, useState } from "react";
import { ActionsContext } from "../../../context/ActionsContext";
import { useSelector } from "react-redux";
import MaterialTable, { FilterRow } from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { useAuth0 } from "../../auth0/Auth0Wrapper";
import { Paper } from "@material-ui/core";
import { tableValues } from "./values/UserTableValues";

const userTableStyles = makeStyles(theme => ({
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

const UserTable = props => {
  const actions = useContext(ActionsContext);
  const { token, isModerator, currentUser } = useSelector(state => state.user);
  const { isAuthenticated } = useAuth0();
  const { users } = useSelector(state => state.admin);
  const roleId = useSelector(
    state => state.admin.roles.filter(role => role.name === "Moderator")[0].id
  );

  // useEffect(() => {
  //   if (isAuthenticated && currentUser["https://founder-grants.com/appdata"]) {
  //     if (
  //       currentUser[
  //         "https://founder-grants.com/appdata"
  //       ].authorization.roles.find(() => "Moderator") === "Moderator"
  //     ) {
  //       actions.admin.isModerator();
  //     }
  //   }
  // }, [currentUser]);

  const style = userTableStyles();

  // useEffect(() => {
  //   isModerator && actions.user.fetchAllUsers(token);
  // }, [isModerator]);
  console.log("roleId", roleId);
  return (
    <React.Fragment>
      <Paper className={style.paper}>
        <MaterialTable
          title={tableValues.title}
          columns={tableValues.columns}
          options={tableStyles}
          data={users}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  let filteredData = Object.assign({}, newData);
                  delete filteredData.requests;
                  actions.postAdminGrant(filteredData, token);
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                console.log("oldData", oldData);

                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    actions.admin.updateModerator(
                      token,
                      newData.user_id,
                      roleId
                    );
                  }
                }, 600);
              })
          }}
          zeroMinWidth
        />
      </Paper>
    </React.Fragment>
  );
};

export default UserTable;
