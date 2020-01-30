import React, { useState, useEffect } from "react";
import Media from "react-media";
import {connect, useSelector} from "react-redux";

// Styling
import { homeStyles } from "../styles/homeStyles";

// Material UI
import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import TuneIcon from "@material-ui/icons/Tune";

// components
// import Navbar from "../components/Navbar";
import Filters from "../components/Filters";
import GrantList from "../components/grants/GrantList";
import GrantShowcase from "../components/grants/GrantShowcase";
import MobileTabs from "../components/mobile/MobileTabs";
// import SearchBar from "../components/SearchBar";
import MobileFilters from "../components/mobile/MobileFilters";

import { favoriteFetchApi } from "../actions";
import NewFilters from "../components/filter/NewFilters";
// delete this sometime

const Home = props => {
  const [isOpen, setIsOpen] = useState(false);
  const {grants} = useSelector(state => state.grants);
  console.log("Home", grants);
  //Show filters
  const [filterOpen, setFilterOpen] = useState();
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleFilters = () => {
    setFilterOpen(!filterOpen);
  };

  const classes = homeStyles();


  // useEffect(() => {
  //   props.favoriteFetchApi(props.currentUser);
  // }, [props.currentUser]);

  return (
    <>
      {/* <Navbar location={props.location.pathname} /> */}
      {/* <SearchBar /> */}
      <Media query="(max-width:900px)">
        {matches =>
          matches ? (
            <>
              <MobileTabs
                history={props.history}
                inGrants={true}
                grant={props.grants}
                currentUser={props.currentUser}
              />
              <MobileFilters toggleDrawer={toggleDrawer} />
              <SwipeableDrawer
                anchor="bottom"
                open={isOpen}
                onClose={() => toggleDrawer()}
                onOpen={() => toggleDrawer()}
              >
                <NewFilters location={props.location.pathname} mobile={true} />
              </SwipeableDrawer>
            </>
          ) : (
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="flex-start"
              spacing={2}
              className={classes.homeGridContainer}
            >
              <Grid item md={4} xs={4} className={classes.grantList}>
                <GrantList inAdmin={false} location={props.location} />
              </Grid>
              <Grid item xs={6} sm={9} md={7} className={classes.gridItem}>
                <GrantShowcase
                  inGrants={true}
                  grant={props.grant}
                  currentUser={props.currentUser}
                  favorites={[]} // Remove
                />
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
                  <NewFilters location={props.location.pathname} />
                </div>
              </Grid>
            </Grid>
          )
        }
      </Media>
    </>
  );
};
const mapStateToProps = state => {
  // console.log("GrantShowcase mapStateToProps state", state);
  return {
    grant: state.grantShowcase,
    isFetching: state.isFetching,
    favorites: state.favorites
  };
};
export default connect(mapStateToProps, { favoriteFetchApi })(Home);
