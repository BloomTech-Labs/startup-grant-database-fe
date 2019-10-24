//Dependencies
import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import { postGrants, fetchApi, changeTab } from "../actions/index.js";

//Objects
import formStyles from "../styles/FormStyles";
import {
  Button,
  Paper,
  Grid,
  Stepper,
  Step,
  Typography,
  CssBaseline,
  StepLabel
} from "@material-ui/core";

//Grant form components for each step
import GrantInfo from "./submitForm/GrantInfo";
import GrantFocus from "./submitForm/GrantFocus";
import GrantDemo from "./submitForm/GrantDemo";

import moment from "moment";

const AddGrant = props => {
  //Steps are the different parts of the form.  They are broken down into components in the submitForm directory
  const steps = ["Grant Info", "Grant Focus", "Grant Demo"];

  //Switch case that uses the "step" to determine what component to render
  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <GrantInfo handleChanges={handleChanges} grantInfo={grantInfo} />
        );
      case 1:
        return (
          <GrantFocus handleChanges={handleChanges} grantInfo={grantInfo} />
        );
      case 2:
        return (
          <GrantDemo handleChanges={handleChanges} grantInfo={grantInfo} />
        );
      default:
        throw new Error("Unknown Step");
    }
  }

  //Default values for grants state.  Note is_reviewed is set to false so it will only show up on Admin.  Also null values are set to avoid 500 error if inputs are left blank
  const [grantInfo, setGrantInfo] = useState({
    competition_name: "",
    type: "",
    area_focus: "",
    sponsoring_entity: "",
    website: "",

    most_recent_application_due_date: null,

    amount: null,
    amount_notes: "",
    geographic_region: "",
    domain_areas: "",
    target_entrepreneur_demographic: "",
    notes: "",
    early_stage_funding: false,
    is_reviewed: false,
    has_requests: false,
    details_last_updated: moment().format("YYYY-MM-DD")
  });

  //HandleChanges for form
  const handleChanges = event => {
    event.preventDefault();
    setGrantInfo({
      ...grantInfo,
      [event.target.name]: event.target.value
    });
  };

  //Submit for grant from
  const submitGrant = event => {
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

    //Once a user submits it will delay for 2 seconds before "pushing" the user to the grants page
    setTimeout(() => {
      props.fetchApi();
      props.changeTab(0);

      props.history.push("/grants");
    }, 2000);
  };

  const styles = formStyles();

  //State that keeps track of what component the user is on
  const [activeStep, setActiveStep] = useState(0);

  //Used to move the "step" to the next value
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  //Used to move the "step" to the previous value
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Fragment>
      <CssBaseline />

      <main className={styles.layout}>
        <Paper className={styles.paper}>
          <Grid className={styles.topBox}>
            <div>
              <h1>Submit a New Grant to Founder Grants</h1>
              <p>
                Please fill out all of the form fields on this page regarding
                the grant you are submitting. If you are unsure of anything
                please write “N/A” Thank you!
              </p>
            </div>
          </Grid>
          {/* Material UI for the stepper at the top of the page. */}
          <Stepper activeStep={activeStep} className={styles.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Fragment>
            {/* Ternary statement to determine if the grant has been submitted.  This is not being used now, but will be once an email input option has been implemented in future releases  */}
            {activeStep === steps.length ? (
              <Fragment>
                <Typography variant="h3">
                  Thank you for your grant submission!{" "}
                </Typography>
                <Typography>
                  Our site admins will look over your grant information to be
                  approved before it’s posted on Founders Grant. Enter your
                  email address to get updates and to know when your grant has
                  been approved.
                </Typography>
              </Fragment>
            ) : (
              //else portion of ternary
              <Fragment>
                {getStepContent(activeStep)}

                <div className={styles.button}>
                  {activeStep !== 0 && (
                    <Button
                      onClick={handleBack}
                      variant="outlined"
                      className={styles.back}
                      style={{ marginRight: "30px" }}
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    // Ternary that determines what button to display based on what component the user is on
                    onClick={
                      activeStep === steps.length - 1 ? submitGrant : handleNext
                    }
                    className={styles.submit}
                    style={{ color: "#fff" }}
                  >
                    {/* Ternary that determine what button to display*/}
                    {activeStep === steps.length - 1 ? "submit" : "Next"}
                  </Button>
                </div>
              </Fragment>
            )}
          </Fragment>
        </Paper>
      </main>
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
  { postGrants, fetchApi, changeTab }
)(AddGrant);
