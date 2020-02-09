import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { UserSettingsForm } from "./UserSettingsForm.js";
import { UserData } from "./userData.js";
import { Container, Button } from "@material-ui/core";
import { ActionsContext } from "../../context/ActionsContext";

const UserSettings = () => {
  const actions = useContext(ActionsContext);
  const [isEditing, setIsEditing] = useState(false);
  const { token, currentUser } = useSelector(state => state.user);

  useEffect(() => {
    console.log(currentUser.email);
    actions.user.getUserFromPG(currentUser.name);
  });

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        if (state.isEditing === "false") {<UserData />} else{" "}
        {<UserSettingsForm />}
        <Button variant="contained" color="secondary">
          Edit
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default UserSettings;
