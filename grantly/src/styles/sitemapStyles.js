import { makeStyles } from "@material-ui/core/styles";

export const sitemapStyles = makeStyles(theme => ({
  container: {
    // background: "#3A3A3A",
    // color: "#fff",
    // background: "#83D7D1",
    color: "#696969",
    background: "#fff",
    maxWidth: "100%",
    padding: "0 2%",
    // position: "fixed",
    // bottom: "0",
    fontFamily: "Roboto, sans-serif",
    letterSpacing: "1px",
    zIndex: "3000",

    [theme.breakpoints.down("xs")]: {
      background: "#65D8CF",
      color: "#fff",
      height: "100%",
      justifyContent: "center"
    }
  },
  item: {
    margin: ".5em 5% 0",
    [theme.breakpoints.down("xs")]: {
      margin: "0",
      padding: "0",
      width: "100%"
    }
  },
  sitemap: {
    height: "100%",
    margin: "0 -32px",
    [theme.breakpoints.down("md")]: {
      display: "block"
    }
  },
  links: {
    display: "flex",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",

    [theme.breakpoints.down("xs")]: {
      height: "150%"
    }
  },
  link: {
    color: "#696969",
    "&:hover": {
      cursor: "pointer"
    },
    [theme.breakpoints.down("md")]: {
      margin: "15px"
    },

    [theme.breakpoints.down("xs")]: {
      color: "#fff"
    }
  },
  copy: {
    [theme.breakpoints.down("xs")]: {
      fontSize: ".5rem"
    }
  }
}));
