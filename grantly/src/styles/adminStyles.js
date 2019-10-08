import { makeStyles } from "@material-ui/core/styles";

export const adminStyles = makeStyles(theme => ({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3)
    },
    gridContainer: {
      flexWrap: "nowrap",
      overflowX: "hidden",

    },
    gridItem: {
      padding: 30
    },
    root: {
      display: "flex"
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
    toolbar: theme.mixins.toolbar
  }));
  