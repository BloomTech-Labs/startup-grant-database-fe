import React, {useContext} from "react";
import {useSelector} from "react-redux";
import {TextFormField} from "../suggestion/formElements/TextFormField";
import {Button, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {EmailFormValues} from "./values/ContactFormValues";
import {useForm} from "../../hooks/useForm";
import {ActionsContext} from "../../context/ActionsContext";
import ConfirmedModel from "../admin/ConfirmedModel";

const emailFormStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(3)
    },
    formInputs: {
        padding: theme.spacing(3),
        marginTop: theme.spacing(3)
    },
    button: {
        margin: theme.spacing(3)
    },
    title: {
        paddingTop: "1em"
    },
    formRealInput: {
        padding: theme.spacing(3)
    }
}));

const ContactUsForm = () => {
    const actions = useContext(ActionsContext);
    const {token} = useSelector(state => state.user);
    const {isSuccess} = useSelector(state => state.admin);
    const styles = emailFormStyles();
    const [values, handleChange, handleSubmit, resetForm] = useForm(
        {
            from: "",
            subject: "",
            text: ""
        },
        doSubmit
    );

    const handleClose = () => {
        actions.admin.resetSuccess();
        resetForm();
    };

    function doSubmit() {
        actions.admin.postContactUsEmail(values);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Paper className={styles.paper}>
                    <Typography className={styles.title} variant="h3">
                        Fill out this form to contact the Founder Grants Team!
                    </Typography>
                    <Grid spacing={2} container className={styles.formInputs}>
                        {EmailFormValues.map(data => {
                            return (
                                <TextFormField
                                    label={data.label}
                                    type={data.type}
                                    name={data.name}
                                    select={data.select}
                                    data={data.data}
                                    //   sm={props.sm}
                                    multiline={data.multiline}
                                    variant={data.variant}
                                    rows={data.rows}
                                    value={data.name}
                                    className={styles.formRealInputs}
                                    handleChanges={handleChange}
                                />
                            );
                        })}
                    </Grid>

                    <Button
                        variant="contained"
                        color="secondary"
                        className={styles.button}
                        type="submit"
                    >
                        Submit
                    </Button>
                </Paper>
            </form>
            <ConfirmedModel
                isSuccess={isSuccess}
                handleClose={handleClose}
                title="Success!"
                message="The specified user have been sent the email"
            />
        </>
    );
};

export default ContactUsForm;
