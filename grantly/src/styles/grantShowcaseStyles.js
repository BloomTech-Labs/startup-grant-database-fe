import { makeStyles } from "@material-ui/core/styles";

export const showcaseStyles = makeStyles(theme => ({
  showcaseCard: {
    // position: "fixed",
    textAlign: "left",
    padding: "30px",
    // width: "50%",
    borderTop: "#3DB8B3 5px solid",
    minHeight: "100vh",
    fontFamily: "adobe-garamond-pro",
    [theme.breakpoints.down("sm")]: {
      position: "initial",
      width: "100%",
      padding: "10px",
      height: "auto",
      margin: 0
    }
  },
  topContent: {
    margin: " 0",
    fontWeight: "700"
    // fontSize: "1.8rem"
  },
  grantInfo: {},
  showcaseSpan: {
    fontWeight: "bold"
  },
  bookmark: {
    fill: "#C4C4C4"
  },
  website: {
    fill: "#C4C4C4",
    marginRight: ".2rem"
  },

  showcaseDetails: {
    marginBottom: "30px"
  },
  applyButton: {
    color: "#fff",
    margin: "20px auto",
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
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#222222"
  }
}));
