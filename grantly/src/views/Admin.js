import React, { useState } from "react";
import Media from "react-media";

// Stlying 
import { adminStyles } from "../styles/adminStyles";
import Grid from "@material-ui/core/Grid";
import TuneIcon from "@material-ui/icons/Tune";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

// Components
import GrantList from "../components/grants/GrantList";
import Filters from "../components/Filters";
import GrantShowcase from "../components/grants/GrantShowcase";
import SuggestionList from "../components/SuggestionList";
import MobileFilters from "../components/mobile/MobileFilters";
import MobileTabs from "../components/mobile/MobileTabs";
import AdminDialog from "../components/dialogs/AdminDialog";
// import MobileTabs from "../components/mobile/MobileTabs";
// import SearchBar from "../components/SearchBar";
// import Navbar from "../components/Navbar";

const Admin = props => {
  const [isOpen, setIsOpen] = useState(false);
  //Show filters
  const [open, setOpen] = useState();
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const toggleFilters = () => {
    setOpen(!open);
  };
  const classes = adminStyles();
  return (
    <div>
      <Media query="(max-width:850px)">
        {matches =>
          matches ? (
            <>
              <MobileTabs inAdmin={true} history={props.history} />
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
                  inAdmin={true}
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
                <GrantList inAdmin={true} history={props.history} />
              </Grid>
              <Grid item xs={6} className={classes.gridItem}>
                <GrantShowcase inAdmin={true} history={props.history} />
                <AdminDialog />
                <SuggestionList />
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
          )
        }
      </Media>
    </div>
  );
};

export default Admin;
