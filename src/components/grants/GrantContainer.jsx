import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { ActionsContext } from "../../context/ActionsContext";
import GrantShowcase from "./GrantShowcase";
import GrantList from "./list/GrantList";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TuneIcon from "@material-ui/icons/Tune";
import Filters from "../filter/Filters";
import clsx from "clsx";
import {Helmet} from "react-helmet";
import { useAuth0 } from "../auth0/Auth0Wrapper";

const useStyles = makeStyles(theme => ({
  homeGridContainer: {
    minHeight: "76vh",
    margin: "0",
    flexWrap: "nowrap",
    overflowX: "hidden",
    [theme.breakpoints.down("sm")]: {
      background: "#f7f7f7"
    }
  },
  grantList: {
    maxHeight: "90vh",
    overflow: "auto",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      height: "100%",
      justifyContent: "center",
      flexDirection: "column",
      marginBottom: "600px"
    }
  },
  gridItem: {
    padding: "1em"
  },
  filterIcon: {
    position: "absolute",
    top: "8%",
    fill: "#BBB",
    right: "1%",
    padding: "10px",
    background: "#fff",
    width: "2em",
    height: "2em",
    borderRadius: "100px",
    zIndex: "1000",
    boxShadow:
      "0px 1px 0px 0px rgba(0,0,0,0.2), 0px 1px 0px 0px rgba(0,0,0,0.14), 0px 2px 0px -1px rgba(0,0,0,0.12)",
    "&:hover": {
      cursor: "pointer"
    }
  },
  filterIconSelected: {
    fill: "#3DB8B3",
    boxShadow:
      "0px 1px 0px 0px #3DB8B3, 0px 4px 0px 0px #3DB8B3, 0px 2px 0px -1px #3DB8B3"
  },
  filters: {
    transition: "all .3s ease-in-out"
  },
  hideFilters: {
    transform: "translateX(110%)"
  },
  showFilters: {
    transform: "translateX(0)"
  }
}));

function GrantContainer(props) {
  const { isAuthenticated } = useAuth0();
  const allGrants = useSelector(state => state.filters.grants);
  const { pristine } = useSelector(state => state.filters);
  const allTheGrants = useSelector(state => state.grants.grants);
  const { favoriteGrants } = useSelector(state => state.user);
  const { showcase, publicGrants } = useSelector(state => state.grants);
  const actions = useContext(ActionsContext);
  const [allGrantMode, setAllGrantMode] = useState(() => {
    return props.match.path === "/grants";
  });
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [grants, setGrants] = useState(() => {
    if (allGrantMode) {
      if (isAuthenticated) {
        return allGrants;
      } else {
        return publicGrants;
      }
    } else {
      return favoriteGrants;
    }
  });

  const classes = useStyles();

  useEffect(() => {
    if (isAuthenticated) {
      if (allGrantMode) {
        if (pristine && allGrants.length !== allTheGrants.length) {
          setGrants(allTheGrants);
        } else {
          if (allGrants.length !== grants.length) {
            setGrants(allGrants);
          }
        }
      } else {
        if (favoriteGrants.length !== grants.length) {
          setGrants(favoriteGrants);
        }
      }
    } else {
      setGrants(publicGrants);
      actions.grants.selectGrant(grants[0]);
    }
  }, [allGrants, favoriteGrants, allGrantMode, isAuthenticated, publicGrants]);

  useEffect(() => {
    setAllGrantMode(props.match.path === "/grants");
  }, [props.match.path]);

  const toggleFilters = () => setFiltersOpen(!filtersOpen);

  if (!showcase) {
    return <Redirect to="/" />;
  }
  return (
    <Grid
      container
      direction="row"
      justify="space-between"
      alignItems="flex-start"
      spacing={2}
      className={classes.homeGridContainer}
    >
      <Helmet>
        <title>Founder Grants | Grants</title>
        <meta name="description" content="Detail view of an available grant" />
        <meta name="keywords" content="grant,startup,funding,invest,financing" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Startup Grant Database"  />
      </Helmet>

      <Grid item xs={4} className={classes.grantList}>
        {console.log("Grants => ", grants)}
        <GrantList grants={grants} showcase={showcase} />
      </Grid>
      <Grid item xs={6} sm={9} md={7} className={classes.gridItem}>
        <GrantShowcase showcase={showcase} />
      </Grid>
      <Grid item xs={4} sm={2}>
        <TuneIcon
          className={clsx(
            classes.filterIcon,
            filtersOpen && classes.filterIconSelected
          )}
          onClick={toggleFilters}
        >
          Filters
        </TuneIcon>
        <div
          className={clsx(
            classes.filters,
            filtersOpen ? classes.showFilters : classes.hideFilters
          )}
        >
          <Grid item xs={4} className={classes.grantList}>
            <GrantList grants={grants} showcase={showcase} />
          </Grid>
          <Grid item xs={6} sm={9} md={7} className={classes.gridItem}>
            <GrantShowcase showcase={showcase} />
          </Grid>
          <Grid item xs={4} sm={2}>
            <TuneIcon
              className={clsx(
                classes.filterIcon,
                filtersOpen && classes.filterIconSelected
              )}
              onClick={toggleFilters}
            >
              Filters
            </TuneIcon>
            <div
              className={clsx(
                classes.filters,
                filtersOpen ? classes.showFilters : classes.hideFilters
              )}
            >
              <Filters grants={grants} />
            </div>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
}

export default GrantContainer;
