import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { aboutStyles } from "../styles/aboutStyles";

export default () => {
  const classes = aboutStyles();
  return (
    <>
      <Grid container justify="center" className={classes.aboutIntro}>
        <Grid item>
          <Typography variant="body1">
            Founder Grants was built to solve one basic problem: connecting
            early stage founders with appropriate available resources to fund
            their inventions.
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="space-around" className={classes.aboutContainer}>
        <Grid item className={classes.aboutCard}>
          <Typography variant="subtitle1" color="secondary">
            Imani Russ
          </Typography>
        </Grid>
        <Grid item className={classes.aboutCard}>
          <Typography variant="subtitle1" color="secondary">
            Zabdiel Rosario
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
