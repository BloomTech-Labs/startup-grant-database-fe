import { makeStyles } from "@material-ui/core/styles";
import { height, flexbox } from "@material-ui/system";

const formStyles = makeStyles(theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 700,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),

    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      height: 1000,
      position: "relative"
    }
  },

  topBox: {
    padding: theme.spacing(3),

    "& h1": {
      fontSize: "2.8rem",
      fontFamily: "adobe-garamond-pro",
      fontWeight: 400,

      color: "white"
    },
    "& p": {
      fontFamily: "Roboto",
      fontSize: "1.3rem",
      fontWeight: 200,
      lineHeight: 1.5
    },

    background: "#3DB8B3"
  },
  stepper: {
    padding: theme.spacing(3, 0, 5)
  },
  bottomBox: {
    padding: theme.spacing(2, 6, 1, 2)
  },
  button: {
    // display: "flex",
    // alignItems: "flex-end"
    // justifyContent: "flex-end"
    // justifyContent: "flex-end"
    // alignSelf: "flex-end"
    position: "absolute",
    bottom: theme.spacing(3)
    // right: theme.spacing(2)
  },
  submit: {
    width: "30%",
    height: "4em",
    color: "white"
  },
  back: {
    width: "30%",
    height: "4em",
    border: "1px solid black",
    color: "white"
  },
  dropDown: {
    width: 200,
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  label: {
    color: "#fff"
  },
  adminButtons: {
    margin: "30px"
  }
}));

export default formStyles;
