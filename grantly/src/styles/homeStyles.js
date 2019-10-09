import { makeStyles } from "@material-ui/core/styles";
import { border } from "@material-ui/system";

// export const homeStyles = makeStyles(theme => ({
//     marginBottom: "0",
//   }))

export const homeStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  gridContainer: {
    margin: "0",
    flexWrap: "nowrap",
    overflowX: "hidden",
    marginBottom: "10%"
  },
  gridItem: {
    padding: 30
  },
  grantList: {
    height: "100vh",
    overflow: "auto",
    marginTop: "2em",
    position: "relative"
  },
  results: {
    position: "fixed",
    top: "9%",
    left: "25%",
    margin: "10px",
    color: "#464646",
    borderBottom: "2px solid #3DB8B3",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  filterIcon: {
    position: "fixed",
    top: "11%",
    fill: "#BBB",
    right: "1%",
    padding: "10px",
    background: "#fff",
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    zIndex: "2000",
    boxShadow:
      "0px 1px 0px 0px rgba(0,0,0,0.2), 0px 1px 0px 0px rgba(0,0,0,0.14), 0px 2px 0px -1px rgba(0,0,0,0.12)"
  },
  filterIconSelected: {
    fill: "#3DB8B3",
    boxShadow:
      "0px 1px 0px 0px #3DB8B3, 0px 1px 0px 0px #3DB8B3, 0px 2px 0px -1px #3DB8B3"
  },
  filters: {
    transition: "all .3s ease-in-out"
  },
  hideFilters: {
    transform: "translateX(100%)"
  },
  showFilters: {
    transform: "translateX(0)"
  },
  root: {
    display: "flex"
  },
  toolbar: theme.mixins.toolbar
}));
