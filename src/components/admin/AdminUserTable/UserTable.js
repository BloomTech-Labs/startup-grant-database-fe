import React, { useContext, useEffect, useState } from "react";
import { ActionsContext } from "../../../context/ActionsContext";
import { useSelector } from "react-redux";
import MaterialTable, { FilterRow } from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import { useAuth0 } from "../../auth0/Auth0Wrapper";
import { Paper, Button } from "@material-ui/core";
import { tableValues } from "./values/UserTableValues";
import { EmailFormSingle } from "../EmailFormSingle";

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
  const [emailType, setEmailType] = useState("");
  const style = userTableStyles();

  const manipulateUserData = data => {
    console.log(data);
    let newData = [];
    data.map(data => {
      newData.push({
        email: data.email,
        moderator:
          data.roles.filter(role => role.name === "Moderator").length > 0,
        first_name: data.user_metadata ? data.user_metadata.first_name : null,
        last_name: data.user_metadata ? data.user_metadata.last_name : null,
        role: data.user_metadata ? data.user_metadata.role : null,
        company: data.user_metadata ? data.user_metadata.company : null,
        company_url: data.user_metadata ? data.user_metadata.company_url : null,
        about: data.user_metadata ? data.user_metadata.about : null
      });
    });
    console.log("newData", newData);
    return newData;
  };

  return (
    <React.Fragment>
      <Paper className={style.paper}>
        <MaterialTable
          title={tableValues.title}
          columns={tableValues.columns}
          options={tableStyles}
          data={manipulateUserData(users)}
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
                setTimeout(() => {
                  resolve();
                  console.log("data types", oldData, newData);
                  if (oldData) {
                    if (newData.moderator !== "false") {
                      actions.admin.updateModerator(
                        token,
                        newData.user_id,
                        roleId
                      );
                    } else {
                      actions.admin.removeModerator(
                        token,
                        newData.user_id,
                        roleId
                      );
                    }
                  }
                }, 600);
              })
          }}
          zeroMinWidth
        />
      </Paper>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setEmailType("one")}
      >
        Email Individual
      </Button>
      {emailType === "one" && <EmailFormSingle />}
    </React.Fragment>
  );
};

export default UserTable;
