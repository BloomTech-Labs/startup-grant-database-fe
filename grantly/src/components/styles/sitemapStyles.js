import { makeStyles } from "@material-ui/core/styles";

export const sitemapStyles = makeStyles(theme => ({
  sitemapContainer: {
    // background: "#3A3A3A",
    // color: "#fff",
    // background: "#83D7D1",
    color: "#696969",
    background: "#fff",
    width: "100%",
    minHeight: "4em",
    maxHeight: "8em",
    display: "block",
    position: "absolute",
    verticalAlign: "middle",
    // bottom: 0,
    letterSpacing: "1px",
    // zIndex: "3000",
    [theme.breakpoints.down("xs")]: {
      background: "#65D8CF",
      color: "#fff",
      height: "100%",
      maxHeight: "20em",
      justifyContent: "center",
      padding: "0"
    },

    [theme.breakpoints.down("sm")]: {
      marginBottom: "4em"
    }
  },
  sitemap: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    // height: "100%",
    maxHeight: "20em",
    margin: "0",
    padding: "1em 0 0 0",
    background: "#fff",
    color: "#696969",
    letterSpacing: "1px",
    [theme.breakpoints.down("sm")]: {
      background: "#65D8CF"
      // color: "#fff",
    },
    [theme.breakpoints.down("xs")]: {
      // justifyContent: "center",
      justifyContent: "space-between",
      flexDirection: "column",
      padding: "0"
    }
  },
  item: {
    margin: "0",
    padding: "0",
    color: "#696969",
    [theme.breakpoints.down("xs")]: {
      paddingTop: "1em"
    }
  },
  link: {
    margin: "0",
    padding: "0",
    color: "#696969",
    "&:hover": {
      cursor: "pointer"
    },
    [theme.breakpoints.down("md")]: {
      // margin: ".5em 1em"
    },
    [theme.breakpoints.down("sm")]: {
      color: "#fff"
    }
  },
  copy: {
    margin: "1em",
    [theme.breakpoints.down("sm")]: {
      fontSize: ".8rem",
      // marginTop: "2em",
      color: "#fff"
    }
  }
}));
