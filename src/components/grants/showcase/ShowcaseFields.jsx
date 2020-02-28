import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import {Redirect} from 'react-router-dom';
import {textDisplay} from "../../../utils/helpers";

const useStyles = makeStyles(theme => ({
    showcaseDetails: {
        // margin: '.5em 0',
        // padding: '.5em 0',
        // lineHeight: '1.2rem',
        fontFamily: 'EB Garamond'
    },
    detailTitle: {
        fontFamily: "Nunito Sans",
        fontWeight: "bold",
        // fontSize: '1.1rem'
    },
    innerDetails: {
        color: '#696969',
        // fontSize: "0.9rem",
        // marginTop: 5,
        // height: 'auto'
    }
}));

function ShowcaseFields({xs, sm, md, title, subtitle, showcase}) {
    const classes = useStyles();


    if (!showcase) {
        return <Redirect to='/'/>
    }

    return (
        <Grid
            item
            xs={xs}
            sm={sm}
            md={md}
            className={classes.showcaseDetails}
        >
            <Typography className={classes.detailTitle}>
                {title}
            </Typography>
            <Typography className={classes.innerDetails}>
                {textDisplay(subtitle, showcase)}
            </Typography>
        </Grid>
    )
}

export default ShowcaseFields;
