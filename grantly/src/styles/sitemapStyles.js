import { makeStyles } from "@material-ui/core/styles";

export const sitemapStyles = makeStyles(theme => ({
    container: {
        // background: "#3A3A3A",
        // color: "#fff",
        // background: "#83D7D1",
        color: "#696969",
        background: "#fff",
        maxWidth: "100%",
        height: "180px",
        padding: "0 2%",
        // position: "fixed",
        // bottom: "0",
        fontFamily: "Roboto, sans-serif",
        letterSpacing: "1px",
        zIndex: "3000",
        [theme.breakpoints.down("xs")]: {
            height: "100%",
            justifyContent: "center"
        }
    },
    item: {
        margin: ".5em 5% 0",
        [theme.breakpoints.down("xs")]: {
            margin: "0",
            padding: "0",
            width: "100%",
          }
    },
    sitemap: {
        height: "100%",
        margin: "0 -32px",

    },
    links: {
        display: "flex",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    link: {
        color: "#fff",
        color: "#696969",

    }
  }));
  