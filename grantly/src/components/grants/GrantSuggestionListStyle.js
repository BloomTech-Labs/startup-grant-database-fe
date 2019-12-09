import { makeStyles } from "@material-ui/core/styles";

export const GrantSuggestionStyle = makeStyles(theme => ({
   buttons: {
    borderRadius: '50%',
    backgroundColor: '#EF7B5C',
    boxShadow: 'none',
    borderWidth: '0px',
    margin: '2px 5px',
    padding: '6px',

    "&:hover": {
      backgroundColor: 'pink'
    }
   } 
}))