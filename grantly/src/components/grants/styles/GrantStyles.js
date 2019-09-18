import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// vars
const cardDetailsMargin = "10px";

const grantStyles = makeStyles(theme => ({
  showcase: {
    position: "fixed",
    width: "50%"
  },
  grantCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    borderRadius: "10px",
    margin: "0.5rem"
  },
  grantName: {
    fontSize: "1rem"
  },
  deadline: {
    margin: cardDetailsMargin
  },
  amount: {
    margin: cardDetailsMargin
  },
  btn: {
    // border: "1px solid black",
    // background: "lightgrey"
    margin: "10px"
  },
  detailsWrapper: {
    display: "flex"
  }
}));

export default grantStyles;
