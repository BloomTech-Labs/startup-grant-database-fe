import { makeStyles } from "@material-ui/core/styles";

export const mobileFilterStyles = makeStyles(theme => ({
    text: {
      padding: theme.spacing(2, 2, 0)
    },
    paper: {
      paddingBottom: 50
    },
    list: {
      marginBottom: theme.spacing(2)
    },
    subheader: {
      backgroundColor: theme.palette.background.paper
    },
    appBar: {
      top: "auto",
      bottom: "0",
      background: "#fff"
    },
    filter: {
      display: "flex",
      justifyContent: "center"
    },
  
  }));