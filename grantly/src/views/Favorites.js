import React, { useState } from "react";
import Media from "react-media";

// Stlying
import { homeStyles } from "../styles/homeStyles";
import Grid from "@material-ui/core/Grid";
import TuneIcon from "@material-ui/icons/Tune";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

// Components
import FavoritesList from "../components/grants/FavoritesList";
import Filters from "../components/Filters";
import GrantShowcase from "../components/grants/GrantShowcase";
import MobileFilters from "../components/mobile/MobileFilters";
import MobileTabs from "../components/mobile/MobileTabs";
// import MobileTabs from "../components/mobile/MobileTabs";
// import SearchBar from "../components/SearchBar";
// import Navbar from "../components/Navbar";

const Favorites = props => {
  const [isOpen, setIsOpen] = useState(false);
  //Show filters
  const [open, setOpen] = useState();
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleFilters = () => {
    setOpen(!open);
  };
  const classes = homeStyles();
  return (
    <div>
      <Media query="(max-width:850px)">
        {matches =>
          matches ? (
            <>
              <MobileTabs
                inAdmin={false}
                inUser={true}
                history={props.history}
              />
              <MobileFilters toggleDrawer={toggleDrawer} />
              <SwipeableDrawer
                anchor="bottom"
                open={isOpen}
                onClose={() => toggleDrawer()}
                onOpen={() => toggleDrawer()}
              >
                <Filters
                  location={props.location.pathname}
                  mobile={true}
                  inAdmin={false}
                  inFavorite={true}
                />
              </SwipeableDrawer>
            </>
          ) : (
            <Grid
              container
              direction="row"
              justify="space-between"
              className={classes.gridContainer}
            >
              <Grid item xs={6} md={3} className={classes.grantList}>
                <FavoritesList
                  inFavorite={true}
                  history={props.history}
                  currentUser={props.currentUser}
                />
              </Grid>
              <Grid item xs={6} className={classes.gridItem}>
                <GrantShowcase
                  inAdmin={false}
                  history={props.history}
                  inFavorite={true}
                />
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
                  <Filters
                    inAdmin={false}
                    location={props.location.pathname}
                    inFavorite={true}
                  />
                </div>
              </Grid>
            </Grid>
          )
        }
      </Media>
    </div>
  );
};

export default Favorites;
