import React, { useContext, useEffect, useState } from "react";
import { ActionsContext } from "../../context/ActionsContext";
import { useAuth0 } from "../auth0/Auth0Wrapper";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, Grid, Paper, Typography, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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
  }
}));

const initialData = {
  first_name: "",
  last_name: "",
  role: "",
  phone: "",
  company: "",
  company_url: "",
  about: ""
};

const titles = [
  "First Name",
  "Last Name",
  "Role",
  "Phone Number",
  "Name of Project",
  "Project Link",
  "About Project"
];

export const UserData = props => {
  const actions = useContext(ActionsContext);
  const { token, currentUser } = useSelector(state => state.user);
  const [data, setData] = useState({});
  const styles = useStyles();

  useEffect(() => {
    const checkCurrentUser = async () => {
      if (!currentUser.user_metadata) {
        await actions.user.updateUser(token, initialData);
        setData(initialData);
      } else {
        setData(currentUser.user_metadata);
      }
    };
    checkCurrentUser();
  }, []);

  return (
    <React.Fragment>
      <Paper>
        <Typography variant="h5">Change Account Settings</Typography>
        <Typography variant="h6">Personal Details:</Typography>
        <Divider variant="middle" />
        <Grid container spacing={6} className={styles.formContainer}>
          {Object.keys(initialData).map((key, i) => (
            <Grid item xs={6} key={key}>
              <Typography className={styles.subtitle}>
                {`${titles[i]}:`}
              </Typography>
              <Typography>{data[key]}</Typography>
            </Grid>
          ))}
        </Grid>
        <Link to="/mailinglist">
          <Button variant="outlined" color="secondary">
            Notify Me When New Grants Are Available
          </Button>
        </Link>
      </Paper>
    </React.Fragment>
  );
};
