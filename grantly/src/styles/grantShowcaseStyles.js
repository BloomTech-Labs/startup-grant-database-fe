import { makeStyles } from "@material-ui/core/styles";

export const showcaseStyles = makeStyles(theme => ({
    showcaseCard: {
      position: "fixed",
      textAlign: "left",
      padding: "50px",
      width: "50%",
      borderTop: "#3DB8B3 5px solid",
      minHeight: "100vh",
      fontFamily: "adobe-garamond-pro",
      [theme.breakpoints.down("sm")]: {
        position: "initial",
        width: "100%",
        height: "auto",
        margin: 0
      }
    },
    topContent: {
      margin: " 0",
      fontWeight: "700",
      // fontSize: "1.8rem"
    },
    grantInfo: {},
    showcaseSpan: {
      fontWeight: "bold"
    },
    showcaseDetails: {
      marginBottom: "30px"
    },
    applyButton: {
      color: "#fff",
      margin: "20px auto"
    },
    showcase_header: {
      width: "initial",
    },
    grant_logo: {
      display: "inline-block",
      marginRight: "5px",
      background: "#ddd",
      width: "60px",
      height: "50px",
    }
  }));