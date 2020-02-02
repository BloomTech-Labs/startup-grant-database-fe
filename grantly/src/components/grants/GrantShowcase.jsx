import React from 'react';

import {makeStyles} from "@material-ui/core/styles";
import {Card} from "@material-ui/core";
import ShowcaseTopContent from "./showcase/ShowcaseTopContent";
import ShowcaseMainContent from "./showcase/ShowcaseMainContent";

const useStyles = makeStyles(theme => ({
    showcaseCard: {
        textAlign: 'left',
        padding: '30px',
        borderTop: '#3DB8B3 5px solid',
        fontFamily: 'adobe-garamond-pro',
        [theme.breakpoints.down('sm')]: {
            position: 'initial',
            padding: '2em',
            height: 'auto',
            margin: '2em 3em'
        },
        [theme.breakpoints.down('xs')]: {
            padding: '1em',
            margin: '1em 1em'
        }
    }
}))

function GrantShowcase() {
    const classes = useStyles();
    return (
        <Card className={classes.showcaseCard}>
            <ShowcaseTopContent/>
            <ShowcaseMainContent/>
        </Card>
    )
}

export default GrantShowcase;
