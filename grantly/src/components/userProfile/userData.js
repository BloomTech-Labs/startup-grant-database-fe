import React, { useContext, useEffect, useState } from "react";
import { ActionsContext } from "../../context/ActionsContext";
import { useAuth0 } from "../auth0/Auth0Wrapper";
import { useSelector } from "react-redux";
import { Paper, Typography, Divider } from "@material-ui/core";

export const UserData = props => {
  const actions = useContext(ActionsContext);
  const { token, currentUser } = useSelector(state => state.user);
  const { isAuthenticated } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && currentUser["https://founder-grants.com/appdata"]) {
      actions.grants.getUserFromPG(token);
    }
  }, [isAuthenticated]);

  console.log(currentUser);

  return (
    <React.Fragment>
      <Paper>
        <Typography>Personal Details:</Typography>
        <Divider variant="middle" />
        <p>{currentUser.nickname}</p>

        <Typography>Your Project:</Typography>
        <Divider variant="middle" />
      </Paper>
    </React.Fragment>
  );
};
