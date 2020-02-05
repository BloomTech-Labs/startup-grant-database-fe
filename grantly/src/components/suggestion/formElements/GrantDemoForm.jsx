import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
// import { useGetToken } from "../../auth0/useGetToken.jsx";
import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  Divider
} from "@material-ui/core";
import {
  geographicRegion,
  targetDemographic,
  funding
} from "../formUtils/formValues.js";
import formStyles from "../formElements/formStyles";

const useStyles = makeStyles(theme => ({
  bottomBox: {
    padding: theme.spacing(2, 6, 1, 6)
  }
}));

export const GrantDemoForm = props => {
  const styles = useStyles();
  // const [token] = useGetToken();

  return (
    <Fragment>
      <Typography variant="h5">Grant Demographics</Typography>
      <Divider variant="middle" />
      <Grid container spacing={3} className={styles.bottomBox}>
        <Grid item xs={12}>
          <TextField
            label="Geographic Region"
            select
            fullWidth
            name="geographic_region"
            placeholder="Geographic Region"
          >
            {/* Maps through the array to return values for dropdown */}
            {geographicRegion.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Target Demographic"
            select
            fullWidth
            name="target_entrepreneur_demographic"
            placeholder="Target Entrepreneur Demographic"
          >
            {/* Maps through the array to return values for dropdown */}

            {targetDemographic.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Application Due Date"
            InputLabelProps={{ shrink: true }}
            fullWidth
            type="date"
            name="most_recent_application_due_date"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Early Stage Funding"
            select
            fullWidth
            name="early_stage_funding"
            placeholder="Early Stage Funding"
          >
            {/* Maps through the array to return values for dropdown */}
            {funding.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Description"
            type="text"
            name="notes"
            multiline
            fullWidth
            rows="3"
            placeholder="Please provide a description of the grant here!"
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};
