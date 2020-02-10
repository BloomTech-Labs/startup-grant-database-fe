import { makeStyles } from "@material-ui/core/styles";

export const mobileTabStyles = makeStyles(theme => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down("xs")]: {
      marginTop: "72px"
    }
  },
  tab: {
    color: "#3DB8B3"
  },
  tabPos: {
    top: "10%"
  },
  swipe: {
    position: "fixed",
    top: "auto",
    bottom: "0",
    background: "#fff"
  }
}));
