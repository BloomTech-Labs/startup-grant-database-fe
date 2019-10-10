import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { aboutStyles } from "../styles/aboutStyles";

export default () => {
  const classes = aboutStyles();
  return (
    <>
      <Grid container justify="center">
        <Grid item>
          <Typography variant="body1">Some basic intro stuff here</Typography>
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
        <Grid item className={classes.aboutCard}>
          <Typography variant="subtitle1" color="secondary">
            Reed James
          </Typography>
        </Grid>
        <Grid item className={classes.aboutCard}>
          <Typography variant="subtitle1" color="secondary">
            Michael Harris
          </Typography>
        </Grid>
        <Grid item className={classes.aboutCard}>
          <Typography variant="subtitle1" color="secondary">
            Yusuf Nafey
          </Typography>
        </Grid>
        <Grid item className={classes.aboutCard}>
          <Typography variant="subtitle1" color="secondary">
            Philip Johnson
          </Typography>
        </Grid>
        <Grid item className={classes.aboutCard}>
          <Typography variant="subtitle1" color="secondary">
            Rory Murray
          </Typography>
        </Grid>
        <Grid item className={classes.aboutCard}>
          <Typography variant="subtitle1" color="secondary">
            Chad Kidd
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
