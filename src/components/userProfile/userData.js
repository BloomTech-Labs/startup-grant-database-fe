import React from "react";
import { Divider, Grid, Paper, Typography, Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

const useStyles = makeStyles(theme => ({
  formContainer: {
    padding: "1em 8em 2em 8em",
    [theme.breakpoints.down("sm")]: {
      padding: "2em"
    }
  },
  layout: {
    [theme.breakpoints.down("sm")]: {
      padding: "4em 0"
    }
  },
  title: {
    paddingTop: "1.5em"
  },
  subtitle: {
    fontWeight: "600",
    paddingTop: "1.5em",
    paddingBottom: "0.5em"
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

export const UserData = ({ data, initialData, currentUser }) => {
  const styles = useStyles();
  console.log(initialData);
  return (
    <React.Fragment>
      <Paper className={styles.card}>
        <Avatar src={currentUser.picture} className={styles.avatar}></Avatar>
        <Typography variant="h6">{currentUser.nickname}'s Profile</Typography>
        <Divider variant="middle" />
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
