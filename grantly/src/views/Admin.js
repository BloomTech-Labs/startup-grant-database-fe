import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GrantList from "../components/grants/GrantList";
import Filters from "../components/Filters";
import GrantShowcase from "../components/grants/GrantShowcase";
import MobileTabs from "../components/mobile/MobileTabs";
import SearchBar from "../components/SearchBar";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";
import Media from "react-media";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MobileFilters from "../components/mobile/MobileFilters";
import SuggestionList from "../components/SuggestionList";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  gridContainer: {
    flexWrap: "nowrap"
  },
  gridItem: {
    padding: 30
  },
  root: {
    display: "flex"
  },
  toolbar: theme.mixins.toolbar
}));

const Admin = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = open => event => {
    console.log("toggle");
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(!isOpen);
  };
  const classes = useStyles();

  return (
    <div>
      {/* <Navbar location={props.location.pathname} /> */}

      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.gridContainer}
      >
        <Grid item xs={6} className={classes.gridItem}>
          <GrantList inAdmin={true} />
        </Grid>
        <Grid item xs={8} className={classes.gridItem}>
          <GrantShowcase />
          
          <SuggestionList />
        </Grid>
      </Grid>
    </div>
  );
};

export default Admin;
