import React from "react";
import {NavLink} from "react-router-dom"
import { useAuth0 } from "../react-auth0-wrapper";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { textAlign } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: "10px"
  },
  navButton: {
    marginRight: theme.spacing(3)
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    marginLeft: "20px"
  },
  navbar: {
    background: "#000"
  }
}));

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const { loading } = useAuth0();
  const classes = useStyles();

  // if (loading) {
  //   return <div>Loading...</div>;
  // }
  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} color="primary" position="static">
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h4" className={classes.title}>
            Grantly
          </Typography>
          <Button className={classes.navButton} color="inherit">
            <NavLink to="/">

            HOME
            </NavLink>
          </Button>
          <Button className={classes.navButton} color="inherit">
            ABOUT
          </Button>
          <Button className={classes.navButton} color="inherit">
            SIGN UP
          </Button>
          <div>
            {!isAuthenticated && (
              <Button
                className={classes.navButton}
                variant="contained"
                color="primary"
                onClick={() => loginWithRedirect({})}
              >
                Log in
              </Button>
            )}

            {isAuthenticated && (
              <Button
                className={classes.navButton}
                variant="outlined"
                color="primary"
                onClick={() => logout()}
              >
                Log out
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
