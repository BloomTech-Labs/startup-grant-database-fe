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
      width: "100%",
      padding: "20px",
      height: "auto",
      margin: 0
    }
  },
  inAdmin: {
    minHeight: "70vh"
  },
  topContent: {
    margin: " 0",
    fontWeight: "700"
    // fontSize: "1.8rem"
  },
  showcaseSpan: {
    fontWeight: "bold",
    fontSize: "1.1rem"
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

  showcaseDetailsTop: {
    // height: 90,
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    // border: "1px solid red",
    lineHeight: "1.2rem",
    fontFamily: "EB Garamond"
  },
  showcaseDetailsBottom: {
    height: 90,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    lineHeight: "1.2rem",
    fontFamily: "EB Garamond"
    // border: "1px solid red"
  },
  applyButton: {
    color: "#fff",
    margin: "20px auto 0 auto",
    fontFamily: "Nunito Sans",
    fontWeight: "600"
  },
  showcase_header: {
    width: "initial"
  },
  grant_logo: {
    display: "inline-block",
    marginRight: "5px",
    background: "#ddd",
    width: "60px",
    height: "50px"
  },
  grant_name: {
    fontWeight: "700",
    fontFamily: "Nunito Sans",
    color: "#222222",
    marginBottom: "15px"
  },
  innerDetails: {
    color: "#696969",
    fontSize: "0.9rem",
    margin: 5,
    height: "auto"
  },
  headersThree: {
    // border: "1px solid red"
    marginTop: 10,
    marginBottom: 20
  },
  loaderDiv: {
    marginTop: "150px"
  }
}));
