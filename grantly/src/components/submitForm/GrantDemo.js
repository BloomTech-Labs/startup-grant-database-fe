//Dependencies
import React from "react";
import { connect } from "react-redux";

//Objects
import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  Divider
} from "@material-ui/core";
import { postGrants, fetchApi } from "../../actions/index.js";
import formStyles from "../../styles/FormStyles";

const GrantDemo = props => {
  const styles = formStyles();

  //Array of values for the "Early Stage Funding" dropdown
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

  //Array of values for the "Geographic Region" dropdown
  const geographicRegion = [
    {
      value: "Global",
      label: "Global"
    },
    {
      value: "United States",
      label: "United States"
    },
    {
      value: "Northeast",
      label: "Northeast"
    },
    {
      value: "Southeast",
      label: "Southeast"
    },
    {
      value: "Southwest",
      label: "Southwest"
    },
    {
      value: "Northwest",
      label: "Northwest"
    },
    {
      value: "Other",
      label: "Other"
    },
    {
      value: "N/A",
      label: "N/A"
    }
  ];

  //Array of values for the "Target Demographic" dropdown
  const targeDemographic = [
    {
      value: "Minority Business Enterprise",
      label: "Minority Business Enterprise"
    },
    {
      value: "Women Business Enterprise",
      label: "Women Business Enterprise"
    },
    {
      value: "Disadvantaged Business Enterprise",
      label: "Disadvantaged Business Enterprise"
    },
    {
      value: "Veteran Business Enterprise",
      label: "Veteran Business Enterprise"
    },
    {
      value: "Other",
      label: "Other"
    },
    {
      value: "N/A",
      label: "N/A"
    }
  ];

  return (
    <React.Fragment>
      <Typography variant="h5" className={styles.subjectHeader}>
        Grant Demographics
      </Typography>
      <Divider variant="middle" />
      <Grid container spacing={3} className={styles.bottomBox}>
        <Grid item xs={12}>
          <TextField
            label="Geographic Region"
            select
            fullWidth
            className={styles.dropDown}
            name="geographic_region"
            placeholder="Geographic Region"
            value={props.grantInfo.geographic_region}
            onChange={props.handleChanges}
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
            className={styles.dropDown}
            name="target_entrepreneur_demographic"
            placeholder="Target Entrepreneur Demographic"
            value={props.grantInfo.target_entrepreneur_demographic}
            onChange={props.handleChanges}
          >
            {/* Maps through the array to return values for dropdown */}
            {targeDemographic.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Application Due Date"
            fullWidth
            type="date"
            name="most_recent_application_due_date"
            value={props.grantInfo.most_recent_application_due_date}
            onChange={props.handleChanges}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Early Stage Funding"
            select
            fullWidth
            className={styles.dropDown}
            name="early_stage_funding"
            placeholder="Early Stage Funding"
            value={props.grantInfo.early_stage_funding}
            onChange={props.handleChanges}
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
            value={props.grantInfo.notes}
            onChange={props.handleChanges}
            margin="normal"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = ({ grantData, isFetching, error }) => ({
  grantData,
  isFetching,
  error
});

export default connect(
  mapStateToProps,
  { postGrants, fetchApi }
)(GrantDemo);
