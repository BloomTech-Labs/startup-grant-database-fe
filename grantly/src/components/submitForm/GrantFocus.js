import React from "react";
import { Grid, Typography, TextField } from "@material-ui/core";

export default function GrantFocus() {
  return (
    <React.Fragment>
      <Typography variant="h5">Grant Focus</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Sponsoring Entity"
            type="text"
            // className={styles.inputText}
            name="sponsoring_entity"
            placeholder="Sponsoring Entity"
            // value={grantInfo.sponsoring_entity}
            // onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Domain Areas"
            type="text"
            // className={styles.inputText}
            name="domain_areas"
            placeholder="Domain Areas"
            // value={grantInfo.domain_areas}
            // onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Area Focus"
            type="text"
            // className={styles.inputText}
            name="area_focus"
            placeholder="Area Focus"
            // value={grantInfo.area_focus}
            // onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
