import { makeStyles } from "@material-ui/core/styles";

export const searchBarStyles = makeStyles(theme => ({
    pos: {
      position: "fixed"
    },
  
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "95%",
      margin: "0 auto 10px",
      boxShadow: "none"
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    }
  }));
  