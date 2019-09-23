import React from "react";
import { connect } from "react-redux";
import Navbar from "../components/Navbar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Filter from "../components/Filters";
import { fetchApi } from "../actions/index";

const useStyles = makeStyles(theme => ({
  welcome: {
    "& h1": {
      fontSize: "3.5rem",
      fontFamily: "adobe-garamond-pro",
      fontWeight: 400,
      margin: "1rem",
      padding: "30px"
    }
  },
  grid: {
    maxWidth: "100%",
    height: "80%",
    zIndex: 0
  },
  container: {
    height: "100vh"
  },
  link: {
    textDecoration: "none",
    "& button": {
      fontFamily: "Roboto",
      marginTop: "35px"
    }
  }
}));

function Landing(props) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Navbar location={props.location.pathname} />
      <Grid
        className={classes.grid}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={4}
      >
        <Grid item xs={6}>
          <div className={classes.welcome}>
            <h1>Welcome to Founder Grants</h1>
            <p>
              Search lists for grants by choosing a category or as many as you
              are eligiable for.
            </p>
            <Link to="/grants" className={classes.link}>
              <Button
                variant="outlined"
                color="primary"
                size="Large"
              >
                View All Grants
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid item xs={6}>
          <Filter location={props.location.pathname} />
        </Grid>
      </Grid>
    </div>
  );
}

export default connect(
  null,
  { fetchApi }
)(Landing);
