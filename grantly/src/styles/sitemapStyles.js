import { makeStyles } from "@material-ui/core/styles";

export const sitemapStyles = makeStyles(theme => ({
  sitemapContainer: {
    // background: "#3A3A3A",
    // color: "#fff",
    // background: "#83D7D1",
    color: "#696969",
    background: "#fff",
    width: "100%",
    // position: "fixed",
    position: "absolute",
    bottom: 0,
    // padding: "0",
    letterSpacing: "1px",
    zIndex: "3000",
    [theme.breakpoints.down("xs")]: {
      background: "#65D8CF",
      color: "#fff",
      height: "100%",
      justifyContent: "center"
    }
  },
  sitemap: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
    color: "#696969",
    background: "#fff",
    margin: "0",
    letterSpacing: "1px",
    // backgroundColor: "coral",
    [theme.breakpoints.down("xs")]: {
      // display: "block",
      backgroundColor: "#65D8CF",
      color: "#fff",
      height: "100%",
      justifyContent: "center",
      flexDirection: "column",
    }
  },
  item: {
    margin: "0 auto",
    padding: "0",
    // width: "100%",
    // backgroundColor: "pink",
    [theme.breakpoints.down("xs")]: {
      // backgroundColor: "pink",
      margin: "0",
      // padding: "0",
      // width: "100%"
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
      margin: ".5em 1em"
    },
    [theme.breakpoints.down("xs")]: {
      color: "#fff"
    }
  },
  copy: {
    margin: "0 5% 1em 5%",
    // backgroundColor: "tan",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
      marginBottom: "4em"
    }
  }
}));
