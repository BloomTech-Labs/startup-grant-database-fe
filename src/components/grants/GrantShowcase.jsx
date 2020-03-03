import React from 'react';

import {makeStyles} from "@material-ui/core/styles";
import {Card, Divider} from "@material-ui/core";
import ShowcaseTopContent from "./showcase/ShowcaseTopContent";
import ShowcaseMainContent from "./showcase/ShowcaseMainContent";
import ShowcaseBottomContent from "./showcase/ShowcaseBottomContent";


const useStyles = makeStyles(theme => ({
    showcaseCard: {
        textAlign: 'left',
        padding: theme.spacing(2),
        borderTop: '#3DB8B3 5px solid',
        fontFamily: 'adobe-garamond-pro',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
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
}));

function GrantShowcase(props) {
    const classes = useStyles();
    return (
        <Card className={classes.showcaseCard} raised>
            <ShowcaseTopContent {...props} />
            <ShowcaseMainContent {...props} />
            <Divider color="primary"/>
            <ShowcaseBottomContent {...props} />
        </Card>
    )
}

export default GrantShowcase;
