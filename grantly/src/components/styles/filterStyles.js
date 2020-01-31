import { makeStyles } from "@material-ui/core/styles";

export const useStylesGrants = makeStyles(theme => ({
  card: {
    // position: "fixed",
    margin: "1em 1em 0 0",
    borderRadius: "2px",
    // width: "15%",
    // width: "90%",
    // minHeight: "100vh",
    [theme.breakpoints.down("sm")]: {
      position: "initial",
      width: "100%",
      height: "initial"
    }
  },
  filterIcon: {
    position: "fixed",
    right: "16.5%",
    zIndex: "2000",
    boxShadow:
      "0px 1px 0px 0px rgba(0,0,0,0.2), 0px 1px 0px 0px rgba(0,0,0,0.14), 0px 2px 0px -1px rgba(0,0,0,0.12)",
    top: "11%",
    padding: "10px"
  },
  filterCard: {
    display: "block",
    alignSelf: "flex-end",
    margin: "0",
    textAlign: "left",
    padding: "0"
  },
  title: {
    fontFamily: "Nunito Sans",
    fontWeight: 700,
    fontSize: "1.15rem",
    marginTop: ".25em",
    color: "#464646"
  },
  label: {
    alignSelf: "flex-start",
    textAlign: "left",
    fontSize: ".8rem",
    fontFamily: "Nunito Sans",
    fontWeight: 700,
    color: "#222222",
    margin: "0 0 .2em 0"
  },
  mobileSet: {
    margin: 0,
    padding: 0
  },
  landingButton: {
    display: "none"
  },
  arrow: {
    position: "fixed",
    right: "16.5%",
    zIndex: "2000",
    boxShadow:
      "0px 1px 0px 0px rgba(0,0,0,0.2), 0px 1px 0px 0px rgba(0,0,0,0.14), 0px 2px 0px -1px rgba(0,0,0,0.12)",
    top: "11%",
    padding: "10px"
  },
  set: {
    width: "100%",
    alignSelf: "center",
    margin: ".25em 0",
    padding: "0 0 0 1em"
  }
}));

export const useStylesLanding = makeStyles(theme => ({
  title: {
    marginBottom: "20px",
    fontSize: "2rem",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10px",
      paddingRight: "10px"
    }
  },
  card: {
    marginRight: "2rem",
    padding: "48px",
    borderRadius: "2px",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      borderRadius: 0
    },
    [theme.breakpoints.down("xs")]: {
      padding: 0,
      paddingTop: "20px",
      flexGrow: 2
    }
  },
  set: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      width: "20%",
      margin: "10px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "50%",
      alignItems: "center",
      alignContent: "center"
    }
  },
  label: {
    marginBottom: "10px",
    fontSize: "1.4rem",
    fontFamily: "Nunito Sans",
    color: "#222222",
    [theme.breakpoints.down("sm")]: {
      textAlign: "left"
    }
  },
  filterCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "20px",
      "& fieldset:nth-child(2)": {
        display: "none"
      },
      "& fieldset:nth-child(3)": {
        display: "none"
      }
    }
  },
  landingButton: {
    textDecoration: "none",
    marginTop: "45px",
    color: "white",
    fontFamily: "Roboto",
    borderRadius: "2px",
    height: "58px",
    width: "266px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "10px",
      marginBottom: "20px"
    }
  }
}));

export const useStylesMobile = makeStyles(theme => ({
  filterCard: {
    display: "flex",
    padding: "10px",
    flexWrap: "nowrap",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  mobileSet: {
    display: "inline-block",
    margin: "0",
    justifyContent: "space-between",
    flexWrap: "no-wrap"
  },
  set: {
    display: "flex",
    flexDirection: "row"
  },
  label: {
    display: "inline-block"
  },
  landingButton: {
    display: "none"
  }
}));
