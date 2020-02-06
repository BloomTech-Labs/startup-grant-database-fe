import React from "react";
import { Typography } from "@material-ui/core";
import { Link } from "react-redux";

export const SubmitConfirmation = () => {
  return (
    <Fragment>
      <Typography variant="h3">Thank you for your grant submission!</Typography>
      <Typography>
        Our site admins will look over your grant information to be approved
        before it’s posted on Founders Grant. Enter your email address to get
        updates and to know when your grant has been approved.
      </Typography>
      <Link to="/">Okay!</Link>
    </Fragment>
  );
};
