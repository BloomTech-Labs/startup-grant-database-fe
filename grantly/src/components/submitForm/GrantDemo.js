import React from "react";
import { Grid, Typography, TextField, MenuItem } from "@material-ui/core";

const funding = [
  {
    value: true,
    label: "yes"
  },
  {
    value: false,
    label: "no"
  }
];

export default function GrantDemo() {
  return (
    <React.Fragment>
      <Typography variant="h5">Grant Demo</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Geographic Region"
            type="text"
            // className={styles.inputText}
            name="geographic_region"
            placeholder="Geographic Region"
            // value={grantInfo.geographic_region}
            // onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Target Demographic"
            // type="text"
            // className={styles.inputText}
            name="target_entrepreneur_demographic"
            placeholder="Target Entrepreneur Demographic"
            // value={grantInfo.target_entrepreneur_demographic}
            // onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            // label="Application Due Date"
            type="date"
            // className={styles.inputText}
            name="most_recent_application_due_date"
            // placeholder="Application Due Date"
            // value={grantInfo.most_recent_application_due_date}
            // onChange={handleChanges}
            helperText="Application Due Date"
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Early Stage Funding"
            select
            // className={(styles.inputText, styles.dropDown)}
            name="early_stage_funding"
            placeholder="Early Stage Funding"
            // value={grantInfo.early_stage_funding}
            // onChange={handleChanges}
            margin="normal"
            variant="outlined"
          >
            {funding.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Notes"
            // type="text"
            // className={styles.notes}
            name="notes"
            multiline
            fullWidth
            rows="3"
            placeholder="Notes"
            // value={grantInfo.notes}
            // onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
