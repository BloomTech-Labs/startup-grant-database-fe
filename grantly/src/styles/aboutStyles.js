import { makeStyles } from "@material-ui/core/styles";

export const aboutStyles = makeStyles(theme => ({
  layout: {
    height: "calc(100vh - 84px)",
    [theme.breakpoints.down("sm")]: {
      height: "auto"
    }
  },
  aboutCardContainer: {
    // border: "1px solid fuchsia"
    margin: 20
    // height: 500
  },
  aboutIntroCardContainer: {
    // border: "1px solid fuchsia"
    margin: 1,
    padding: 20
    // background: "#3DB8B3",
    // color: "#ffffff",
    // "&:hover": {
    //   boxShadow: "0px 5px 10px #BBB",
    //   transform: "translateY(-5px)",
    //   opacity: 1,
    //   background: "#3DB8B3",
    //   color: "#ffffff"
    // }
  },
  aboutContainer: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  },
  aboutCard: {
    // border: "1px solid fuchsia",
    width: 350,
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
    }

    //   '&:active': {
    //     transform: "translateY(0)"
    //   }
  },
  aboutIntro: {
    // border: "1px solid fuchsia",
    marginTop: 15,
    marginBottom: 15
  },
  aboutTopCard: {
    width: "75%",
    // border: "1px solid turquoise",
    margin: 20,
    padding: 15
  }
}));

export default aboutStyles;
