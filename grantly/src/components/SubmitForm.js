//Dependencies
import React, { useState } from "react";
import { connect } from "react-redux";
import Media from "react-media";
import { postGrants, fetchApi } from "../actions/index.js";

//Objects
import formStyles from "../styles/FormStyles";
import {
  TextField,
  MenuItem,
  Button,
  Paper,
  Grid,
  Stepper,
  Step,
  Typography,
  Container,
  Link,
  CssBaseline,
  StepLabel
} from "@material-ui/core";


// const funding = [
//   {
//     value: true,
//     label: "yes"
//   },
//   {
//     value: false,
//     label: "no"
//   }
// ];

const steps = ["Grant Info", "Grant Focus", "Grant Demo"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <GrantInfo />;
    case 1:
      return <GrantFocus />;
    case 2:
      return <GrantDemo />;
    default:
      throw new Error("Unknown Step");
  }
}

const AddGrant = props => {
  const [grantInfo, setGrantInfo] = useState({
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

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  console.log(props);
  return (
    <React.Fragment>
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
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h2">Grant Submitted</Typography>
                <Typography>lorem ipsum</Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={styles.button}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={styles.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={styles.button}
                  >
                    {activeStep === steps.length - 1 ? "Submit" : "Next"}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>

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
                variant="contained"
                color="primary"
                size="large"
                className={styles.submit}
              >
                <span className={styles.label}>Submit</span>
              </Button>
            </div>
          </form>
        </Grid>
      </Grid>
      {/* </Container> */}
    </div>

  );
  // return (
  //   <div className={styles.root}>
  //     {/* <Container fixed> */}
  //     {/* <Media query="(max-width:850px)">
  //       {matches => (matches ? null : <NavBar />)}
  //     </Media> */}
  //     {/* <h1>Submit a New Grant to Founder Grants</h1> */}
  //     <Grid
  //       // className={styles.grid}
  //       container
  //       direction="column"
  //       justify="center"
  //       alignItems="center"
  //     >
  //       {/* <Grid item className={styles.leftBox} sm={12} md={5}> */}
  //       {/* <Grid item sm={12} md={4}> */}
  //       {/* <Grid className={styles.topBox}> */}
  //       <Grid>
  //         {/* <div> */}
  //         {/* <div className={styles.leftBox}> */}
  //         <div className={styles.topBox}>
  //           <h1>Submit a New Grant to Founder Grants</h1>
  //           <p>
  //             Please fill out all of the form fields on this page regarding the
  //             grant you are submitting. If you are unsure of anything please
  //             write “N/A” Thank you!
  //           </p>
  //         </div>
  //       </Grid>
  //       {/* <Grid item sm={12} md={8}> */}
  //       {/* <Grid className={styles.bottomBox}> */}
  //       <Grid>
  //         <div className={styles.bottomBox}>
  //           <form className={styles.form} onSubmit={submitGrant}>
  //             <div className={styles.formContainer}>
  //               <TextField
  //                 // id="outlined-name"
  //                 label="Competition Name"
  //                 type="text"
  //                 className={styles.inputText}
  //                 name="competition_name"
  //                 placeholder="Competition Name"
  //                 value={grantInfo.competition_name}
  //                 onChange={handleChanges}
  //                 margin="normal"
  //                 variant="outlined"
  //               />
  //               <TextField
  //                 label="Type"
  //                 type="text"
  //                 className={styles.inputText}
  //                 name="type"
  //                 placeholder="Type"
  //                 value={grantInfo.type}
  //                 onChange={handleChanges}
  //                 margin="normal"
  //                 variant="outlined"
  //               />
  //               <TextField
  //                 label="Area Focus"
  //                 type="text"
  //                 className={styles.inputText}
  //                 name="area_focus"
  //                 placeholder="Area Focus"
  //                 value={grantInfo.area_focus}
  //                 onChange={handleChanges}
  //                 margin="normal"
  //                 variant="outlined"
  //               />
  //             </div>
  //             <div className={styles.formContainer}>
  //               <TextField
  //                 label="Sponsoring Entity"
  //                 type="text"
  //                 className={styles.inputText}
  //                 name="sponsoring_entity"
  //                 placeholder="Sponsoring Entity"
  //                 value={grantInfo.sponsoring_entity}
  //                 onChange={handleChanges}
  //                 margin="normal"
  //                 variant="outlined"
  //               />
  //               <TextField
  //                 label="Website"
  //                 type="url"
  //                 className={styles.inputText}
  //                 name="website"
  //                 placeholder="Website"
  //                 value={grantInfo.website}
  //                 onChange={handleChanges}
  //                 margin="normal"
  //                 variant="outlined"
  //               />

  //               <TextField
  //                 label="Amount"
  //                 type="number"
  //                 className={styles.inputText}
  //                 name="amount"
  //                 placeholder="Amount"
  //                 value={grantInfo.amount}
  //                 onChange={handleChanges}
  //                 margin="normal"
  //                 variant="outlined"
  //               />
  //             </div>
  //             <div className={styles.formContainer}>
  //               {/* <div> */}
  //               <TextField
  //                 label="Amount Notes"
  //                 type="text"
  //                 className={styles.notes}
  //                 name="amount_notes"
  //                 multiline
  //                 fullWidth
  //                 rows="3"
  //                 placeholder="Amount Notes"
  //                 value={grantInfo.amount_notes}
  //                 onChange={handleChanges}
  //                 margin="normal"
  //                 variant="outlined"
  //               />
  //             </div>
  //             <div className={styles.formContainer}>
  //               <TextField
  //                 label="Geographic Region"
  //                 type="text"
  //                 className={styles.inputText}
  //                 name="geographic_region"
  //                 placeholder="Geographic Region"
  //                 value={grantInfo.geographic_region}
  //                 onChange={handleChanges}
  //                 margin="normal"
  //                 variant="outlined"
  //               />
  //               <TextField
  //                 label="Domain Areas"
  //                 type="text"
  //                 className={styles.inputText}
  //                 name="domain_areas"
  //                 placeholder="Domain Areas"
  //                 value={grantInfo.domain_areas}
  //                 onChange={handleChanges}
  //                 margin="normal"
  //                 variant="outlined"
  //               />

  //               <TextField
  //                 label="Target Demographic"
  //                 // type="text"
  //                 className={styles.inputText}
  //                 name="target_entrepreneur_demographic"
  //                 placeholder="Target Entrepreneur Demographic"
  //                 value={grantInfo.target_entrepreneur_demographic}
  //                 onChange={handleChanges}
  //                 margin="normal"
  //                 variant="outlined"
  //               />
  //             </div>
  //             <div className={styles.formContainer}>
  //               <TextField
  //                 label="Notes"
  //                 // type="text"
  //                 className={styles.notes}
  //                 name="notes"
  //                 multiline
  //                 fullWidth
  //                 rows="3"
  //                 placeholder="Notes"
  //                 value={grantInfo.notes}
  //                 onChange={handleChanges}
  //                 margin="normal"
  //                 variant="outlined"
  //               />
  //             </div>
  //             <div className={styles.formContainer}>
  //               <TextField
  //                 label="Early Stage Funding"
  //                 select
  //                 className={(styles.inputText, styles.dropDown)}
  //                 name="early_stage_funding"
  //                 placeholder="Early Stage Funding"
  //                 value={grantInfo.early_stage_funding}
  //                 onChange={handleChanges}
  //                 margin="normal"
  //                 variant="outlined"
  //               >
  //                 {funding.map(option => (
  //                   <MenuItem key={option.value} value={option.value}>
  //                     {option.label}
  //                   </MenuItem>
  //                 ))}
  //               </TextField>
  //               <TextField
  //                 // label="Application Due Date"
  //                 type="date"
  //                 className={styles.inputText}
  //                 name="most_recent_application_due_date"
  //                 // placeholder="Application Due Date"
  //                 value={grantInfo.most_recent_application_due_date}
  //                 onChange={handleChanges}
  //                 helperText="Application Due Date"
  //                 margin="normal"
  //                 variant="outlined"
  //               />
  //               <TextField
  //                 type="date"
  //                 className={styles.inputText}
  //                 name="details_last_updated"
  //                 value={grantInfo.details_last_updated}
  //                 onChange={handleChanges}
  //                 helperText="Details Last Updated"
  //                 margin="normal"
  //                 variant="outlined"
  //               />
  //             </div>
  //             <div className={styles.divButton}>
  //               <Button
  //                 type="submit"
  //                 variant="contained"
  //                 color="primary"
  //                 size="large"
  //                 className={styles.submit}
  //               >
  //                 <span className={styles.label}>Submit</span>
  //               </Button>
  //             </div>
  //           </form>
  //         </div>
  //       </Grid>
  //     </Grid>
  //     {/* </Container> */}
  //   </div>
  // );
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
