import { makeStyles } from "@material-ui/core/styles";

export const navStyles = makeStyles(theme => ({
    navButton: {
      marginRight: theme.spacing(3),
      color: "#000",
      fontFamily: "Roboto"
    },
    title: {
      textAlign: "left",
      marginLeft: "20px",
      color: "#000"
    },
    navbar: {
      background: "#fff",
      flexGrow: 1,
      // marginBottom: "2em",
      [theme.breakpoints.down("xs")]: {
        padding: "0",
        boxShadow: "none"
        
      }
    },
    log: {
      color: "#fff",
      fontFamily: "Roboto"
    },
    logout: {
      color: "#000"
    },
    menu: {
      width: "2em",
      height: "2em",
      padding: "0"
    },
    signup: {
      marginRight: theme.spacing(3),
      color: "#3DB8B3"
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