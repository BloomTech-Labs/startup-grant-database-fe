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
  suggestion: {
    fontSize: "1.2rem"
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
  }
}));
