import React, { useState } from "react";
import GrantList from "../components/grants/GrantList";
import Filters from "../components/Filters";
import TuneIcon from "@material-ui/icons/Tune";

import GrantShowcase from "../components/grants/GrantShowcase";
import Suggestion from "../components/Suggestion";
// import MobileTabs from "../components/mobile/MobileTabs";
// import SearchBar from "../components/SearchBar";
import Grid from "@material-ui/core/Grid";
// import Navbar from "../components/Navbar";
// import Media from "react-media";
// import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
// import MobileFilters from "../components/mobile/MobileFilters";
import { adminStyles } from "../styles/adminStyles";

const Admin = props => {
  // const [isOpen, setIsOpen] = useState(false);
  //Show filters
  const [open, setOpen] = useState();
  // const toggleDrawer = open => event => {
  //   console.log("toggle");
  //   if (
  //     event &&
  //     event.type === "keydown" &&
  //     (event.key === "Tab" || event.key === "Shift")
  //   ) {
  //     return;
  //   }

  //   setIsOpen(!isOpen);
  // };

  const toggleFilters = () => {
    setOpen(!open);
  };
  const classes = adminStyles();

  return (
    <div>
      {/* <Navbar location={props.location.pathname} /> */}

      <Grid
        container
        direction="row"
        justify="space-between"
        className={classes.gridContainer}
      >

        <Grid item xs={6} md={3} className={classes.grantList}>
          <GrantList inAdmin={true}  />
        </Grid>
        <Grid item xs={8} className={classes.gridItem}>
          <GrantShowcase inAdmin={true} history={props.history} />
    <Suggestion />

        </Grid>
        <Grid item xs={2}>
          <TuneIcon
            className={`${classes.filterIcon} ${open &&
              classes.filterIconSelected}`}
            onClick={toggleFilters}
          ></TuneIcon>
          <div
            className={`${classes.filters} ${
              open ? classes.showFilters : classes.hideFilters
            }`}
          >
            <Filters inAdmin={true} location={props.location.pathname} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Admin;
