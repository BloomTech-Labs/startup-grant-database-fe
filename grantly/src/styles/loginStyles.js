import { makeStyles } from "@material-ui/core/styles";

export const loginStyles = makeStyles(theme => ({
    forgot: {
        marginTop: "16px",
        textAlign: "center",
        marginTop: "var(--spacing-2)"
    },
    cta: {
    backgroundColor: "#3CBBB1",
    color: "#fff",
    position: "relative",
    width: "100%",
    padding: "0 16px",
    padding: "0 var(--spacing-2)",
    marginTop: "24px",
    marginTop: "var(--spacing-3)",
    height: "52px",
    height: "var(--button-height)",
    fontFamily: "inherit",
    fontSize: "16px",
    fontSize: "var(--lg-font-size)",
    fontWeight: "500",
    outline: "none",
    cursor: "pointer",
    color: "#fff",
    border: "0",
    borderRadius: "3px",
    transition: "background-color .25s ease-in-out,box-shadow .25s ease-in-out"
    },
    google: {
        backgroundColor: "#fff",
        color: "#000",
        display: "flex",
        position: "relative",
        justifyContent: "center",
        background: "transparent",
        alignItems: "center",
        width: "100%",
        fontSize: "16px",
        fontSize: "var(--lg-font-size)",
        height: "52px",
        height: "var(--button-height)",
        border: "1px solid #c7ccd6",
        border: "1px solid var(--border-default-color)",
        borderRadius: "3px",
        color: "#333c4d",
        color: "var(--font-default-color)",
        cursor: "pointer",
        outline: "0",
        transition: "box-shadow .15s ease-in-out"
    }
    
}));