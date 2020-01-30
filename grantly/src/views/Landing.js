import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchApi } from "../actions/index";

// Styling
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
// import { flexbox } from "@material-ui/system";
import { landingStyles } from "../styles/landingStyles";

// Components
import Filter from "../components/Filters";
import NewFilters from "../components/filter/NewFilters";

function Landing(props) {

  const classes = landingStyles();

  return (
    <div className={classes.container}>
      <Grid
        className={classes.grid}
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item md={6} xs={12}>
          <div className={classes.welcome}>
            <h1>Welcome to Founder Grants</h1>
            <p>
              Search lists for grants by choosing a category or as many as you
              are eligible for.
            </p>
            <Link to="/grants" className={classes.link}>
              <Button
                className={classes.button}
                variant="outlined"
                color="primary"
              >
                View All Grants
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <NewFilters location={props.location.pathname} />
        </Grid>
      </Grid>
    </div>
  );
}

export default connect(
  null,
  { fetchApi }
)(Landing);
