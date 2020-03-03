import React from "react";
import {Step, StepLabel, Stepper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    stepper: {
        padding: theme.spacing(3, 0, 5)
    }
}));

export const GrantSteps = props => {
    const styles = useStyles();

    return (
        <Stepper activeStep={props.activeStep} className={styles.stepper}>
            {props.steps.map(label => (
                <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};
