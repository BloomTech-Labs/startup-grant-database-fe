import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { UserSettingsForm } from "./UserSettingsForm.js";
import { UserData } from "./userData.js";
import { Container, Button } from "@material-ui/core";
import { ActionsContext } from "../../context/ActionsContext";
import { makeStyles } from "@material-ui/core/styles";
import { AuthForm } from "./AuthForm.js";

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

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        {/* <AuthForm /> */}
        {/* <UserSettingsForm /> */}
        {!isEditing ? <UserData /> : <UserSettingsForm />}
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
          <>
            <Button
              variant="contained"
              color="primary"
              className={styles.button}
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
      </Container>
    </React.Fragment>
  );
};

export default UserSettings;
