import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Link, Typography} from '@material-ui/core';
import {useSelector} from "react-redux";
import FavoritesIconButton from "./FavoritesIconButton";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import LanguageIcon from "@material-ui/icons/Language";

const useStyles = makeStyles(theme => ({
    topContent: {
        margin: "0"
    },
    showcaseHeader: {
        width: 'initial'
    },
    grantName: {
        fontWeight: 700,
        fontFamily: 'Nunito Sans',
        color: '#222222',
        marginBottom: '15px'
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
            <Grid
                container
                direction='row'
                justify='space-between'
                alignItems='center'
                className={classes.topContent}
            >
                <Grid
                    container
                    alignItems='center'
                    className={classes.showcaseHeader}
                >
                    <Grid item>
                        <Typography
                            className={classes.grantName}
                            variant='h5'
                        >
                            {showcase.competition_name}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    {favoriteGrants.length > 0 && existingFavorite.length ? (
                        <FavoritesIconButton
                            title='In Favorites'
                            label='added to favorites'
                            icon={BookmarkIcon}
                        />
                    ) : (
                        <FavoritesIconButton
                            title='Add to Favorites'
                            label='save'
                            icon={BookmarkBorderOutlinedIcon}
                            button
                            id={showcase.id}
                            favoriteId={showcase.favoriteId}
                        />
                    )}
                </Grid>
                <Grid item>
                    {existingFavorite.length > 0 &&
                    <FavoritesIconButton
                        title="Delete Favorites"
                        label="DeleteIcon"
                        button
                        icon={DeleteIcon}
                        id={existingFavorite[0].id}
                        removeFavorite
                    />}
                </Grid>
            </Grid>
            <Grid
                container
                justify='flex-start'
                alignItems='flex-end'
                alignContent='flex-end'
            >
                <LanguageIcon className={classes.website}/>
                <Link href={showcase.website} target="_blank">
                    {showcase.website}
                </Link>
            </Grid>
        </>
    )
}

export default ShowcaseTopContent;
