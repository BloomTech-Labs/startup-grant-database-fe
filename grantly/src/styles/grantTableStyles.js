import { makeStyles } from "@material-ui/core/styles";

export const grantTableStyles = makeStyles(theme => ({
  headerStyle: {
    fontFamily: "Nunito Sans",
    fontSize: "1em",
  },
  suggestionWrapper: {
    display: 'flex',
    flexDirection: 'column',
    margin: "1em",
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
  },
  userSuggestion: {
    fontFamily: "Nunito Sans",
    fontSize: '1.5em',
    width: '8.25em',
  },
  suggestionLi: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '.5em'
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

}));
