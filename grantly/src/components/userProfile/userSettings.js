import React, { useState } from "react";
import { UserSettingsForm } from "./UserSettingsForm.js";
import { UserData } from "./userData.js";
import { Container, Button } from "@material-ui/core";
const UserSettings = () => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <React.Fragment>
      <Container maxWidth="lg">
        if (state.isEditing === "false") {<UserData />} else{" "}
        {<UserSettingsForm />}
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </Container>
    </React.Fragment>
  );
};

export default UserSettings;
