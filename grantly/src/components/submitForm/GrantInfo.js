import React from "react";
import { Grid, Typography, TextField } from "@material-ui/core";

export default function GrantInfo() {
  return (
    <React.Fragment>
      <Typography variant="h5">Grant Info</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            // id="outlined-name"
            label="Competition Name"
            type="text"
            // className={styles.inputText}
            name="competition_name"
            placeholder="Competition Name"
            // value={grantInfo.competition_name}
            // onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Website"
            type="url"
            // className={styles.inputText}
            name="website"
            placeholder="Website"
            // value={grantInfo.website}
            // onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Type"
            type="text"
            // className={styles.inputText}
            name="type"
            placeholder="Type"
            // value={grantInfo.type}
            // onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Amount"
            type="number"
            // className={styles.inputText}
            name="amount"
            placeholder="Amount"
            // value={grantInfo.amount}
            // onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Amount Notes"
            type="text"
            // className={styles.notes}
            name="amount_notes"
            multiline
            fullWidth
            rows="3"
            placeholder="Amount Notes"
            // value={grantInfo.amount_notes}
            // onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
