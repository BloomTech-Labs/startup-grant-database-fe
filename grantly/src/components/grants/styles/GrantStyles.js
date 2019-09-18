import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const grantStyles = makeStyles(theme => ({
  showcase: {
    position: "fixed",
    width: "50%"
  },
  grantCard: {
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    borderRadius: "10px",
    margin: "0.5rem"
  }
}));

export default grantStyles;
