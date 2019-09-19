import React from "react";
import Navbar from "../components/Navbar";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Filter from "../components/Filters";

const useStyles = makeStyles(theme => ({
  welcome: {
    "& h1": {
      fontSize: "3rem",
      fontFamily: "EB Garamond"
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
    textDecoration: "none"
  }
}));

function Landing(props) {
  const classes = useStyles();
  console.log("@#@#@#@#@--------LOCATION-----------", props);
  return (
    <div className={classes.container}>
      <Navbar />
      <Grid
        className={classes.grid}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={6}>
          <div className={classes.welcome}>
            <h1>Welcome to Founder Grants</h1>
            <p>
              Search lists for grants by choosing a category or as many as you
              are eligiable for.
            </p>
            <Link to="/" className={classes.link}>
              <Button variant="outlined" color="primary">
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

export default Landing;
