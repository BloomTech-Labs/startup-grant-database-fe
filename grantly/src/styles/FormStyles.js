import { makeStyles } from "@material-ui/core/styles";
import { height } from "@material-ui/system";

const formStyles = makeStyles(theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    // padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6)
      // padding: theme.spacing(3)
    }
  },

      fontFamily: "Roboto",
      fontSize: "1.3rem",
      fontWeight: "200",

      lineHeight: "1.5"
    },
    paddingTop: "70px",
    background: "#3DB8B3",
    padding: "2rem",
    paddingTop: "12rem",
    height: "100vh",
    [theme.breakpoints.down("sm")]: {
      height: "30%",
      background: "#3DB8B3",
      paddingTop: "3rem",
      paddingBottom: "3rem",
      width: "100%"
    }
  },
  submit: {
    width: "30%",
    height: "4em",
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
