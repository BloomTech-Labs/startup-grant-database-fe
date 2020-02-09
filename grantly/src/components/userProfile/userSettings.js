import React, { useState } from "react";
import { UserSettingsForm } from "./UserSettingsForm.js";
import { UserData } from "./userData.js";
import { Container, Button } from "@material-ui/core";
import { AuthForm } from "./AuthForm.js";

const UserSettings = () => {
  const [isEditing, setIsEditing] = useState(false);
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
