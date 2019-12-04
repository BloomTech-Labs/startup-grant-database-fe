import React, { Fragment } from "react";
import {
  Grid,
  Typography,
  TextField,
  Divider,

  MenuItem

} from "@material-ui/core";
import { connect } from "react-redux";
import { postGrants, fetchApi } from "../../actions/index.js";
import formStyles from "../../styles/formStyles";

const GrantFocus = props => {
  const styles = formStyles();

  //Array of values for the "Area Focus" dropdown

  const areaFocus = [
    {
      value: "Communication Services",
      label: "Communication Services"
    },
    {
      value: "Consumer Discretionary",
      label: "Consumer Discretionary"
    },
    {
      value: "Consumer Staples",
      label: "Consumer Staples"
    },
    {
      value: "Energy",
      label: "Energy"
    },
    {
      value: "Financials",
      label: "Financials"
    },
    {
      value: "Industrials",
      label: "Industrials"
    },
    {
      value: "Information Technology",
      label: "Information Technology"
    },
    {
      value: "Materials",
      label: "Materials"
    },
    {
      value: "Real Estate",
      label: "Real Estate"
    },
    {
      value: "Utilities",
      label: "Utilities"
    },
    {
      value: "N/A",
      label: "N/A"
    }
  ];

  //Array of values for the "Domain Areas" dropdown

  const domainAreas = [
    {
      value: "Social Entrepreneurship",
      label: "Social Entrepreneurship"
    },
    {
      value: "Conservation",
      label: "Conservation"
    },
    {
      value: "Economic Opportunity",
      label: "Economic Opportunity"
    },
    {
      value: "Agriculture",
      label: "Agriculture"
    },
    {
      value: "Social Change",
      label: "Social Change"
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
    <Fragment>
      <Typography variant="h5" className={styles.subjectHeader}>
        Grant Focus
      </Typography>
      <Divider variant="middle" />
      <Grid container spacing={3} className={styles.bottomBox}>
        <Grid item xs={12}>
          <TextField
            label="Sponsoring Entity"
            type="text"
            name="sponsoring_entity"
            fullWidth
            placeholder="Sponsoring Entity"
            value={props.grantInfo.sponsoring_entity}
            onChange={props.handleChanges}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Focus Area"
            select
            className={styles.dropDown}
            name="domain_areas"
            fullWidth
            placeholder="Domain Areas"
            value={props.grantInfo.domain_areas}
            onChange={props.handleChanges}
          >

            {/* Maps through the array to return values for dropdown */}

            {domainAreas.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Grant Categories"
            select
            className={styles.dropDown}
            name="area_focus"
            placeholder="Area Focus"
            fullWidth
            value={props.grantInfo.area_focus}
            onChange={props.handleChanges}
          >

            {/* Maps through the array to return values for dropdown */}

            {areaFocus.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Fragment>
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
)(GrantFocus);

{

  //Checkbox Implementation for future release

  /* <FormControl>
          <FormLabel> Area Focus</FormLabel>
          <FormGroup
            value={props.grantInfo.area_focus}
            onChange={props.handleChanges}
          >
            {areaFocus.map(option => (
              <FormControlLabel
                control={<Checkbox key={option.value} value={option.value} />}
                label={option.label}
              />
            ))}

          </FormGroup>
        </FormControl> */
}
