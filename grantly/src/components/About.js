import React from "react";
import { Grid, Typography } from "@material-ui/core";

export default () => {
  return (
    <Grid container style={{ border: "1px solid red" }}>
      <Grid item style={{ border: "1px solid red" }}>
        <Typography variant="subtitle1" color="secondary">
          You found your way here
        </Typography>
      </Grid>
    </Grid>
  );
};
