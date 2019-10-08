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

  const [submitValue, setSubmitValue] = React.useState("");
  console.log("SuggestionDialog suggestion:", suggestion);
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
      subject: suggestion.subject,
      suggestion: suggestion.suggestion,
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
            <TextField
              margin="normal"
              label="subject"
              onChange={handleChanges("subject")}
              variant="outlined"
            />
            <br />
            <TextField
              label="suggestion"
              multiline
              rows="4"
              onChange={handleChanges("suggestion")}
              margin="normal"
              className={classes.formField}
              variant="outlined"
            />
            <br />
          </form>
        </DialogContent>
        <DialogActions>
          <Grid container justify="center">
            <Grid item>
              <Button
                color="primary"
                variant="outlined"
                onClick={handleSubmit}
                className={classes.btn}
              >
                Cancel
              </Button>
            </Grid>
            <Grid>
              <Button
                color="primary"
                variant="outlined"
                onClick={handleClose}
                className={classes.btn}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default connect(
  null,
  { submitSuggestion }
)(SuggestionDialog);
