import React, { useState } from "react";
import Media from "react-media";

// Styling
import { homeStyles } from "../styles/homeStyles";

// Material UI
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import TuneIcon from "@material-ui/icons/Tune";

// components
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import GrantList from "../components/grants/GrantList";
import GrantShowcase from "../components/grants/GrantShowcase";
import MobileTabs from "../components/mobile/MobileTabs";
import SearchBar from "../components/SearchBar";
import MobileFilters from "../components/mobile/MobileFilters";

// delete this sometime

const Home = props => {
  const [isOpen, setIsOpen] = useState(false);

  //Show filters
  const [filterOpen, setFilterOpen] = useState();
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleFilters = () => {
    setFilterOpen(!filterOpen);
  };

  const classes = homeStyles();

  return (
    <>
      {/* <Navbar location={props.location.pathname} /> */}
      {/* <SearchBar /> */}
      <Media query="(max-width:900px)">
        {matches =>
          matches ? (
            <>
              <MobileTabs history={props.history} />
              <MobileFilters toggleDrawer={toggleDrawer} />
              <SwipeableDrawer
                anchor="bottom"
                open={isOpen}
                onClose={() => toggleDrawer()}
                onOpen={() => toggleDrawer()}
              >
                <Filters location={props.location.pathname} mobile={true} />
              </SwipeableDrawer>
            </>
          ) : (
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
              className={classes.homeGridContainer}
            >
              <Grid item md={4} xs={4} className={classes.grantList}>
                <GrantList inAdmin={false} location={props.location} />
              </Grid>
              <Grid item xs={6} sm={9} md={7} className={classes.gridItem}>
                <GrantShowcase inGrants={true} />
              </Grid>
              <Grid item xs={4} sm={2} md={2}>
                <TuneIcon
                  className={`${classes.filterIcon} ${filterOpen &&
                    classes.filterIconSelected}`}
                  onClick={toggleFilters}
                >
                  Filters
                </TuneIcon>
                <div
                  className={`${classes.filters} ${
                    filterOpen ? classes.showFilters : classes.hideFilters
                  }`}
                >
                  <Filters location={props.location.pathname} />
                </div>
              </Grid>
            </Grid>
          )
        }
      </Media>
    </>
  );
};

export default Home;
