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
    root: {
      display: "flex"
    },
    toolbar: theme.mixins.toolbar
  }));