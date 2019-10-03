import { makeStyles } from "@material-ui/core/styles";

export const sitemapStyles = makeStyles(theme => ({
    container: {
        background: "#3A3A3A",
        maxWidth: "100%",
        height: "180px",
        padding: "0 2%",
        color: "#fff",
        // position: "fixed",
        // bottom: "0",
        fontFamily: "Roboto, sans-serif",
        letterSpacing: "1px",
        zIndex: "3000",
        
    },
    item: {
        margin: ".5em 5% 0",
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
    }
  }));
  