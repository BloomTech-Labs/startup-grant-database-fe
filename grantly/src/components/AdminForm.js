//Dependencies
import React, { useState } from "react";
import { connect } from "react-redux";
import { putGrants, deleteGrants, adminFetchApi } from "../actions/index";
import moment from "moment";

//Objects
import formStyles from "../styles/FormStyles";
import {
  TextField,
  MenuItem,
  Button,
  Grid
  // Container,
  // Link
} from "@material-ui/core";
// import Admin from "../views/Landing";

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
const formattedGrantObj = props => {
  return {
    id: props.grant.id,
    competition_name: props.grant.competition_name || "",
    type: props.grant.type || "",
    area_focus: props.grant.area_focus || "",
    sponsoring_entity: props.grant.sponsoring_entity || "",
    website: props.grant.website || "",
    most_recent_application_due_date:
      moment(props.grant.most_recent_application_due_date).format(
        "YYYY-MM-DD"
      ) === "Invalid date"
        ? undefined
        : moment(props.grant.most_recent_application_due_date).format(
            "YYYY-MM-DD"
          ),
    amount: props.grant.amount || "",
    amount_notes: props.grant.amount_notes || "",
    geographic_region: props.grant.geographic_region || "",
    domain_areas: props.grant.domain_areas || "",
    target_entrepreneur_demographic:
      props.grant.target_entrepreneur_demographic || "",
    notes: props.grant.notes || "",
    early_stage_funding: props.grant.early_stage_funding,
    details_last_updated: props.grant.details_last_updated
  };
};

const GrantForm = props => {
  // Set initial state of form
  const [grantInfo, setGrantInfo] = useState(formattedGrantObj(props));

  const handleChanges = event => {
    event.preventDefault();
    setGrantInfo({
      ...grantInfo,
      [event.target.name]: event.target.value
    });
  };

  const editGrant = event => {
    event.preventDefault();
    props.putGrants(
      {
        ...grantInfo,
        details_last_updated: moment().format("YYYY-MM-DD")
      },
      props.currentUser
    );
    props.handleClose();
  };

  const removeGrant = event => {
    event.preventDefault();

    props.deleteGrants(grantInfo.id, props.currentUser);
    props.handleClose();
  };
  const styles = formStyles();

  return (
    <div>
      <Grid
        className={styles.grid}
        container
        // direction="row"
        // justify="center"
        alignItems="center"
      >
        <Grid item sm={12} md={12}>
          <form className={styles.form}>
            <div className={styles.formContainer}>
              <TextField
                // id="outlined-name"
                label="Competition Name"
                type="text"
                className={styles.inputText}
                name="competition_name"
                placeholder="Competition Name"
                value={grantInfo.competition_name}
                onChange={handleChanges}
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Type"
                type="text"
                className={styles.inputText}
                name="type"
                placeholder="Type"
                value={grantInfo.type}
                onChange={handleChanges}
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Area Focus"
                type="text"
                className={styles.inputText}
                name="area_focus"
                placeholder="Area Focus"
                value={grantInfo.area_focus}
                onChange={handleChanges}
                margin="normal"
                variant="outlined"
              />
            </div>
            <div className={styles.formContainer}>
              <TextField
                label="Sponsoring Entity"
                type="text"
                className={styles.inputText}
                name="sponsoring_entity"
                placeholder="Sponsoring Entity"
                value={grantInfo.sponsoring_entity}
                onChange={handleChanges}
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Website"
                type="url"
                className={styles.inputText}
                name="website"
                placeholder="Website"
                value={grantInfo.website}
                onChange={handleChanges}
                margin="normal"
                variant="outlined"
              />

              <TextField
                label="Amount"
                type="number"
                className={styles.inputText}
                name="amount"
                placeholder="Amount"
                value={grantInfo.amount}
                onChange={handleChanges}
                margin="normal"
                variant="outlined"
              />
            </div>
            <div className={styles.formContainer}>
              {/* <div> */}
              <TextField
                label="Amount Notes"
                type="text"
                className={styles.notes}
                name="amount_notes"
                multiline
                rows="3"
                placeholder="Amount Notes"
                value={grantInfo.amount_notes}
                onChange={handleChanges}
                margin="normal"
                variant="outlined"
              />
            </div>
            <div className={styles.formContainer}>
              <TextField
                label="Geographic Region"
                type="text"
                className={styles.inputText}
                name="geographic_region"
                placeholder="Geographic Region"
                value={grantInfo.geographic_region}
                onChange={handleChanges}
                margin="normal"
                variant="outlined"
              />
              <TextField
                label="Domain Areas"
                type="text"
                className={styles.inputText}
                name="domain_areas"
                placeholder="Domain Areas"
                value={grantInfo.domain_areas}
                onChange={handleChanges}
                margin="normal"
                variant="outlined"
              />

              <TextField
                label="Target Demographic"
                // type="text"
                className={styles.inputText}
                name="target_entrepreneur_demographic"
                placeholder="Target Entrepreneur Demographic"
                value={grantInfo.target_entrepreneur_demographic}
                onChange={handleChanges}
                margin="normal"
                variant="outlined"
              />
            </div>
            <div className={styles.formContainer}>
              <TextField
                label="Notes"
                // type="text"
                className={styles.notes}
                name="notes"
                multiline
                rows="3"
                placeholder="Notes"
                value={grantInfo.notes}
                onChange={handleChanges}
                margin="normal"
                variant="outlined"
              />
            </div>
            <div className={styles.formContainer}>
              <TextField
                label="Early Stage Funding"
                select
                className={(styles.inputText, styles.dropDown)}
                name="early_stage_funding"
                placeholder="Early Stage Funding"
                value={grantInfo.early_stage_funding}
                onChange={handleChanges}
                margin="normal"
                variant="outlined"
              >
                {funding.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                // label="Application Due Date"
                type="date"
                className={styles.inputText}
                name="most_recent_application_due_date"
                // placeholder="Application Due Date"
                value={grantInfo.most_recent_application_due_date}
                onChange={handleChanges}
                helperText="Application Due Date"
                margin="normal"
                variant="outlined"
                required
              />
            </div>
            <div>
              <Button
                className={styles.adminButtons}
                onClick={props.handleClose}
                variant="outlined"
                color="primary"
                size="large"
              >
                Cancel
              </Button>
              <Button
                className={styles.adminButtons}
                onClick={editGrant}
                variant="outlined"
                color="primary"
                size="large"
              >
                Save Changes
              </Button>
              <Button
                className={styles.adminButtons}
                onClick={removeGrant}
                variant="outlined"
                size="large"
              >
                Delete
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};
const mapStateToProps = ({ isFetching, error, currentUser }) => ({
  isFetching,
  error,
  currentUser
});

export default connect(
  mapStateToProps,
  { putGrants, deleteGrants, adminFetchApi }
)(GrantForm);
