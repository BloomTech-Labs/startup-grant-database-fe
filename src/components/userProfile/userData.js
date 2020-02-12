import React, { useContext, useEffect, useState, Fragment } from "react";
import { ActionsContext } from "../../context/ActionsContext";
import { useAuth0 } from "../auth0/Auth0Wrapper";
import { useSelector } from "react-redux";

import { Grid, Typography, Divider, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { logger } from "../../store/utils/logger";

const useStyles = makeStyles(theme => ({
  formContainer: {
    padding: "1em 8em 2em 8em",
    [theme.breakpoints.down("sm")]: {
      padding: "2em"
    }
  },
  layout: {
    [theme.breakpoints.down("sm")]: {
      padding: "4em 0"
    }
  },
  title: {
    paddingTop: "1.5em"
  },
  subtitle: {
    fontWeight: "600",
    paddingTop: "1.5em",
    paddingBottom: "0.5em"
  }
}));

const data = [
  {
    first_name: "Lorem",
    last_name: "Ipsum",
    role: "Pontifex",
    phone: "Ceasar",
    company: "SPQR",
    company_url: "https://SPQR.com",
    about: "Senate of Rome"
  }
];

export const UserData = props => {
  const actions = useContext(ActionsContext);
  const { token, currentUser, pgUser } = useSelector(state => state.user);
  const { isAuthenticated } = useAuth0();
  const styles = useStyles();
  const data = pgUser;
  logger("PG User", data);
  return (
    <React.Fragment>
      <Paper>
        <Typography variant="h5">Change Account Settings</Typography>
        <Typography variant="h6">Personal Details:</Typography>
        <Divider variant="middle" />
        <Grid container spacing={6} className={styles.formContainer}>
          <Fragment key={data.first_name}>
            <Grid xs={6}>
              <Typography className={styles.subtitle}>First Name:</Typography>
              <Typography>{data.first_name}</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography className={styles.subtitle}>Last Name:</Typography>
              <Typography>{data.last_name}</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography className={styles.subtitle}>Role:</Typography>
              <Typography>{data.role}</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography className={styles.subtitle}>Phone Number:</Typography>
              <Typography>{data.phone}</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography className={styles.subtitle}>
                Name of Project:
              </Typography>
              <Typography>{data.company}</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography className={styles.subtitle}>Project Link:</Typography>
              <Typography>{data.company_url}</Typography>{" "}
            </Grid>
            <Grid xs={6}>
              <Typography className={styles.subtitle}>
                About Project:
              </Typography>
              <Typography>{data.about}</Typography>
            </Grid>
          </Fragment>
        </Grid>
      </Paper>
    </React.Fragment>
  );
};
