import { makeStyles } from "@material-ui/core/styles";

export const tableSuggStyles = makeStyles(theme => ({
  suggestionUl: {
    padding: '0',
    minWidth: "200px"
  },
  suggestionLi: {
    display: 'flex',
    padding: '13px',
    borderTop: '3px solid #77D4D0',
  },
  suggestionLabel: {
    fontFamily: "Nunito Sans"
  },
  suggestionNone: {
    width: '20%',
    borderBottom: '3px solid #77D4D0',
    padding: '10px',
    marginTop: '5px',
    fontSize: '1.25rem'
  },
  iconBtnWithSuggestions: {
    backgroundColor: '#3DB8B3',
    paddingRight: "5px",
    border: "none"
  },
  iconBtnWithOutSuggestions: {
    backgroundColor: 'none',
    color: "000",
    cursor: "unset",
    "&:hover":{
      backgroundColor: 'white'
    }
  },
}));
