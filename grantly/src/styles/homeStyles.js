import { makeStyles } from "@material-ui/core/styles";
import { border } from "@material-ui/system";

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
      flexWrap: "nowrap",
      overflowX: "hidden",
      marginBottom: "10%"
    },
    gridItem: {
      padding: 30
    },
    grantList: {
      height: "100vh",
      overflow: "auto",
      marginTop: "2em",
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
    filters: {
      transition: "all .3s ease-in-out",
    },
    hideFilters: {
      transform: "translateX(100%)",
    },
    showFilters: {
      transform: "translateX(0)",

    },
    root: {
      display: "flex"
    },
    toolbar: theme.mixins.toolbar
  }));