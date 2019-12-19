import React, { useState } from "react";
import Media from "react-media";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import { homeStyles } from "../styles/homeStyles";
import Grid from "@material-ui/core/Grid";
import TuneIcon from "@material-ui/icons/Tune";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

// components
import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import GrantList from "../components/grants/GrantList";
import GrantShowcase from "../components/grants/GrantShowcase";
import MobileTabs from "../components/mobile/MobileTabs";
import SearchBar from "../components/SearchBar";
import MobileFilters from "../components/mobile/MobileFilters";

// delete this sometime

const Favorites = props => {
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
            <div>
              <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                className={classes.gridContainer}
              >
                <Grid
                  item
                  md={4}
                  xs={4}
                  className={classes.grantList}
                  // style={{ padding: "30px 0 0 30px" }}
                >
                  {/* <div className={classes.scrollBox}> */}
                  <GrantList inAdmin={false} location={props.location} />
                  {/* </div> */}
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={9}
                  md={7}
                  className={classes.gridItem}
                  // style={{ padding: "30px 30px 0 30px" }}
                >
                  <GrantShowcase />
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
            </div>
          )
        }
      </Media>
    </>
  );
};

export default Favorites;
