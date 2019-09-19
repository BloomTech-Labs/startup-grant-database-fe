import { makeStyles } from "@material-ui/core/styles";

const formStyles = makeStyles(theme => ({
  formContainer: {
    display: "flex",
    flexWrap: "wrap",
    margin: "10%"
  },
  inputText: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  }
}));

// export default function Hook() {
//     const classes = formStyles()
// }

export default formStyles;
