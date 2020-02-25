import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { UserSettingsForm } from "./UserSettingsForm.js";
import { UserData } from "./userData.js";
import { Button, Container, Grid } from "@material-ui/core";
import { ActionsContext } from "../../context/ActionsContext";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "../../hooks/useForm";

const useStyles = makeStyles(theme => ({
  button: {
    margin: "2em"
  }
}));

const UserSettings = () => {
  const actions = useContext(ActionsContext);
  const [isEditing, setIsEditing] = useState(false);
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
      <Grid xs={12}>
        <Container maxWidth="sm">
          <UserData />
        </Container>
        <Container maxWidth="sm">
          {!isEditing && (
            <Button
              variant="contained"
              color="primary"
              className={styles.button}
              onClick={() => !isEditing && setIsEditing(true)}
            >
              Edit Details
            </Button>
          )}
          {isEditing && (
            <UserSettingsForm
              values={values}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          )}
        </Container>
      </Grid>
      {isEditing && (
        <>
          <Button
            variant="contained"
            color="primary"
            className={styles.button}
            onClick={e => {
              handleSubmit(e);
              setIsEditing(false);
            }}
          >
            Save Changes
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={styles.button}
            onClick={() => isEditing && setIsEditing(false)}
          >
            Cancel Edit
          </Button>
        </>
      )}
    </React.Fragment>
  );
};

export default UserSettings;
