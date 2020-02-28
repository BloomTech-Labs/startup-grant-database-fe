import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Link, Typography, CardHeader} from "@material-ui/core";
import {useSelector} from "react-redux";
import LanguageIcon from "@material-ui/icons/Language";
import IconDisplay from "./IconDisplay";
import {ReactComponent as DefaultLogo} from "../Logo/defaultGrantLogo.svg";
import WebsiteUrl from "./WebsiteUrl";

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
        maxWidth: 535
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
                {/*{showcase.use_logo ? <img src={showcase.logo} alt='Logo'/> : <DefaultLogo/>}*/}
                <Grid item className={classes.title}>
                    <CardHeader
                        avatar={showcase.use_logo ? <img src={showcase.logo} alt='Logo'/> : <DefaultLogo/>}
                        title={<Typography variant="h5" className={classes.grantName}>{showcase.competition_name}</Typography>}
                        subheader={<WebsiteUrl website={showcase} />}
                    />
                </Grid>
                <Grid item>
                    <IconDisplay
                        favoriteGrants={favoriteGrants}
                        id={showcase.id}
                        existingFavorite={existingFavorite}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default ShowcaseTopContent;
