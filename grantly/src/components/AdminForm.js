//Dependencies
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  putGrants,
  deleteGrants,
  adminFetchApi,
  changeTab
} from "../actions/index";
import moment from "moment";

//Objects
import formStyles from "../styles/formStyles";
import {
  TextField,
  MenuItem,
  Button,
  Paper,
  Grid,
  Typography,
  Divider
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
    // suggestions: props.grant.suggestions || "",
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
    setTimeout(() => {
      props.changeTab(0);
    }, 2000);
  };

  const removeGrant = event => {
    event.preventDefault();

    props.deleteGrants(grantInfo.id, props.currentUser);

    props.handleClose();
    setTimeout(() => {
      props.changeTab(0);
    }, 2000);
  };
  const styles = formStyles();
  return (
    <main className={styles.layout}>
      <Paper className={styles.paper}>
        <Grid className={styles.topBox}>
          <div>
            <h1>Edit</h1>
          </div>
        </Grid>
        <Typography
          variant="h5"
          className={styles.subjectHeader}
          style={{ marginTop: "30px" }}
        >
          Grant Info
        </Typography>

        <Divider variant="middle" />
        <Grid container spacing={3} className={styles.bottomBox}>
          <Grid item xs={12}>
            <TextField
              // id="outlined-name"
              fullWidth
              label="Competition Name"
              type="text"
              name="competition_name"
              placeholder="Competition Name"
              value={grantInfo.competition_name}
              onChange={handleChanges}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Website"
              type="url"
              fullWidth
              name="website"
              placeholder="Website"
              value={grantInfo.website}
              onChange={handleChanges}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Type"
              type="text"
              name="type"
              fullWidth
              placeholder="Type"
              value={grantInfo.type}
              onChange={handleChanges}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Amount"
              type="number"
              name="amount"
              fullWidth
              placeholder="Amount"
              value={grantInfo.amount}
              onChange={handleChanges}
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
              value={grantInfo.amount_notes}
              onChange={handleChanges}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Typography
          variant="h5"
          className={styles.subjectHeader}
          style={{ marginTop: "30px" }}
        >
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
              value={grantInfo.sponsoring_entity}
              onChange={handleChanges}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Domain Areas"
              type="text"
              name="domain_areas"
              fullWidth
              placeholder="Domain Areas"
              value={grantInfo.domain_areas}
              onChange={handleChanges}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Area Focus"
              type="text"
              className={styles.inputText}
              name="area_focus"
              placeholder="Area Focus"
              fullWidth
              value={grantInfo.area_focus}
              onChange={handleChanges}
            />
          </Grid>
        </Grid>
        <Typography
          variant="h5"
          className={styles.subjectHeader}
          style={{ marginTop: "30px" }}
        >
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
              value={grantInfo.geographic_region}
              onChange={handleChanges}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Target Demographic"
              type="text"
              name="target_entrepreneur_demographic"
              fullWidth
              placeholder="Target Entrepreneur Demographic"
              value={grantInfo.target_entrepreneur_demographic}
              onChange={handleChanges}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              InputLabelProps={{ shrink: true }}
              label="Application Due Date"
              type="date"
              name="most_recent_application_due_date"
              // placeholder="Application Due Date"
              value={grantInfo.most_recent_application_due_date}
              onChange={handleChanges}

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
              value={grantInfo.early_stage_funding}
              onChange={handleChanges}
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
              helperText="Please provide a description from the linked grants website if there is none"
              multiline
              fullWidth
              rows="3"
              placeholder="Notes"
              value={grantInfo.notes}
              onChange={handleChanges}
              margin="normal"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <div className={styles.buttonsContainer}>
          <Button
            className={styles.adminButtons}
            onClick={props.handleClose}
            variant="outlined"
            size="large"
          >
            Cancel
          </Button>
          <Button
            className={styles.adminButtons}
            onClick={removeGrant}
            style={{ margin: "0 20px 0 20px" }}
            color="secondary"
            variant="contained"
            size="large"
          >
            Delete
          </Button>
          <Button
            className={styles.adminButtons}
            onClick={editGrant}
            color="primary"
            variant="contained"
            size="large"
            style={{ color: "#fff" }}
          >
            Save Changes
          </Button>
        </div>
      </Paper>
    </main>
  );
};
const mapStateToProps = ({ isFetching, error, currentUser }) => ({
  isFetching,
  error,
  currentUser
});

export default connect(
  mapStateToProps,
  { putGrants, deleteGrants, adminFetchApi, changeTab }
)(GrantForm);

{
  /* <div>
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
          // <div>
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
</div> */
}
