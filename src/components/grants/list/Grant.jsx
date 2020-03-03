import React, {useContext} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Card, Grid, Link, Typography} from "@material-ui/core";
import {ActionsContext} from "../../../context/ActionsContext";
import moment from "moment";
import {Logo} from "../Logo/Logo.jsx";
import {formatNumber} from "../../../utils/helpers";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
    grantCard: {
        textAlign: "center",
        marginBottom: "0.5rem",
        padding: "15px 15px",
        transition: "all .3s ease-in-out",
        fontFamily: "Nunito Sans",
        "&:hover": {
            boxShadow: "0 3px 6px #BBB",
            transform: "translateX(5px)"
        }
    },
    grantCardSelected: {
        padding: "15px 5px",
        borderLeft: "5px solid #3DB8B3",
        transform: "translateX(5px)"
    },
    grantNew: {
        background: "#EF7B5C",
        color: "#F7F7F7"
    },
    grantLayout: {
        minHeight: "125px"
    },
    grantInfo: {
        alignSelf: "stretch",
        margin: "0 20px",
        color: "#696969"
    },
    grantName: {
        fontWeight: 500,
        fontFamily: "Roboto",
        color: "#222222",
        textAlign: "right"
    },
    grantSubInfo: {
        fontStyle: "italic"
    },
    logo: {
        marginTop: "10%"
    }
}));

function Grant({grant, showcase}) {
    const classes = useStyles();
    const actions = useContext(ActionsContext);

    function selectGrant() {
        actions.grants.selectGrant(grant);
    }

    const isSelected = () => grant.id === showcase.id;
    const isNotReviewed = () => !grant.is_reviewed;

    return (
        <Card
            className={clsx(
                classes.grantCard,
                isSelected() && classes.grantCardSelected,
                isNotReviewed() && classes.grantNew
            )}
            onClick={selectGrant}
        >
            <Grid container direction="row" alignItems="flex-start">
                <Grid item xs zeroMinWidth className={classes.logo}>
                    <Logo/>
                </Grid>
                <Grid
                    container
                    justify="space-between"
                    alignItems="flex-end"
                    className={classes.grantLayout}
                >
                    <Grid
                        container
                        direction="column"
                        alignItems="flex-end"
                        justify="space-between"
                        className={clsx(
                            classes.grantInfo,
                            isNotReviewed() && classes.grantNew
                        )}
                    >
                        <Typography
                            variant="subtitle1"
                            className={clsx(
                                classes.grantName,
                                isNotReviewed() && classes.grantNew
                            )}
                        >
                            {grant.competition_name}
                        </Typography>
                        <Grid item>
                            <Typography>
                                <Link href={grant.website}>
                                    {grant.website.substring(0, 30)}
                                </Link>
                            </Typography>
                        </Grid>
                        <Typography variant="subtitle1">
                            {`Deadline - `}
                            <span className={classes.grantSubInfo}>
                {grant.most_recent_application_due_date
                    ? `${moment(grant.most_recent_application_due_date).format(
                        "MMMM Do YYYY"
                    )}`
                    : "See website for details"}
              </span>
                        </Typography>
                        <Grid item>
                            <Typography>
                                {`Amount - `}
                                <span className={classes.grantSubInfo}>
                  {grant.amount
                      ? `$${formatNumber(grant.amount)}`
                      : "See website for details."}
                </span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Card>
    );
}

export default Grant;
