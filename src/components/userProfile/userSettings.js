import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { UserSettingsForm } from "./UserSettingsForm.js";
import { UserData } from "./userData.js";
import { Paper, Button, Container, Grid } from "@material-ui/core";
import { ActionsContext } from "../../context/ActionsContext";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "../../hooks/useForm";

const useStyles = makeStyles(theme => ({
  button: {
    margin: "2em"
  },
  editBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  contain: {
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      padding: "2em",
      flexDirection: "column"
    }
  }
}));

const UserSettings = () => {
  const actions = useContext(ActionsContext);
  const { token, currentUser } = useSelector(state => state.user);
  const styles = useStyles();
  const [values, handleChange, handleSubmit] = useForm(
    currentUser.user_metadata,
    doSubmit
  );

  function doSubmit() {
    console.log(values);
    actions.user.updateUser(token, values);
  }

  return (
    <React.Fragment>
      <Container xs={12} className={styles.contain}>
        <Container maxWidth="sm">
          <UserData />
        </Container>
        <Container maxWidth="sm" className={styles.btnDiv}>
          <UserSettingsForm
            values={values}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            onClick={e => {
              handleSubmit(e);
            }}
          >
            Save Changes
          </Button>
        </Container>
      </Container>
    </React.Fragment>
  );
};

export default UserSettings;
