import { makeStyles } from "@material-ui/core/styles";

const formStyles = makeStyles(theme => ({
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    margin: "10%"
  },
  inputText: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  dropDown: {
    width: 200
  }
}));

export default formStyles;
