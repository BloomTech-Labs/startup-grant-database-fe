import React from "react";
import {Avatar, Divider, Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    formContainer: {
        padding: "0 8em 2em 8em",
        [theme.breakpoints.down("sm")]: {
            padding: "2em"
        }
    },
    layout: {
        [theme.breakpoints.down("sm")]: {
            padding: "2em 0"
        }
    },
    subtitle: {
        fontWeight: "600",
        padding: "0.5em 0em"
    },
    card: {
        justifyContent: "center"
    },
    avatar: {
        paddingLeft: "2em"
    }
}));

const titles = [
    "First Name",
    "Last Name",
    "Role",
    "Phone Number",
    "Name of Project",
    "Project Link",
    "About Project"
];

export const UserData = ({data, initialData, currentUser}) => {
    const styles = useStyles();
    return (
        <React.Fragment>
            <Paper className={styles.card}>
                <Avatar src={currentUser.picture} className={styles.avatar}></Avatar>
                <Typography variant="h6" className={styles.title}>
                    {currentUser.nickname}'s Profile
                </Typography>
                <Divider variant="middle"/>
                <Grid container spacing={6} className={styles.formContainer}>
                    {Object.keys(initialData).map((key, i) => (
                        <Grid item xs={12} key={key}>
                            <Typography className={styles.subtitle}>
                                {`${titles[i]}:`}
                            </Typography>
                            <Typography>{data[key]}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </React.Fragment>
    );
};
