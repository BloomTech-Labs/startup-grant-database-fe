import { makeStyles } from "@material-ui/core/styles";

export const dialogStyles = makeStyles(theme => ({
  applyButton: {
    color: "#fff"
  },
  formField: {
    width: 500
  }
}));

export const editGrantStyles = makeStyles(theme => ({
  editIcon: {},
  editButton: {
    alignSelf: "flex-start",
    minWidth: "24px"
  }
}));
