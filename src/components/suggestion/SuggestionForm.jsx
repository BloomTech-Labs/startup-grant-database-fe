//Dependencies
import React, {Fragment, useContext, useState} from "react";
import {useSelector} from "react-redux";
import {ActionsContext} from "../../context/ActionsContext";
import {makeStyles} from "@material-ui/core/styles";
import {SubmitConfirmation} from "./formElements/SubmitConfirmation.jsx";
//Objects
// import formStyles from "../styles/formStyles";
import {Button, CssBaseline, Paper} from "@material-ui/core";
//Grant form components for each step
import {GrantInfoForm} from "./formElements/GrantInfoForm";
import {GrantFocusForm} from "./formElements/GrantFocusForm";
import {GrantDemoForm} from "./formElements/GrantDemoForm";
import {SuggestionFormTopContent} from "./formElements/SuggestionFormTopContent.jsx";
import {GrantSteps} from "./formElements/GrantSteps.jsx";

const useStyles = makeStyles(theme => ({
    layout: {
        width: "auto",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 700,
            marginLeft: "auto",
            marginRight: "auto",
            // height: "auto"
            height: 1000
        }
    },
    paper: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(3),
        paddingBottom: theme.spacing(3),

        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(6),
            paddingBottom: theme.spacing(6)

            // height: 1000,
            // position: "relative"
        }
    },
    bottomBox: {
        padding: theme.spacing(2, 6, 1, 6)
    },
    button: {
        display: "flex",
        bottom: theme.spacing(5),
        paddingLeft: theme.spacing(6),
        marginTop: theme.spacing(3),
        marginRight: theme.spacing(3)
    },
    submit: {
        width: "30%",
        height: "4em"
    },
    submitContainer: {
        marginLeft: theme.spacing(3)
    },
    back: {
        width: "30%",
        height: "4em",
        border: "1px solid black",
        color: "black",
        marginRight: "50px"
    },
    dropDown: {
        width: 200,
        color: "#fff",
        [theme.breakpoints.down("sm")]: {
            width: "90%"
        }
    },
    subjectHeader: {
        textAlign: "left",
        paddingLeft: theme.spacing(6)
    },
    hr: {
        width: 600,
        color: "#808080"
    },
    label: {
        color: "#fff"
    },
    adminButtons: {
        margin: "30px"
    },
    buttonsContainer: {
        display: "flex",
        justifyContent: "center"
    }
}));

export const AddGrant = props => {
    const actions = useContext(ActionsContext);
    const {token} = useSelector(state => state.user);
    const styles = useStyles();

    //Steps are the different parts of the form.  They are broken down into components in the submitForm directory
    const steps = ["Grant Info", "Grant Focus", "Grant Demo"];
    const [activeStep, setActiveStep] = useState(0);

    // const [token] = useGetToken();
    //Default values for grants state.  Note is_reviewed is set to false so it will only show up on Admin.  Also null values are set to avoid 500 error if inputs are left blank
    const [grantInfo, setGrantInfo] = useState({
        competition_name: "",
        // type: "",
        area_focus: "",
        sponsoring_entity: "",

        website: "",

        most_recent_application_due_date: "",

        amount: "",
        amount_notes: "",
        geographic_region: "",
        // domain_areas: "",
        target_entrepreneur_demographic: "",
        notes: "",
        early_stage_funding: false,
        is_reviewed: false,
        has_requests: false,
        details_last_updated: ""
    });

    const handleChanges = event => {
        event.preventDefault();
        setGrantInfo({
            ...grantInfo,
            [event.target.name]: event.target.value
        });
    };

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <GrantInfoForm handleChanges={handleChanges} grantInfo={grantInfo}/>
                );
            case 1:
                return (
                    <GrantFocusForm handleChanges={handleChanges} grantInfo={grantInfo}/>
                );
            case 2:
                return (
                    <GrantDemoForm handleChanges={handleChanges} grantInfo={grantInfo}/>
                );
            default:
                throw new Error("Unknown Step");
        }
    }

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const submitGrant = event => {
        event.preventDefault();
        actions.grants.postGrant(grantInfo, token);

        setGrantInfo({
            competition_name: "",
            area_focus: "",
            sponsoring_entity: "",
            website: "",
            most_recent_application_due_date: "",
            amount: "",
            amount_notes: "",
            geographic_region: "",
            target_entrepreneur_demographic: "",
            notes: "",
            early_stage_funding: "",
            details_last_updated: ""
        });
        handleNext();
    };

    return (
        <Fragment>
            <CssBaseline/>

            <main className={styles.layout}>
                <Paper className={styles.paper}>
                    <SuggestionFormTopContent/>
                    <GrantSteps steps={steps} activeStep={activeStep}/>

                    <Fragment>
                        {/* Ternary statement to determine if the grant has been submitted.  This is not being used now, but will be once an email input option has been implemented in future releases  */}
                        {activeStep === steps.length ? (
                            <SubmitConfirmation/>
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
                                            style={{marginRight: "30px"}}
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
                                        style={{color: "#fff"}}
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
