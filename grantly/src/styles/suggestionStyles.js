import { makeStyles } from "@material-ui/core/styles";

export const suggestionStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    borderRadius: "2px",
    marginBottom: "0.5rem",
    fontFamily: "Roboto",
    borderLeft: "5px solid #3DB8B3"
  },
  subject: {
    fontSize: "1.6rem",
    fontWeight: theme.typography.fontWeightRegular
  },
  button: {
    color: "#fff",
    margin: "20px auto",
    fontFamily: "Nunito Sans",
    fontWeight: "600"
  },
  details: {
    padding: "0 0 0 1rem"
  },
  suggestion: {
    fontSize: "1.2rem",
    padding: 0
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  suggestionButton: {
    color: "#fff",
    margin: "20px auto",
    fontFamily: "Nunito Sans",
    fontWeight: "600"
  }
}));
