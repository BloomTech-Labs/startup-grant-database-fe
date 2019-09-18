import { makeStyles } from "@material-ui/core/styles";

// vars
const cardDetailsMargin = "10px";

const grantStyles = makeStyles(theme => ({
  showcase: {
    position: "fixed",
    width: "50%"
  },
  grantCard: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    borderRadius: "10px",
    margin: "0.5rem"
  },
  grantName: {
    fontSize: "1rem",
    position: "relative",
    marginLeft: "5px"
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
    fontWeight: "bold",
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

export default grantStyles;
