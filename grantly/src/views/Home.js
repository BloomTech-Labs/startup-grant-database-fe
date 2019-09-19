import React from "react";
import GrantList from "../components/grants/GrantList";
import Filters from "../components/Filters";
import GrantShowcase from "../components/grants/GrantShowcase";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";

const Home = props => {
  return (
    <>
      {/* I added the Navbar here, so the home view is all in one place -PJ */}
      <Navbar />
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <GrantList />
        </Grid>
        <Grid item xs={6}>
          <GrantShowcase />
        </Grid>
        <Grid item xs={2}>
          <Filters location={props.location.pathname} />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
