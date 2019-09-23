import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GrantList from "../components/grants/GrantList";
import Filters from "../components/Filters";
import GrantShowcase from "../components/grants/GrantShowcase";
import MobileTabs from "../components/MobileTabs";
import SearchBar from "../components/SearchBar";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";
import Media from "react-media";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  gridContainer: {
    margin: "0"
  },
  gridItem: {
    padding: 30
  },
  root: {
    display: "flex"
  },
  scrollBox: {
    border: "none",
    padding: "5px",
    font: "24px/ 36px sans - serif",
    width: "480px",
    height: "1000px",
    overflow: "scroll"
  },
  toolbar: theme.mixins.toolbar
}));

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
              <Grid container spacing={0} className={classes.gridContainer}>
                <Grid
                  item
                  md={4}
                  xs={12}
                  className={classes.gridItem}
                  style={{ padding: "0" }}
                >
                  <div className={classes.scrollBox}>
                    <GrantList />
                  </div>
                </Grid>
                <Grid
                  item
                  xs={6}
                  className={classes.gridItem}
                  style={{ padding: "0" }}
                >
                  <GrantShowcase />
                </Grid>
                <Grid
                  item
                  xs={2}
                  className={classes.gridItem}
                  style={{ padding: "0" }}
                >
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
