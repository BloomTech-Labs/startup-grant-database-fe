import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GrantList from "../components/grants/GrantList";
import Filters from "../components/Filters";
import GrantShowcase from "../components/grants/GrantShowcase";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";
import Media from "react-media";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  }
}));
const Home = props => {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Media query="(max-width:850px)">
        {matches =>
          matches ? null : (
            <div>
              <Grid container spacing={6} className={classes.root}>
                <Grid item md={4} xs={12}>
                  <GrantList />
                </Grid>
                <Grid item xs={6}>
                  <GrantShowcase />
                </Grid>
                <Grid item xs={2}>
                  <Filters location={props.location.pathname} />
                </Grid>
              </Grid>
            </div>
          )
        }
      </Media>
    </>
  );
};

export default Home;
