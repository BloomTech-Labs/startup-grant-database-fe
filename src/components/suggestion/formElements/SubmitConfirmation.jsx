import React, {Fragment} from "react";
import {Button, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    title: {
        padding: theme.spacing(2)
    },
    content: {
        padding: theme.spacing(2)
    },

    button: {
        color: "white"
    }
}));

export const SubmitConfirmation = () => {
    const styles = useStyles();
    return (
        <Fragment>
            <Typography variant="h4" className={styles.title}>
                Thank you for your grant submission!
            </Typography>
            <Typography className={styles.content}>
                Our site admins will look over your grant information to be approved
                before it’s posted on Founders Grant. Enter your email address to get
                updates and to know when your grant has been approved.
            </Typography>

            <Link to="/">
                <Button color="primary" variant="contained" className={styles.button}>
                    Okay
                </Button>
            </Link>
        </Fragment>
    );
};
