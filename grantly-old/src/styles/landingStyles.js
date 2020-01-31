import { makeStyles } from "@material-ui/core/styles";

export const landingStyles = makeStyles(theme => ({
  container: {
    // verticalAlign: "middle",
    // textAlign: "center",
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    // minHeight: "calc(100vh - 64px)",
    [theme.breakpoints.down("xs")]: {
      marginTop: "100px"
    }
  },
  grid: {
    maxWidth: "100%",
    minHeight: "calc(100vh - 192px)",
    [theme.breakpoints.down("xs")]: {
      marginTop: "3rem",
      alignContent: "center",
      display: "block",
      height: "120vh"
    }
  },
  welcome: {
    "& h1": {
      fontSize: "3.5rem",
      fontFamily: "adobe-garamond-pro",
      fontWeight: 400,
      margin: "1rem",
      padding: "30px",
      [theme.breakpoints.down("xs")]: {
        fontSize: "2rem",
        padding: 0,
        margin: 0
      }
    },
    "& p": {
      fontFamily: "adobe-garamond-pro",
      fontSize: "32px",
      margin: "5%",
      [theme.breakpoints.down("xs")]: {
        fontSize: "18px"
      }
    },
    [theme.breakpoints.down("xs")]: {
      margin: "1rem",
      flexGrow: 2
    }
  },
  link: {
    textDecoration: "none",
    "& button": {
      fontFamily: "Roboto",
      marginTop: "35px",
      borderRadius: "2px",
      [theme.breakpoints.down("sm")]: {
        marginBottom: "30px"
      }
    }
  },
  button: {
    width: "266px",
    height: "58px"
  }
}));
