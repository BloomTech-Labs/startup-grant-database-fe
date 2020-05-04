import React, { useContext, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { ActionsContext } from "../../context/ActionsContext";
import GrantShowcase from "./GrantShowcase";
import GrantList from "./list/GrantList";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Filters from "../filter/Filters";
import clsx from "clsx";
import { useAuth0 } from "../auth0/Auth0Wrapper";
import Alert from "@material-ui/lab/Alert";
import { Helmet } from "react-helmet";
import ResponsiveDialog from "./nonUserModal";

const useStyles = makeStyles((theme) => ({
  homeGridContainer: {
    minHeight: "76vh",
    maxHeight: "84vh",
    margin: "0",
    flexWrap: "nowrap",
    overflowX: "hidden",
    overflowY: "auto",
    [theme.breakpoints.down("sm")]: {
      background: "#f7f7f7",
    },
  },
  grantList: {
    maxHeight: "84vh",
    height: "auto",
    overflow: "auto",
    position: "relative",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      marginLeft: theme.spacing(3),
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(11),
      height: "100%",
      justifyContent: "center",
      flexDirection: "column",
    },
  },
  gridItem: {
    overflow: "auto",
    position: "relative",
    maxHeight: "84vh",
    minHeight: "76vh",
    padding: theme.spacing(2),
  },
  filters: {
    transition: "all .3s ease-in-out",
  },
  filterList: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  hideFilters: {
    transform: "translateX(110%)",
  },
  showFilters: {
    transform: "translateX(0)",
  },
}));

function GrantContainer(props) {
  const { isAuthenticated } = useAuth0();
  const grants = useSelector((state) => state.filters.grants);
  const { pristine } = useSelector((state) => state.filters);
  const allGrants = useSelector((state) => state.grants.grants);
  const { favoriteGrants } = useSelector((state) => state.user);
  const { showcase, publicGrants } = useSelector((state) => state.grants);
  const actions = useContext(ActionsContext);
  const [allGrantMode, setAllGrantMode] = useState(() => {
    return props.match.path === "/grants";
  });
  const [filtersOpen, setFiltersOpen] = useState(false);
  // if (allGrantMode) {
  //   if (isAuthenticated) {
  //     return allFilteredGrants;
  //   } else {
  //     return publicGrants;
  //   }
  // } else {
  //   return favoriteGrants;
  // }
  //});

  const classes = useStyles();

  useEffect(() => {
    if (allGrantMode) {
      if (isAuthenticated) {
        actions.filters.grantFilter(allGrants);
      } else {
        // public grants was removed for UX reasons

        actions.filters.grantFilter(allGrants);
      }
    } else {
      actions.filters.grantFilter(favoriteGrants);
    }
  }, [pristine]);

  useEffect(() => {
    setAllGrantMode(props.match.path === "/grants");
  }, [props.match.path]);

  if (!showcase) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Helmet>
        <title>Founder Grants | Grants</title>
        <meta name="description" content="Detail view of an available grant" />
        <meta
          name="keywords"
          content="grant,startup,funding,invest,financing"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Startup Grant Database" />
      </Helmet>

      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="flex-start"
        className={classes.homeGridContainer}
      >
        <Grid item xs={12} md={4} className={classes.grantList}>
          {!isAuthenticated && <ResponsiveDialog />}
          {isAuthenticated && (
            <Link to="/mailinglist">
              <Alert severity="success" color="success" variant="filled">
                Get notified when new grants get added!
              </Alert>
            </Link>
          )}
          <GrantList grants={grants} showcase={showcase} />
        </Grid>
        <Grid item md={6} className={classes.gridItem}>
          <GrantShowcase showcase={showcase} />
        </Grid>

        <Grid item md={2} className={classes.filterList}>
          <>
            <div className={clsx(classes.filters, classes.showFilters)}>
              <Filters grants={grants} />
            </div>
          </>
        </Grid>
      </Grid>
    </>
  );
}

export default GrantContainer;
