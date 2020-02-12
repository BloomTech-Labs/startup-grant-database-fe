import React from 'react';
import {Button} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    welcome: {
        "& h1": {
            fontSize: '3.5rem',
            fontFamily: 'adobe-garamond-pro',
            fontWeight: 400,
            margin: '1rem',
            padding: '30px',
            [theme.breakpoints.down('xs')]: {
                fontSize: '2rem',
                padding: 0,
                margin: 0
            }
        },
        "& p": {
            fontFamily: "adobe-garamond-pro",
            fontSize: "32px",
            margin: "5%",
            [theme.breakpoints.down('xs')]: {
                margin: '1rem',
                flexGrow: 2
            }
        }
    },
    button: {
        width: "266px",
        height: "58px"
    }
}));

function Welcome() {
    const classes = useStyles();
    return (
        <div className={classes.welcome}>
            <h1>Welcome to Founder Grants</h1>
            <p>
                Search lists for grants by choosing a category or as many as you
                are eligible for.
            </p>
            <Button
                variant="outlined"
                color="primary"
                component={RouterLink}
                to="/grants"
                className={classes.button}
            >
                View All Grants
            </Button>
        </div>
    )
}

export default Welcome;
