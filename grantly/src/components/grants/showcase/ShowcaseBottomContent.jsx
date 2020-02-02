import React from 'react';
import {Button, Grid, Link} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import {useSelector} from "react-redux";

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
                    <Button
                        variant='contained'
                        color='secondary'
                        className={classes.applyButton}
                    >
                        Suggestion
                    </Button>
                </Grid>
            )}
        </Grid>
    )
}

export default ShowcaseBottomContent;
