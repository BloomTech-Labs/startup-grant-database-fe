import React from "react";
import GrantList from "../components/grants/GrantList";
import Filters from "../components/Filters";
import GrantShowcase from "../components/grants/GrantShowcase";
import Grid from "@material-ui/core/Grid";
import Navbar from "../components/Navbar";
import Media from "react-media";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles, useTheme } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

const Home = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  return (
    <>
      <Navbar />
      <Media query="(max-width:850px)">
        {matches =>
          matches ? null : (
            <div>
              <Grid container spacing={2} className="grid-container">
                <Grid item md={4} xs={12} className="grid-item">
                  <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                      paper: classes.drawerPaper
                    }}
                  >
                    <GrantList />
                  </Drawer>
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
