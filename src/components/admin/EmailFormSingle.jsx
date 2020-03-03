import React, {useContext} from "react";
import {useSelector} from "react-redux";
import {TextFormField} from "../suggestion/formElements/TextFormField";
import {Button, Grid, makeStyles, Paper, Typography} from "@material-ui/core";
import {EmailSingleValues} from "./values/EmailFormValues";
import {useForm} from "../../hooks/useForm";
import {ActionsContext} from "../../context/ActionsContext";
import ConfirmedModel from "./ConfirmedModel";

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
    }
}));

export const EmailFormSingle = () => {
    const actions = useContext(ActionsContext);
    const {token} = useSelector(state => state.user);
    const {isSuccess} = useSelector(state => state.admin);
    const styles = emailFormStyles();
    const [values, handleChange, handleSubmit, resetForm] = useForm(
        {
            to: "",
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
        actions.admin.postEmailSingleText(token, values);
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Paper className={styles.paper}>
                    <Typography variant="h3">Email To Single User</Typography>
                    <Grid container spacing={2} className={styles.formInputs}>
                        {EmailSingleValues.map(data => {
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
                        Send To Single User
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
