import { makeStyles } from "@material-ui/core/styles";

export const suggestionStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    borderRadius: "2px",
    marginBottom: "0.5rem",
    fontFamily: "Roboto",
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
  },
  suggestionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: "1em",
  },
  userSuggestion: {
    fontFamily: "Nunito Sans",
    fontSize: '1.5em',
    width: '8.25em',
  },
  suggestionLi: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '.5em',
    padding: '13px'
  },
  p_wrapper: {
    width: '400px'
  },
  suggestionParagraph: {
    width: '50%',
    overflow: "auto",
    borderBottom: '3px solid #77D4D0',
    padding: '10px',
    marginTop: '5px',
    fontSize: '1.11rem'
  },
  suggestionHeader: {
    width: '50%',
    paddingLeft: '10px',
    paddingBottom: '5px',
    marginTop: '5px',
    fontSize: '1.3rem'
  },
  suggestionNone: {
    width: '20%',
    borderBottom: '3px solid #77D4D0',
    padding: '10px',
    marginTop: '5px',
    fontSize: '1.25rem'
  },
  delSuggestBtn: {
    borderRadius: '50px',
    alignSelf: 'center',
    backgroundColor: '#EF7B5C',
    boxShadow: 'none',
    borderWidth: '0px',
    margin: '2px 5px 2px 0',
    padding: '6px',
    height: '40px',
    width: '40px',
    "&:hover": {
      backgroundColor: '#f0a692'
    }
  }
}));
