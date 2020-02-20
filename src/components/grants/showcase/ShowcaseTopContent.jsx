import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Link, Typography} from '@material-ui/core';
import {useSelector} from "react-redux";
import FavoritesIconButton from "./FavoritesIconButton";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import LanguageIcon from "@material-ui/icons/Language";
import IconDisplay from "./IconDisplay";

const useStyles = makeStyles(theme => ({
    title: {
        maxWidth: '300px'
    },
    topContent: {
        margin: "0"
    },
    showcaseHeader: {
        width: 'inherit'
    },
    grantName: {
        fontWeight: 700,
        fontFamily: 'Nunito Sans',
        color: '#222222',
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2,0,0,0),
    },
    website: {
        fill: '#696969',
        marginRight: ".2rem",
        fontSize: "1.2rem",
        overflow: "none",
    }
}));

function ShowcaseTopContent({showcase}) {
    const {favoriteGrants} = useSelector(state => state.user);
    const existingFavorite = favoriteGrants.filter(fav => fav.id === showcase.id);
    const classes = useStyles();

    return (
        <>
            <Grid container justify="space-between" alignItems='center'>
                <Grid item className={classes.title}>
                <Typography variant='h5' className={classes.grantName}>
                    {showcase.competition_name}
                </Typography>
                </Grid>
                <Grid item>
                   <IconDisplay favoriteGrants={favoriteGrants} id={showcase.id} existingFavorite={existingFavorite} />
                </Grid>
            </Grid>
            <Grid
                container
                justify='flex-start'
                alignItems='flex-end'
                alignContent='flex-end'
            >
                <LanguageIcon className={classes.website} />
                <Link href={showcase.website} target="_blank">
                    {showcase.website}
                </Link>
            </Grid>
        </>
    )
}

export default ShowcaseTopContent;
