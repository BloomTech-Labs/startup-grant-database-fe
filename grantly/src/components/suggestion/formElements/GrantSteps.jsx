import React, { useState } from "react";
import { Stepper, Step, StepLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  stepper: {
    padding: theme.spacing(3, 0, 5)
  }
}));

export const GrantSteps = props => {
  const [activeStep, setActiveStep] = useState(0);
  const styles = useStyles();

  return (
    <Stepper activeStep={activeStep} className={styles.stepper}>
      {steps.map(label => (
        <Step key={label}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
};
