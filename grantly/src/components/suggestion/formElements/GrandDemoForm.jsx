import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  Divider
} from "@material-ui/core";

const GrantDemo = props => {
    const styles = formStyles();
  
    return (
      <Fragment>
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
      </Fragment>
    );
  };