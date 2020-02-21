import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Link, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import LanguageIcon from "@material-ui/icons/Language";
import IconDisplay from "./IconDisplay";
import {ReactComponent as DefaultLogo} from "../Logo/defaultGrantLogo.svg";

const useStyles = makeStyles(theme => ({
    title: {
        maxWidth: "300px"
    },
    topContent: {
        margin: "0"
    },
    showcaseHeader: {
        width: "inherit"
    },
    grantName: {
        fontWeight: 700,
        fontFamily: "Nunito Sans",
        color: "#222222",
        marginBottom: theme.spacing(2),
        padding: theme.spacing(2, 0, 0, 0)
    },
    website: {
        fill: "#696969",
        marginRight: ".2rem",
        fontSize: "1.2rem",
        overflow: "none"
    }
}));

function ShowcaseTopContent({showcase}) {
    const [website, setWebsite] = useState(() => showcase.website);
    const {favoriteGrants} = useSelector(state => state.user);
    const existingFavorite = favoriteGrants.filter(fav => fav.id === showcase.id);
    const classes = useStyles();
    useEffect(() => {
        if (website !== showcase.website) {
            setWebsite(showcase.website);
        }
    }, [showcase]);
    return (
        <>
            <Grid container justify="space-between" alignItems="center">
                {showcase.use_logo ? <img src={showcase.logo} alt='Logo'/> : <DefaultLogo/>}
                <Grid item className={classes.title}>
                    <Typography variant="h5" className={classes.grantName}>
                        {showcase.competition_name}
                    </Typography>
                </Grid>
                <Grid item>
                    <IconDisplay
                        favoriteGrants={favoriteGrants}
                        id={showcase.id}
                        existingFavorite={existingFavorite}
                    />
                </Grid>
            </Grid>
            <Grid
                container
                justify="flex-start"
                alignItems="flex-end"
                alignContent="flex-end"
            >
                <LanguageIcon className={classes.website}/>
                <Link href={showcase.website} target="_blank">
                    {showcase.website}
                </Link>
            </Grid>
        </>
    );
}

export default ShowcaseTopContent;
