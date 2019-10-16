//Dependencies
import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import { postGrants, fetchApi } from "../actions/index.js";

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

import GrantInfo from "./submitForm/GrantInfo";
import GrantFocus from "./submitForm/GrantFocus";
import GrantDemo from "./submitForm/GrantDemo";

import moment from "moment";

const AddGrant = props => {
  const steps = ["Grant Info", "Grant Focus", "Grant Demo"];

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

  const [grantInfo, setGrantInfo] = useState({
    competition_name: "",
    type: "",
    area_focus: "",
    sponsoring_entity: "",
    website: "",
    most_recent_application_due_date: "",
    amount: null,
    amount_notes: "",
    geographic_region: "",
    domain_areas: "",
    target_entrepreneur_demographic: "",
    notes: "",
    early_stage_funding: "",
    is_reviewed: false,
    has_requests: false,
    details_last_updated: moment().format("YYYY-MM-DD")
  });

  const handleChanges = event => {
    event.preventDefault();
    setGrantInfo({
      ...grantInfo,
      [event.target.name]: event.target.value
    });
  };

  const submitGrant = event => {
    event.preventDefault();
    props.postGrants({ ...grantInfo });
    console.log("SubmitForm.js submitGrant", grantInfo);
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

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  console.log(props);
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
          <Stepper activeStep={activeStep} className={styles.stepper}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Fragment>
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
                    onClick={
                      activeStep === steps.length - 1 ? submitGrant : handleNext
                    }
                    className={styles.submit}
                    style={{ color: "#fff" }}
                  >
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
  { postGrants, fetchApi }
)(AddGrant);
