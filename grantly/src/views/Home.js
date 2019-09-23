import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GrantList from "../components/grants/GrantList";
import Filters from "../components/Filters";
import GrantShowcase from "../components/grants/GrantShowcase";
import MobileTabs from "../components/MobileTabs";
import SearchBar from "../components/SearchBar"
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";
import Media from "react-media";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {  useTheme } from "@material-ui/core/styles";

const drawerWidth = 480;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: 1000
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 1
  },
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  scrollBox: {
    border: "none",
    padding: "5px",
    font: "24px/ 36px sans - serif",
    width: "480px",
    height: "1000px",
    overflow: "scroll"
  },
  //   height: "1000px",
  //   width: "480px",
  //   border: "1px solid #ccc",
  //   font: "16px/ 26px Georgia, Garamond, Serif",
  //   overflow: "auto"
  // },
  toolbar: theme.mixins.toolbar
}));

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: "100%"
//   }
// }));
const Home = props => {
  const classes = useStyles();

  return (
    <>
      <Navbar location={props.location.pathname} />
      {/* <SearchBar /> */}
      <Media query="(max-width:850px)">
        {matches =>
          matches ? (
            <MobileTabs />
          ) : (
            <div>
              <Grid container spacing={2} className="grid-container">
                <Grid item md={4} xs={12} className="grid-item">
                  {/* <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                      <Typography variant="h6" noWrap>
                        Permanent drawer
                      </Typography>
                    </Toolbar>
                  </AppBar> */}
                  {/* <Drawer
                    className={classes.drawer}
                    variant="permanent"
                    classes={{
                      paper: classes.drawerPaper
                    }}
                  > */}
                  <div className={classes.scrollBox}>
                    <GrantList />
                  </div>
                  {/* </Drawer> */}
                </Grid>
                <Grid item xs={6}>
                  <GrantShowcase />
                </Grid>
                <Grid item xs={2}>
                  <Filters location={props.location.pathname} />
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
