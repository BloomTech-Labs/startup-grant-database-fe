import React from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {Helmet} from "react-helmet";

const useStyles = makeStyles(theme => ({
        welcome: {
            padding: theme.spacing(2)
        },
        about: {
            [theme.breakpoints.up("sm")]: {
                display: "none"
            }
        }
    }))
;

function Welcome() {
    const classes = useStyles();
    return (
        <div className={classes.welcome}>
            <Helmet>
                <title>Founder Grants</title>
                <meta
                    name="description"
                    content="Find your startup grant, browse by type, region, amount"
                />
                <meta
                    name="keywords"
                    content="grant,startup,funding,invest,financing"
                />
            </Helmet>
            <Typography variant="h3" component="h1">
                Welcome to Founder Grants
            </Typography>
            <Typography paragraph variant="h5" component="p">
                The best to find dilution-free funding for your startup or project.
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Button
                        variant="outlined"
                        color="primary"
                        component={RouterLink}
                        to="/grants"
                    >
                        Find Funding
                    </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
                        variant="outlined"
                        color="primary"
                        component={RouterLink}
                        to="/about"
                        className={classes.about}
                    >
                        About Us
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export default Welcome;
