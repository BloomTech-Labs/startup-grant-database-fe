import React from "react";
import { Grid, Typography, Card } from "@material-ui/core";
import { aboutStyles } from "../styles/aboutStyles";

export default () => {
  const classes = aboutStyles();
  return (
    <Card className={classes.aboutCardContainer}>
      <Card className={classes.aboutIntroCardContainer}>
        <Grid container justify="center" className={classes.aboutIntro}>
          <Grid item className={classes.aboutTopCard}>
            <Typography variant="body1">
              Founder Grants was built to solve one basic problem: connecting
              early stage founders with appropriate available resources to fund
              their inventions. It was developed by 1517 Fund in partnership
              with Lambda School students.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          justify="space-around"
          className={classes.aboutContainer}
        >
          <Grid item xs={3}>
            <Card className={classes.aboutCard}>
              <Typography variant="subtitle1">
                You can find out more about 1517 Fund here.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.aboutCard}>
              <Typography variant="subtitle1">
                You can find out more about Lambda School here.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.aboutCard}>
              <Typography variant="subtitle1">
                You can find out more about the student team and the project,
                including the open source code here.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Card>
    </Card>
  );
};
