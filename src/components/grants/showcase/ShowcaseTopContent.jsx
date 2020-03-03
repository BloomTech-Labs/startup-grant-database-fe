import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {CardHeader, Grid, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import IconDisplay from "./IconDisplay";
import {ReactComponent as DefaultLogo} from "../Logo/defaultGrantLogo.svg";
import WebsiteUrl from "./WebsiteUrl";
import {useAuth0} from "../../auth0/Auth0Wrapper";

const useStyles = makeStyles(theme => ({
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
    },
    website: {
        fill: "#696969",
        overflow: "none"
    }
}));

function ShowcaseTopContent({showcase}) {
    const {isAuthenticated} = useAuth0();
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
                <Grid item>
                    <CardHeader
                        avatar={showcase.use_logo ? <img src={showcase.logo} alt='Logo'/> : <DefaultLogo/>}
                        title={<Typography variant="h5"
                                           className={classes.grantName}>{showcase.competition_name}</Typography>}
                    />
                </Grid>
            </Grid>
            <Grid container justify="space-between" alignItems="center">
                <Grid item xs={8}>
                    <WebsiteUrl website={showcase}/>
                </Grid>
                <Grid item xs={4}>
                    {isAuthenticated && (
                        <IconDisplay
                            favoriteGrants={favoriteGrants}
                            id={showcase.id}
                            existingFavorite={existingFavorite}
                        />
                    )}
                </Grid>
            </Grid>
        </>
    );
}

export default ShowcaseTopContent;
