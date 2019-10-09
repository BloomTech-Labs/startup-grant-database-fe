//Dependencies
import React, { useState } from "react";
import { connect } from "react-redux";
import Media from "react-media";
import { postGrants, fetchApi } from "../actions/index";
import moment from "moment";

//Objects
import formStyles from "../styles/FormStyles";
import {
  TextField,
  MenuItem,
  Button,
  Grid,
  Container,
  Link
} from "@material-ui/core";
import Admin from "../views/Landing";

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

const GrantForm = props => {
  const [grantInfo, setGrantInfo] = useState({
    ...props.grant,
    most_recent_application_due_date: moment(
      props.grant.most_recent_application_due_date
    ).format("YYYY-MM-DD"),
    details_last_updated: moment(props.grant.details_last_updated).format(
      "YYYY-MM-DD"
    )
  });

  const handleChanges = event => {
    event.preventDefault();
    setGrantInfo({
      ...grantInfo,
      [event.target.name]: event.target.value
    });
  };

  const submitGrant = event => {
    console.log("SubmitForm.js submitGrant", event);
    event.preventDefault();
    props.postGrants({ ...grantInfo });
    setGrantInfo({
      competition_name: "",
      type: "",
      area_focus: "",
      sponsoring_entity: "",
      website: "",
      most_recent_application_due_date: "",
      amount: "",
      amount_notes: "",
      geographic_region: "",
      domain_areas: "",
      target_entrepreneur_demographic: "",
      notes: "",
      early_stage_funding: "",
      details_last_updated: ""
    });
    setTimeout(() => {
      props.fetchApi();
      props.history.push("/grants");
    }, 2000);
  };

  const styles = formStyles();

  console.log(props);
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
          <form className={styles.form} onSubmit={submitGrant}>
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
              />
              <TextField
                type="date"
                className={styles.inputText}
                name="details_last_updated"
                value={grantInfo.details_last_updated}
                onChange={handleChanges}
                helperText="Details Last Updated"
                margin="normal"
                variant="outlined"
              />
            </div>
            <div>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
                size="large"
              >
                Save Changes
              </Button>
              <Button
                type="submit"
                variant="outlined"
                color="primary"
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
const mapStateToProps = ({ grantData, isFetching, error }) => ({
  grantData,
  isFetching,
  error
});

export default connect(
  mapStateToProps,
  { postGrants, fetchApi }
)(GrantForm);
