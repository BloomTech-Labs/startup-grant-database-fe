import { makeStyles } from "@material-ui/core/styles";

// vars
const cardDetailsMargin = "10px";

export const grantStyles = makeStyles(theme => ({
  grantCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    borderRadius: "10px",
    marginBottom: "0.5rem",
    padding: "5px",
    fontFamily: "adobe-garamond-pro"
  },
  grantName: {
    fontSize: "1.2rem",
    position: "relative",
    fontWeight: "700"
    // border: "1px solid fuchsia"
  },
  bookmark: {
    marginTop: "10px"
    // border: "1px solid fuchsia"
  },
  phantom: {
    // border: "1px solid fuchsia"
  },
  deadline: {
    margin: cardDetailsMargin
  },
  detailsHeader: {
    margin: "5px",
    fontWeight: "700",
    fontSize: "0.9rem"
  },
  amount: {
    margin: cardDetailsMargin
  },
  btn: {
    margin: "10px"
  },
  detailsWrapper: {
    display: "flex"
  }
}));

// =========== STYLES ===========
export const grantShowcaseStyles = makeStyles(theme => ({
  showcaseCard: {
    position: "fixed",
    textAlign: "left",
    padding: "5px",
    width: "50%",
    borderTop: "#3DB8B3 5px solid",
    height: "600px",
    fontFamily: "adobe-garamond-pro",
    [theme.breakpoints.down("sm")]: {
      position: "initial",
      width: "100%",
      height: "auto",
      margin: 0
    }
  },
  topContent: {
    margin: "20px",
    fontWeight: "700",
    fontSize: "1.8rem"
  },
  grantInfo: {
    padding: "0 20px"
  },
  showcaseSpan: {
    fontWeight: "bold"
  },
  showcaseDetails: {
    marginBottom: "30px"
  },
  applyButton: {
    color: "#fff"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));
