import React from 'react';
import {Button, Grid, Link} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";
import BaseDialog from "../../dialog/BaseDialog";

const useStyles = makeStyles(theme => ({
    showcaseButtonContainer: {
        margin: "0"
    },
    applyButton: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
        margin: '20px auto 0',
        fontFamily: 'Nunito Sans',
        fontWeight: 600
    },
    link: {
        '&:hover': {
            textDecoration: 'none'
        }
    }
}));

function ShowcaseBottomContent({showcase}) {
    const {currentUser} = useSelector(state => state.user);
    const classes = useStyles();
    return (
        <Grid
            container
            direction='row'
            justify='space-evenly'
            alignItems='center'
            className={classes.showcaseButtonContainer}
        >
            <Grid item>
                <Link
                    href={showcase.website}
                    target='_blank'
                    className={classes.link}
                >
                    <Button
                        variant='contained'
                        color='primary'
                        className={classes.applyButton}
                    >
                        Apply To Grant
                    </Button>
                </Link>
            </Grid>
            {currentUser.email !== '' && (
                <Grid item>
                    <BaseDialog
                        actionButtonText='Suggest Changes'
                        headerText='Submit your suggestion to Founder Grants'
                        message='Our admins will review your suggestions and make the appropriate changes'
                        subject='Subject'
                        suggestion='Suggestion'
                        id={showcase.id}
                    />
                </Grid>
            )}
        </Grid>
    )
}

export default ShowcaseBottomContent;
