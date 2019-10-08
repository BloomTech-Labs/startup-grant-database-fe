import React from "react";
import { connect } from "react-redux";
import { dialogStyles } from "../styles/DialogStyles";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Grid,
  Typography
} from "@material-ui/core";
import { submitSuggestion } from "../../../actions/index";

const SuggestionDialog = props => {
  const [suggestion, setSuggestion] = React.useState({
    subject: "",
    suggestion: ""
  });
  const [subject, setSubject] = React.useState({
    subject: "",
    suggestion: ""
  });
  const [submitValue, setSubmitValue] = React.useState("");
  console.log("SuggestionDialog suggestion:", suggestion);
  console.log("SuggestionDialog subject:", subject);
  //   console.log("SuggestionDialog props", props);

  const [open, setOpen] = React.useState(false);

  const classes = dialogStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSuggestion("");
  };

  const handleChanges = name => ({ target: { value } }) => {
    setSuggestion({
      ...suggestion,
      [name]: value
    });
  };

  const handleSubmit = () => {
    const sendObject = {
      subject: subject.subject,
      suggestion: subject.suggestion,
      id: props.id
    };

    props.submitSuggestion(sendObject);
    handleClose();
    setSuggestion("");
  };

  return (
    <>
      <Button
        className={classes.applyButton}
        variant="contained"
        color="primary"
        onClick={handleOpen}
      >
        Suggest Changes
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
          className={classes.header}
        >
          <Grid item>
            <DialogTitle className={classes.headerText}>
              <Typography variant="h5">
                Submit your suggestion to Founder Grants
              </Typography>
            </DialogTitle>
          </Grid>
          <Grid item>
            <DialogContentText className={classes.headerText}>
              Our admins will review your suggestions and make the appropriate
              changes
            </DialogContentText>
          </Grid>
        </Grid>
        <DialogContent>
          <form>
            <br />
            <TextField margin="normal" onChange={handleChanges("subject")} />
            <br />
            <TextField
              multiline
              rows="4"
              onChange={handleChanges("suggestion")}
              margin="normal"
              className={classes.formField}
            />
            <br />
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="outlined" onClick={handleSubmit}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default connect(
  null,
  { submitSuggestion }
)(SuggestionDialog);
