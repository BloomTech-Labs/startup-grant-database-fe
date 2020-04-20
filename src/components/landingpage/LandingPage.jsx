import React, { useContext, useEffect } from "react";
import Welcome from "./Welcome";
import Filters from "../filter/Filters";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import { ActionsContext } from "../../context/ActionsContext";
import { Helmet } from "react-helmet";
import Alert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";
import { useAuth0 } from "../auth0/Auth0Wrapper";

const components = [
  {
    key: "Welcome",
    component: Welcome,
    props: {},
  },
  {
    key: "Filters",
    component: Filters,
    props: {
      landing: true,
    },
    banana: "filters",
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(10),
    },
  },
  grid: {
    maxWidth: "100%",
    minHeight: "calc(100vh - 160px)",
    [theme.breakpoints.down("sm")]: {
      minHeight: "calc(100vh - 193px)",
      flexDirection: "column",
      padding: theme.spacing(1),
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: "calc(100vh - 306px)",
    },
  },
}));

function LandingPage() {
  const classes = useStyles();
  const actions = useContext(ActionsContext);
  const numberOfGrants = useSelector((state) => state.grants.grants.length);
  const { currentUser, isLoading } = useSelector((state) => state.user);
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  useEffect(() => {
    if (numberOfGrants === 0) {
      actions.grants.fetchGrants();
    }
  }, [numberOfGrants]);

  return (
    <div className={classes.container}>
      {isAuthenticated && (
        <Link to="/settings">
          <Alert severity="success" color="success" variant="filled">
            Hello, welcome to FG. Fill out your user profile, and we might be
            able to help connect you with the resources you need to be awesome.
          </Alert>
        </Link>
      )}

      {!isAuthenticated && (
        <Link onClick={() => loginWithRedirect()}>
          <Alert severity="info" color="success" variant="filled">
            Hello, welcome to Founder Grants. Creating a free account will set
            you up with the resources you need to grow your project.
          </Alert>
        </Link>
      )}
      <Helmet>
        <title>Founder Grants</title>
        <meta
          name="description"
          content="Find your startup grant, browse by type, region, amount!"
        />
        <meta
          name="keywords"
          content="grant,startup,funding,invest,financing"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Startup Grant Database" />
      </Helmet>
      <Grid
        className={classes.grid}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        {components.map(({ component: Component, props, key, banana }) => (
          <Grid key={key} item md={6} xs={12}>
            <Component {...props} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default LandingPage;
