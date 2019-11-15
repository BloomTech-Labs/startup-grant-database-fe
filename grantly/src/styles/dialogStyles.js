import { makeStyles } from "@material-ui/core/styles";

export const dialogStyles = makeStyles(theme => ({
  applyButton: {
    color: "#fff",
    fontFamily: "Nunito Sans",
    fontWeight: "600",
    marginTop: "20px"
  },
  formField: {
    width: "100%"
  },
  header: {
    background: "#3CBBB1"
  },
  headerText: {
    color: "#ffffff",
    marginTop: "10px",
    textAlign: "center"
  },
  subheaderText: {
    color: "#ffffff",
    margin: "0 20px 20px 20px"
  },
  btn: {
    marginTop: 20,
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    // paddingTop: 20,
    // paddingBottom: 20,
    paddingRight: 50,
    paddingLeft: 50
  }
}));

export const editGrantStyles = makeStyles(theme => ({
  editIcon: {},
  editButton: {
    alignSelf: "flex-start",
    minWidth: "24px"
  },
  appBar: {
    position: "relative",
    // marginBottom: "5rem"
    color: "white"
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1
  }
}));
