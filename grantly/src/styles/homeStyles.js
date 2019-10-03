import { makeStyles } from "@material-ui/core/styles";

// export const homeStyles = makeStyles(theme => ({
//     marginBottom: "0",
//   }))

  export const homeStyles = makeStyles(theme => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    gridContainer: {
      margin: "0",
      flexWrap: "nowrap"
    },
    gridItem: {
      padding: 30
    },
    grantList: {
      height: "90vh",
      overflow: "auto",
      position: "relative"
    },
    results: {
      position: "fixed",
      left: "25%",
      margin: "10px",
      color: "#464646",
      borderBottom: "2px solid #3DB8B3",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      }
    },
    root: {
      display: "flex"
    },
    toolbar: theme.mixins.toolbar
  }));