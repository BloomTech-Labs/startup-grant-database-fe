import React from 'react';
import {Button, Typography} from '@material-ui/core';
import {Link as RouterLink} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import {Helmet} from "react-helmet";

const useStyles = makeStyles(theme => ({
    button: {
        width: "266px",
        height: "58px"
    }
}));

function Welcome() {
    const classes = useStyles();
    return (
        
        <div>
            <Helmet>
            <title>Founder Grants</title>
            <meta name="description" content="Find your startup grant, browse by type, region, amount" />
            <meta name="keywords" content="grant,startup,funding,invest,financing" />

            </Helmet>
            <Typography variant='h3' component='h1'>Welcome to Founder Grants</Typography>
            <Typography paragraph variant='h6' component='p'>
                Search lists for grants by choosing a category or as many as you
                are eligible for.
            </Typography>
            <Button
                size='large'
                variant="outlined"
                color="primary"
                component={RouterLink}
                to="/grants"
                // className={classes.button}
            >
                View All Grants
            </Button>
        </div>
    )
}

export default Welcome;
