import { makeStyles } from "@material-ui/core/styles";

export const navStyles = makeStyles(theme => ({
  navButton: {
    marginRight: theme.spacing(3),
    color: "#000",
    fontFamily: "Nunito Sans"
  },
  title: {
    textAlign: "left",
    marginLeft: "20px",
    color: "#000"
  },
  navbar: {
    background: "#fff",
    flexGrow: 1,
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.15)",
    // marginBottom: "2em",
    [theme.breakpoints.down("xs")]: {
      padding: "0",
      boxShadow: "none"
    }
  },
  log: {
    color: "#fff",
    fontFamily: "Nunito Sans"
  },
  logout: {
    color: "#000",
    fontFamily: "Nunito Sans"
  },
  menu: {
    width: "2em",
    height: "2em",
    padding: "0"
  },
  signup: {
    marginRight: theme.spacing(3),
    color: "#3DB8B3",
    fontFamily: "Nunito Sans"
  },
  titleLink: {
    flexGrow: 1,
    textDecoration: "none"
  },
  link: {
    textDecoration: "none"
  },
  tabs: {
    position: "fixed",
    marginTop: "3em"
  }
}));