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
    // position: "relative",
    width: "100%",
    textAlign: "left",
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
