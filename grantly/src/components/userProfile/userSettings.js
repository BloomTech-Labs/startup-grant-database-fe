import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import { UserSettingsForm } from "./UserSettingsForm.js";
import { UserData } from "./userData.js";
import { Container, Button } from "@material-ui/core";
import { ActionsContext } from "../../context/ActionsContext";
import { AuthForm } from "./AuthForm.js";

const UserSettings = () => {
  const actions = useContext(ActionsContext);
  const [isEditing, setIsEditing] = useState(false);
  const { token, currentUser } = useSelector(state => state.user);

  useEffect(() => {
    console.log(currentUser.email);
    actions.user.getUserFromPG(currentUser.email);
  });

  return (
    <React.Fragment>
      <Container maxWidth="lg">
        <AuthForm />
        <UserSettingsForm />
      </Container>
    </React.Fragment>
  );
};

export default UserSettings;
