import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {Redirect} from 'react-router-dom';
import moment from 'moment';
import {formatNumber} from "../../../utils/helpers";

const useStyles = makeStyles(theme => ({
    showcaseDetails: {
        margin: '.5em 0',
        padding: '.5em 0',
        lineHeight: '1.2rem',
        fontFamily: 'EB Garamond'
    },
    detailTitle: {
        fontFamily: "Nunito Sans",
        fontWeight: "bold",
        fontSize: '1.1rem'
    },
    innerDetails: {
        color: '#696969',
        fontSize: "0.9rem",
        marginTop: 5,
        height: 'auto'
    }
}))

function ShowcaseFields({xs, sm, md, title, subtitle, showcase}) {
    const classes = useStyles();

    function textDisplay(str) {

        switch(str) {
            case 'amount':
                return showcase[str] ? `\$${formatNumber(showcase[str])}` : `See website for details`;
            case 'most_recent_application_due_date':
                return showcase[str] ? `${moment(showcase[str]).fromNow()}` : `See website for details`;
            case 'early_stage_funding':
                return showcase[str] ? `Yes` : `No`;
            case '':
            default:
                if (showcase[str]) {
                    return `${showcase[subtitle]}`
                }
                return;
        }
    }

    if (!showcase) {
        return <Redirect to='/' />
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
                {textDisplay(subtitle)}
            </Typography>
        </Grid>
    )
}

export default ShowcaseFields;
