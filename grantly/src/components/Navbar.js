import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { NavLink, Link } from "react-router-dom";
import { useAuth0 } from "../react-auth0-wrapper";
import { navStyles } from "../styles/navStyles";
import Media from "react-media";
import MobileTabs from "./mobile/MobileTabs";

// Material core imports

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Divider,
  SwipeableDrawer
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

export const NavBar = props => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    getTokenSilently
  } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
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
  const classes = navStyles();
  const callApi = async () => {
    try {
      const token = await getTokenSilently();

      const response = await fetch("/api/external", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // console.log("AUTH *****************", token);
      const responseData = await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  //If user is logged in call to get access token
  {
    isAuthenticated && callApi();
  }
  const sideList = side => (
    <div
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
      className={classes.drawer}
    >
      {" "}
      <ul className={classes.links}>
        <Link to="/" className={classes.drawerLink}>
          <Typography variant="h5">ABOUT</Typography>
        </Link>
        <a href="mailto:labs16grantly@gmail.com" className={classes.drawerLink}>
          <Typography variant="h5">CONTACT</Typography>
        </a>
        <a href="https://www.1517fund.com/" className={classes.drawerLink}>
          <Typography variant="h5">1517 FUND</Typography>
        </a>
        <Typography
          className={classes.drawerLink}
          variant="h5"
          onClick={() => loginWithRedirect({})}
        >
          ADMIN LOGIN
        </Typography>
      </ul>
      <Divider />
      {isAuthenticated && (
        <Button
          className={classes.log}
          variant="outlined"
          onClick={() => logout()}
        >
          Log out
        </Button>
      )}
    </div>
  );
  // console.log("************************", user);
  return (
    <AppBar className={classes.navbar} color="primary" position="sticky">
      <Toolbar>
        <Link to="/" className={classes.titleLink}>
          <Typography variant="h4" className={classes.title}>
            Founder Grants
          </Typography>
        </Link>
        <Media query="(min-width:800px)">
          <div>
            <NavLink to="/grants" className={classes.link}>
              <Button className={classes.navButton} color="inherit">
                Grants
              </Button>
            </NavLink>
            {/* <Button className={classes.navButton} color="inherit">
              ABOUT
            </Button> */}
            {!isAuthenticated && (
              <Button
                className={classes.navButton}
                color="inherit"
                onClick={() => loginWithRedirect()}
              >
                SIGN UP
              </Button>
            )}
            <NavLink to="/form" className={classes.link}>
              <Button
                className={classes.submitNavButton}
                color="primary"
                variant="contained"
              >
                Submit a Grant
              </Button>
            </NavLink>
            {props.role === "admin" && (
              <NavLink to="/admin" className={classes.link}>
                <Button
                  className={classes.navButton}
                  color="inherit"
                  onClick={() =>
                    console.log("Why you gotta push me like that?")
                  }
                >
                  Admin
                </Button>
              </NavLink>
            )}

            {/* {!isAuthenticated && (
              <Button
                className={classes.log}
                variant="contained"
                color="primary"
                onClick={() => loginWithRedirect({})}
              >
                Log in
              </Button>
            )} */}

            {isAuthenticated && (
              <Button
                className={classes.logout}
                variant="outlined"
                onClick={() => logout()}
              >
                Log out
              </Button>
            )}
          </div>
        </Media>
        <Media query="(max-width:800px)">
          {matches =>
            matches ? (
              <IconButton
                className={classes.menu}
                edge="start"
                color="primary"
                aria-label="menu"
                onClick={toggleDrawer()}
              >
                <MenuIcon className={classes.menu} />
              </IconButton>
            ) : null
          }
        </Media>

        <SwipeableDrawer
          anchor="right"
          open={isOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {sideList("right")}
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
