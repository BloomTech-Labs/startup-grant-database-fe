import React, { useContext, useEffect, useState } from "react";
import { ActionsContext } from "../../context/ActionsContext";
import { useSelector } from "react-redux";

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
      <h1>Dad?</h1>
    </React.Fragment>
  );
};
