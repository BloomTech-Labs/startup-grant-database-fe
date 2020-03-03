import React from "react";
import {Button, Paper} from "@material-ui/core";
import {Link} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    paper: {
        margin: theme.spacing(3),
        alignContent: "center",
        display: "flex",
        flexDirection: "column",
        [theme.breakpoints.down(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(8.5),
            marginLeft: theme.spacing(-2),
            width: "100%",
            height: 1000,
            position: "relative"
        }
    },
    button: {
        alignContent: "center",
        marginBottom: theme.spacing(6)
    }
}));

const MailingList = () => {
    const styles = useStyles();
    return (
        <Paper className={styles.paper}>
            <iframe
                height="450"
                width="550"
                title="mailing-list"
                src="https://cdn.forms-content.sg-form.com/fabf10c9-5733-11ea-9868-7e336812a6ff"
            />
            <Link to="/">
                <Button variant="contained" color="secondary" className={styles.button}>
                    Return Home
                </Button>
            </Link>
        </Paper>
    );
};

export default MailingList;
