import { makeStyles } from "@material-ui/core/styles";

export const aboutStyles = makeStyles(theme => ({
  layout: {
    height: "calc(100vh - 84px)",
    [theme.breakpoints.down("sm")]: {
      height: "auto"
    }
  },
  aboutCardContainer: {
    margin: 20
  },
  aboutIntroCardContainer: {
    margin: 1,
    padding: 20
  },
  aboutContainer: {
    [theme.breakpoints.down(1150 + theme.spacing(2) * 2)]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  },
  aboutCard: {
    width: "100%",
    height: 150,
    margin: 10,
    padding: 10,
    opacity: 0.7,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    // transition: "margin 2s",
    "&:hover": {
      boxShadow: "0px 5px 10px #BBB",
      transform: "translateY(-5px)",
      opacity: 1,
      background: "#3DB8B3",
      color: "#ffffff"
    },
    [theme.breakpoints.down(1150 + theme.spacing(2) * 2)]: {
      width: 300,

      height: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "30px",
      "&:hover": {
        boxShadow: "0px 5px 10px #BBB",
        transform: "translateY(-5px)",
        opacity: 1,
        background: "#3DB8B3",
        color: "#ffffff"
      }
    },
    [theme.breakpoints.down(800 + theme.spacing(2) * 2)]: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      width: 350,
      height: 150,
      margin: 10,
      padding: 10,
      opacity: 0.7,
      height: "auto",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: "30px",
      "&:hover": {
        boxShadow: "0px 5px 10px #BBB",
        transform: "translateY(-5px)",
        opacity: 1,
        background: "#3DB8B3",
        color: "#ffffff"
      }
    }
  },
  aboutIntro: {
    marginTop: 15,
    marginBottom: 15
  },
  aboutTopCard: {
    width: "75%",

    margin: 20,
    padding: 15
  }
}));

export default aboutStyles;
