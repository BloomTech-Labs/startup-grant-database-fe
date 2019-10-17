import { makeStyles } from "@material-ui/core/styles";

export const adminStyles = makeStyles(theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  gridContainer: {
    flexWrap: "nowrap",
    overflowX: "hidden"
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
  root: {
    display: "flex"
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
      "0px 1px 0px 0px rgba(0,0,0,0.2), 0px 1px 0px 0px rgba(0,0,0,0.14), 0px 2px 0px -1px rgba(0,0,0,0.12)"
  },
  filterIconSelected: {
    fill: "#3DB8B3",
    boxShadow:
      "0px 1px 0px 0px #3DB8B3, 0px 1px 0px 0px #3DB8B3, 0px 2px 0px -1px #3DB8B3"
  },
  toolbar: theme.mixins.toolbar,
  approve: {
    color: "#fff"
  },
  adminActions: {
    fontFamily: "Nunito Sans",
    fontWeight: "700",
    margin: "10px",
  },
  buttons: {
    textTransform: "capitalize",
    fontSize: "1.2rem",
    letterSpacing: "1px",
    padding: "5px 3rem",
    fontFamily: "Nunito Sans"

  }
}));
