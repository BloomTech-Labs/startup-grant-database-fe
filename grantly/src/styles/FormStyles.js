import { makeStyles } from "@material-ui/core/styles";
import { height } from "@material-ui/system";

const formStyles = makeStyles(theme => ({
  grid: {
    // justifyContent: "space-between",
    maxWidth: "100%"
    // height: "80%"
    // zIndex: 0
  },
  form: {
    display: "flex",
    flexDirection: "column",
    margin: "0 auto",
    height: "70vh",
    width: "80%",
    justifyContent: "space-around",
    [theme.breakpoints.down("sm")]: {
      height: "initial",
      justifyContent: "center",
      width: "90%"
    }
  },
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // justifyContent: "space-evenly"
    // margin: "10%"
    // margin: "2rem"
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    }
  },
  notes: {
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  inputText: {
    // marginLeft: theme.spacing(1)
    // marginRight: theme.spacing(1)

    marginLeft: "30px",
    marginRight: "30px",
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  dense: {
    // marginTop: theme.spacing(2)
  },
  dropDown: {
    width: 200,
    [theme.breakpoints.down("sm")]: {
      width: "90%"
    }
  },
  leftBox: {
    // background: "primary"
    "& h1": {
      fontSize: "2.8rem",
      fontFamily: "adobe-garamond-pro",
      fontWeight: "400",
      margin: "1rem",
      color: "white",
      padding: "30px"
    },
    "& p": {
      fontFamily: "Roboto",
      color: "white",
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
