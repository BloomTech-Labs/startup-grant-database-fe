import React, {useEffect, useContext} from 'react';
import Welcome from './Welcome';
import Filters from "../filter/Filters";
import {makeStyles} from "@material-ui/core/styles";
import {Grid} from '@material-ui/core';
import {useSelector} from "react-redux";
import {ActionsContext} from "../../context/ActionsContext";
import {Helmet} from "react-helmet";


const components = [
    {
        key: 'Welcome',
        component: Welcome,
        props: {}
    },
    {
        key: 'Filters',
        component: Filters,
        props: {
            landing: true
        }
    }
];

const useStyles = makeStyles(theme => ({
    container: {
        [theme.breakpoints.down('xs')]: {
            marginTop: '100px'
        }
    },
    grid: {
        maxWidth: '100%',
        minHeight: 'calc(100vh - 192px)',
        [theme.breakpoints.down('xs')]: {
            marginTop: '3rem',
            alignContent: 'center',
            display: 'block',
            height: '120vh'
        }
    }
}));

function LandingPage() {
    const classes = useStyles();
    const actions = useContext(ActionsContext);
    const numberOfGrants = useSelector(state => state.grants.grants.length);

    useEffect(()=> {
        if (numberOfGrants === 0) {
            actions.grants.fetchGrants();
        }
    }, [numberOfGrants]);

    return (
        <div className={classes.container}>
            <Helmet>
                <title>Founder Grants</title>
                <meta name="description" content="Find your startup grant, browse by type, region, amount!" />
                <meta name="keywords" content="grant,startup,funding,invest,financing" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:site_name" content="Startup Grant Database" />
                

            </Helmet>
            <Grid
                className={classes.grid}
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                {components.map(({component: Component, props, key})=> (
                    <Grid
                        key={key}
                        item
                        md={6}
                        xs={12}
                    >
                        <Component {...props} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default LandingPage;
