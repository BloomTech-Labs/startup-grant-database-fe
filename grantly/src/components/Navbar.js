import React from "react";

import { NavLink, Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-wrapper";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(theme => ({
  navButton: {
    marginRight: theme.spacing(3),
    color: "#000"
  },
  title: {
    textAlign: "left",
    marginLeft: "20px",
    color: "#000",
    fontFamily: "EB Garamond"
  },
  titleLink: {
    flexGrow: 1,
    textDecoration: "none"
  },
  navbar: {
    background: "#fff",
    flexGrow: 1,
    marginBottom: "2em",
    padding: "0 4em"
  },
  log: {
    color: "#fff"
  },
  link: {
    textDecoration: "none"
  }
}));

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  const classes = useStyles();

  return (
    <AppBar className={classes.navbar} color="primary" position="sticky">
      <Toolbar>
        {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
        <Link to="/grants" className={classes.titleLink}>
          <Typography variant="h4" className={classes.title}>
            Founder Grants
          </Typography>
        </Link>
        <NavLink className={classes.link} to="/grants">
          <Button className={classes.navButton} color="inherit">
            HOME
          </Button>
        </NavLink>
        <Button className={classes.navButton} color="inherit">
          ABOUT
        </Button>
        <NavLink className={classes.link} to="/form">
          <Button className={classes.navButton} color="inherit">
            Submit a Grant
          </Button>
        </NavLink>
        <NavLink className={classes.link} to="/">
          <Button className={classes.navButton} color="inherit">
            SIGN UP
          </Button>
        </NavLink>

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
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
