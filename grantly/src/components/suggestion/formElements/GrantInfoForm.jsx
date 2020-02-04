import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import formStyles from "../formElements/formStyles";
import { Grid, Typography, TextField, Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  bottomBox: {
    padding: theme.spacing(2, 6, 1, 6)
  }
}));

export const GrantInfoForm = props => {
  const styles = useStyles();
  return (
    <Fragment>
      <Typography variant="h5" className={null}>
        Grant Info
      </Typography>
      <Divider variant="middle" />
      <Grid container spacing={3} className={styles.bottomBox}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Grant Name"
            type="text"
            name="competition_name"
            placeholder="Grant Name"
            value={null}
            onChange={null}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Website"
            type="url"
            fullWidth
            name="website"
            placeholder="Website"
            value={null}
            onChange={null}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Amount"
            type="number"
            name="amount"
            fullWidth
            placeholder="Amount"
            value={null}
            onChange={null}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Amount Notes"
            type="text"
            name="amount_notes"
            multiline
            fullWidth
            rows="3"
            placeholder="Amount Notes"
            value={null}
            onChange={null}
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};
