import { makeStyles } from "@material-ui/core/styles";
import { border } from "@material-ui/system";

export const homeStyles = makeStyles(theme => ({
  loader: {
    minHeight: "100vh"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  // homeContainer: {
  //   minHeight: "100vh",
  // },
  homeGridContainer: {
    minHeight: "92vh",
    margin: "0",
    flexWrap: "nowrap",
    overflowX: "hidden",
    // marginBottom: "2%"
  },
  gridItem: {
    padding: "2em 1em 2em 2rem",
  },
  grantListResults: {
    position: "relative",
    overflow: "auto",
    minHeight: "92vh",
    padding: ".5em .5em .5em 1em",
    // backgroundColor: "#f7f7f7",
  },
  grantList: {
    maxHeight: "90vh",
    overflow: "auto",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "#65D8CF",
      // color: "#fff",
      backgroundColor: "#f7f7f7",
      height: "100%",
      justifyContent: "center",
      flexDirection: "column",
      marginBottom: "600px",
    }
  },
  grantListTitle: {
    // display: "flex",
    // justifyContent: "flex-end",
    padding: ".8em 1em .2em 1em",
    color: "#464646",
    fontFamily: "Nunito Sans",
    fontWeight: 700,
    // [theme.breakpoints.down("sm")]: {
    //   display: "none"
    // }
  },
  filterIcon: {
    position: "absolute",
    top: "11%",
    fill: "#BBB",
    right: "1%",
    padding: "10px",
    background: "#fff",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    zIndex: "1000",
    boxShadow:
      "0px 1px 0px 0px rgba(0,0,0,0.2), 0px 1px 0px 0px rgba(0,0,0,0.14), 0px 2px 0px -1px rgba(0,0,0,0.12)",
    "&:hover": {
      cursor: "pointer"
    }
  },
  filterIconSelected: {
    fill: "#3DB8B3",
    boxShadow:
      "0px 1px 0px 0px #3DB8B3, 0px 4px 0px 0px #3DB8B3, 0px 2px 0px -1px #3DB8B3"
  },
  filters: {
    transition: "all .3s ease-in-out"
  },
  hideFilters: {
    transform: "translateX(110%)"
  },
  showFilters: {
    transform: "translateX(0)"
  },
  root: {
    display: "flex"
  },
  toolbar: theme.mixins.toolbar
}));
