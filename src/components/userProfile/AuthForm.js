import React from "react";
import {Button, Divider, Grid, Paper, Typography} from "@material-ui/core";
import {TextFormField} from "../suggestion/formElements/TextFormField";
import {makeStyles} from "@material-ui/core/styles";
import SimpleModal from "./DeleteModel";

const useStyles = makeStyles(theme => ({
    formContainer: {
        padding: "2em 8em 2em 8em",
        [theme.breakpoints.down("sm")]: {
            padding: "2em"
        }
    },
    layout: {
        [theme.breakpoints.down("sm")]: {
            paddingTop: "8em"
        }
    },
    title: {
        paddingBottom: "1.5em"
    },
    button: {
        margin: "1em"
    }
}));

const AuthFormData = [
    {label: "Email", type: "email", name: "email", data: []},
    {label: "Old Password", type: "password", name: "oldPassword", data: []},
    {label: "New Password", type: "password", name: "newPassword", data: []},
    {
        label: "Re-Enter New Password",
        type: "password",
        name: "reEnterNewPassword",
        data: []
    }
];

export const AuthForm = () => {
    const styles = useStyles();

    return (
        <Paper className={styles.layout}>
            <Typography variant="h4" className={styles.title}>
                User Settings
            </Typography>
            <Typography variant="h6">Account Settings</Typography>
            <Divider variant="middle"/>
            <Grid container spacing={3} className={styles.formContainer}>
                {AuthFormData.map(data => {
                    return (
                        <TextFormField
                            label={data.label}
                            type={data.type}
                            name={data.name}
                            data={data.data}
                        />
                    );
                })}
            </Grid>
            <Button variant="contained" color="primary" className={styles.button}>
                Submit Changes
            </Button>
            <SimpleModal/>
        </Paper>
    );
};
