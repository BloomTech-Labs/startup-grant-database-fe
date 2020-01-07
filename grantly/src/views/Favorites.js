import React, { useState, useEffect } from "react";
import Media from "react-media";
import { connect } from "react-redux";

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
import DeleteIcon from "@material-ui/icons/Delete";
import { favoriteFetchApi } from "../actions";
const Favorites = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorites, setIsFavorites] = useState(false);
  //Show filters
  const [open, setOpen] = useState();
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleFilters = () => {
    setOpen(!open);
  };
  const classes = homeStyles();
  const ifFavorite = function() {
    if (props.favorites === null) {
      return false;
    }
  };
  // const favCheck = props.favorites.legnth > 0 ? true : false;
  // const favCheck = props.favoriteShowcase.legnth === null ? false : true;
  useEffect(() => {
    props.favoriteFetchApi(props.currentUser);

    // if (props.favorites.length > 0) {
    //   setIsFavorites = true;
    // }
  }, [props.currentUser]);
  console.log("propsje", props.favorites.legnth);
  return (
    <div>
      {ifFavorite ? (
        <div>
          <Media query="(max-width:850px)">
            {matches =>
              matches ? (
                <>
                  <MobileTabs
                    inFavorite={true}
                    history={props.history}
                    favorites={props.favorites}
                    currentUser={props.currentUser}
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
                      history={props.history}
                      inFavorite={true}
                      grant={props.favoriteShowcase}
                      currentUser={props.currentUser}
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
      ) : (
        <div>
          <Grid
            container
            direction="row"
            justify="space-between"
            className={classes.gridContainer}
          >
            <Grid item xs={6} className={classes.gridItem}>
              <h1>Please Add Favorites</h1>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  // console.log("GrantShowcase mapStateToProps state", state);
  return {
    favoriteShowcase: state.favoriteShowcase,
    favorites: state.favorites
  };
};
export default connect(mapStateToProps, { favoriteFetchApi })(Favorites);
