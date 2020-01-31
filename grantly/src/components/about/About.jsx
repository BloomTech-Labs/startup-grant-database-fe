import React from "react";
import { Grid, Typography, Card } from "@material-ui/core";
import { aboutStyles } from "./aboutStyles";

export default () => {
  const classes = aboutStyles();
  return (
    <main className={classes.layout}>
      <Card className={classes.aboutCardContainer}>
        <Card className={classes.aboutIntroCardContainer}>
          <Grid container justify="center" className={classes.aboutIntro}>
            <Grid item className={classes.aboutTopCard}>
              <Typography variant="h5">
                Founder Grants was built to solve one basic problem: connecting
                early stage founders with appropriate available resources to
                fund their inventions. It was developed by 1517 Fund in
                partnership with Lambda School students.
              </Typography>
            </Grid>
          </Grid>

          <Grid
            container
            justify="space-around"
            className={classes.aboutContainer}
          >
            <Grid item md={3} xs={12}>
              <a href="https://www.1517fund.com/">
                <Card className={classes.aboutCard}>
                  <Typography variant="subtitle1">
                    You can find out more about 1517 Fund here.
                  </Typography>
                </Card>
              </a>
            </Grid>

            <Grid item md={3} xs={12}>
              <a href="https://lambdaschool.com/">
                <Card className={classes.aboutCard}>
                  <Typography variant="subtitle1">
                    You can find out more about Lambda School here.
                  </Typography>
                </Card>
              </a>
            </Grid>

            <Grid item md={3} xs={12}>
              <a href="https://github.com/Lambda-School-Labs/startup-grant-database-fe">
                <Card className={classes.aboutCard}>
                  <Typography variant="subtitle1">
                    You can find out more about the student team and the
                    project, including the open source code here.
                  </Typography>
                </Card>
              </a>
            </Grid>
          </Grid>
        </Card>
      </Card>
    </main>
  );
};