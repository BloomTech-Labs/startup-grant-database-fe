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
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                className={classes.gridContainer}
              >
                <Grid
                  item
                  md={3}
                  xs={12}
                  className={classes.gridItem}
                  style={{ padding: "30px 0 0 30px" }}
                >
                  {/* <div className={classes.scrollBox}> */}
                  <GrantList />
                  {/* </div> */}
                </Grid>
                <Grid
                  item
                  xs={6}
                  className={classes.gridItem}
                  style={{ padding: "30px 30px 0 30px" }}
                >
                  <GrantShowcase />
                </Grid>
                <Grid
                  item
                  xs={3}
                  className={classes.gridItem}
                  style={{ padding: "30px 30px 0 0" }}
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
