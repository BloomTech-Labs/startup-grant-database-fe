import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

// vars
const cardDetailsMargin = "10px";

export const grantStyles = makeStyles(theme => ({
  grantCard: {
    // display: "flex",
    // flexDirection: "column",
    textAlign: "center",
    // borderRadius: "0",
    marginBottom: "0.5rem",
    padding: "15px 5px",
    transition: "all .3s ease-in-out",
    fontFamily: "Nunito Sans",
    "&:hover": {
      boxShadow: "0px 3px 6px #BBB",
      transform: "translateX(5px)"
    },
    "&:active": {
      // transform: "translateY(0)"
      // transform: "translateX(5px)"
    }
  },
  grantCardSelected: {
    // display: "flex",
    // flexDirection: "column",
    // textAlign: "center",
    // borderRadius: "0",
    marginBottom: "0.5rem",
    padding: "15px 5px",
    // fontFamily: "Nunito Sans",
    // borderTop: "2px solid #3DB8B3",
    borderLeft: "5px solid #3DB8B3",
    transform: "translateX(5px)"
  },
  grant_layout: {
    display: "flex",
    minHeight: "125px",
    justifyContent: "space-between",
    alignItems: "start"
  },
  grant_logo: {
    background: "#ddd",
    width: "70px",
    height: "60px"
  },
  grant_info: {
    alignSelf: "stretch",
    margin: "0 20px",
    color: "#696969"
  },
  grant_subinfo: {
    fontStyle: "italic"
  },
  grantName: {
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#222222",
    // border: "1px solid fuchsia"
  },
  grant_new: {
    background: "#EF7B5C",
    color: "#F7F7F7",
  },
  bookmark: {
    alignSelf: "flex-start",
    fill: "#C4C4C4"
    // border: "1px solid fuchsia"
  },
  editIcon: {
    alignSelf: "flex-start"
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

export default grantStyles;
