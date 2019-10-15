import React from "react";
import {
  Grid,
  Typography,
  TextField,
  MenuItem,
  Divider
} from "@material-ui/core";
import { connect } from "react-redux";
import { postGrants, fetchApi } from "../../actions/index.js";
import formStyles from "../../styles/FormStyles";

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

const GrantDemo = props => {
  const styles = formStyles();

  return (
    <React.Fragment>
      <Typography variant="h5" className={styles.subjectHeader}>
        Grant Demo
      </Typography>
      <Divider variant="middle" />
      <Grid container spacing={3} className={styles.bottomBox}>
        <Grid item xs={12}>
          <TextField
            label="Geographic Region"
            type="text"
            name="geographic_region"
            fullWidth
            placeholder="Geographic Region"
            value={props.grantInfo.geographic_region}
            onChange={props.handleChanges}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Target Demographic"
            type="text"
            name="target_entrepreneur_demographic"
            fullWidth
            placeholder="Target Entrepreneur Demographic"
            value={props.grantInfo.target_entrepreneur_demographic}
            onChange={props.handleChanges}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Application Due Date"
            type="date"
            name="most_recent_application_due_date"
            // placeholder="Application Due Date"
            value={props.grantInfo.most_recent_application_due_date}
            onChange={props.handleChanges}

            // helperText="Application Due Date"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            InputLabelProps={{ shrink: true }}
            label="Early Stage Funding"
            select
            // className={(styles.inputText, styles.dropDown)}
            className={styles.dropDown}
            name="early_stage_funding"
            placeholder="Early Stage Funding"
            value={props.grantInfo.early_stage_funding}
            onChange={props.handleChanges}
          >
            {funding.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Notes"
            type="text"
            name="notes"
            multiline
            fullWidth
            rows="3"
            placeholder="Notes"
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
