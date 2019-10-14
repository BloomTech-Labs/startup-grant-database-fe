import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { homeStyles } from "../styles/homeStyles";
import GrantList from "../components/grants/GrantList";
import Filters from "../components/Filters";
import GrantShowcase from "../components/grants/GrantShowcase";
import MobileTabs from "../components/mobile/MobileTabs";
import SearchBar from "../components/SearchBar";
import Grid from "@material-ui/core/Grid";
import TuneIcon from "@material-ui/icons/Tune";
import Navbar from "../components/Navbar";
import Media from "react-media";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MobileFilters from "../components/mobile/MobileFilters";

// delete this sometime

const Home = props => {
  const [isOpen, setIsOpen] = useState(false);
  //Show filters
  const [open, setOpen] = useState();
  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(!isOpen);
  };

  const toggleFilters = () => {
    setOpen(!open);
  };
  const classes = homeStyles();

  return (
    <>
      {/* <Navbar location={props.location.pathname} /> */}
      {/* <SearchBar /> */}
      <Media query="(max-width:850px)">
        {matches =>
          matches ? (
            <>
              <MobileTabs />
              <MobileFilters toggleDrawer={toggleDrawer} />
              <SwipeableDrawer
                anchor="bottom"
                open={isOpen}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
              >
                <Filters location={props.location.pathname} />
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
                  xs={12}
                  className={classes.grantList}
                  // style={{ padding: "30px 0 0 30px" }}
                >
                  {/* <div className={classes.scrollBox}> */}
                  <GrantList inAdmin={false} />
                  {/* </div> */}
                </Grid>
                <Grid
                  item
                  xs={6}
                  className={classes.gridItem}
                  // style={{ padding: "30px 30px 0 30px" }}
                >
                  <GrantShowcase />
                </Grid>
                <Grid item xs={4} md={2}>
                  <div
                    className={`${classes.filters} ${
                      open ? classes.showFilters : classes.hideFilters
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

export default Home;
