import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { useAuth0 } from "../react-auth0-wrapper";
import Media from "react-media";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { textAlign } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  navButton: {
    marginRight: theme.spacing(3),
    color: "#000"
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    marginLeft: "20px",
    color: "#000",
    [theme.breakpoints.down("sm")]: {
      margin: "0"
    }
  },
  navbar: {
    background: "#fff",
    flexGrow: 1,
    marginBottom: "2em",
    padding: "0 4em",
    [theme.breakpoints.down("sm")]: {
      padding: "0"
    }
  },
  log: {
    color: "#fff"
  }
}));

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(!open);
  };
  const classes = useStyles();

  return (
    <AppBar className={classes.navbar} color="primary" position="sticky">
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          Grantly
        </Typography>
        {/* <NavLink to="/">
          <Button className={classes.navButton} color="inherit">
            HOME
          </Button>
        </NavLink>
        <Button className={classes.navButton} color="inherit">
          ABOUT
        </Button>
        <NavLink to="/form">
          <Button className={classes.navButton} color="inherit">
            Submit a Grant
          </Button>
        </NavLink>
        <Button className={classes.navButton} color="inherit">
          SIGN UP
        </Button>

        {!isAuthenticated && (
          <Button
            className={classes.log}
            variant="contained"
            color="primary"
            onClick={() => loginWithRedirect({})}
          >
            Log in
          </Button>
        )}

        {isAuthenticated && (
          <Button variant="outlined" onClick={() => logout()}>
            Log out
          </Button>
        )} */}
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
