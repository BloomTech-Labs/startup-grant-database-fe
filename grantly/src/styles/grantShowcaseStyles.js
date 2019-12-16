import { makeStyles } from "@material-ui/core/styles";

export const showcaseStyles = makeStyles(theme => ({
  showcaseCard: {
    // position: "fixed",
    textAlign: "left",
    padding: "30px",
    // width: "50%",
    borderTop: "#3DB8B3 5px solid",
    // minHeight: "100vh",
    fontFamily: "adobe-garamond-pro",
    // marginBottom: "1rem",
    [theme.breakpoints.down("sm")]: {
      position: "initial",
      padding: "2em",
      height: "auto",
      margin: "2em 3em",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "1em",
      margin: "1em 1em",
    }
  },
  inAdmin: {
    // minHeight: "70vh"
  },
  topContent: {
    margin: " 0",
  },
  showcase_header: {
    width: "initial"
  },
  grant_name: {
    fontWeight: "700",
    fontFamily: "Nunito Sans",
    color: "#222222",
    marginBottom: "15px"
  },
  bookmark: {
    fill: "#696969"
  },
  website: {
    fill: "#696969",
    marginRight: ".2rem",
    fontSize: "1.2rem",
    overflow: "none"
  },
  showcaseContainer: {

  },
  showcaseDetails: {
    // height: 90,
    margin: "1em 0 0 0",
    padding: ".5em 0 .5em 0",
    lineHeight: "1.2rem",
    fontFamily: "EB Garamond"
  },
  detailTitle: {
    fontFamily: "Nunito Sans",
    fontWeight: "bold",
    fontSize: "1.1rem"
  },
  innerDetails: {
    color: "#696969",
    fontSize: "0.9rem",
    marginTop: 5,
    height: "auto"
  },
  showcaseNotes: {
    marginTop: 10,
    marginBottom: 20
  },
  applyButton: {
    color: "#fff",
    margin: "20px auto 0 auto",
    fontFamily: "Nunito Sans",
    fontWeight: "600"
  },
  // not used in grant showcase anywhere
  // grant_logo: {
  //   display: "inline-block",
  //   marginRight: "5px",
  //   background: "#ddd",
  //   width: "60px",
  //   height: "50px"
  // },
  showcaseButtonContainer: {
    margin: "0"
  },
  loaderDiv: {
    marginTop: "150px"
  }
}));
