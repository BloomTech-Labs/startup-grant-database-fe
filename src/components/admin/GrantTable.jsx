import React, { useContext } from "react";
import { ActionsContext } from "../../context/ActionsContext";
import { useSelector } from "react-redux";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";

// Styling
import Paper from "@material-ui/core/Paper";
// Components
import { tableValues } from "./values/GrantTableValues";

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
  const { token } = useSelector(state => state.user);
  const { grants } = useSelector(state => state.admin);

  const style = grantTableStyles();

  return (
    <React.Fragment>
      <Paper className={style.paper}>
        <MaterialTable
          title={tableValues.title}
          columns={tableValues.columns}
          options={tableStyles}
          data={grants}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  let filteredData = Object.assign({}, newData);
                  actions.grants.postAdminGrant(filteredData, token);
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    let filteredData = Object.assign({}, newData);
                    console.log("Filter'd datar", token, filteredData.id, {
                      ...filteredData
                    });
                    actions.grants.updateAdminGrant(
                      token,
                      filteredData.id,
                      { ...filteredData }
                      // details_last_updated: moment().format("YYYY-MM-DD")
                    );
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    actions.grants.deleteAdminGrant(token, oldData.id);
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

export default GrantTable;
