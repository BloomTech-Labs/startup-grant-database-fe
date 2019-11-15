import React from "react";
import { connect } from "react-redux";
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
import { dialogStyles } from "../../styles/dialogStyles"
import { submitSuggestion } from "../../actions/index";

// When user clicks on

const SuggestionDialog = props => {
  // hold state locally before passing to API

  const [suggestion, setSuggestion] = React.useState({
    subject: "",
    suggestion: ""
  });

  const [open, setOpen] = React.useState(false);

  const classes = dialogStyles();

  // need handlers for open and close based on how dialog works in Material UI (see docs)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSuggestion("");
  };

  // change handler with event.target.value destructured
  const handleChanges = name => ({ target: { value } }) => {
    setSuggestion({
      ...suggestion,
      [name]: value
    });
  };

  // Combining state from different sources

  const handleSubmit = () => {
    const sendObject = {
      subject: suggestion.subject,
      suggestion: suggestion.suggestion,
      grant_id: props.id
    };
    console.log("OBJECT BEING SENT TO ACTION", sendObject);
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
            <DialogContentText className={classes.subheaderText}>
              Our admins will review your suggestions and make the appropriate
              changes
            </DialogContentText>
          </Grid>
        </Grid>
        <DialogContent style={{ paddingBottom: "0" }}>
          <form>
            <TextField
              margin="normal"
              label="subject"
              onChange={handleChanges("subject")}
              variant="outlined"
            />
            <br />
            <TextField
              margin="normal"
              label="suggestion"
              onChange={handleChanges("suggestion")}
              variant="outlined"
              multiline
              rows="4"
              className={classes.formField}
            />
            <br />
          </form>
        </DialogContent>
        <DialogActions>
          <Grid container justify="center">
            <Grid item>
              <Button
                color="secondary"
                variant="outlined"
                onClick={handleClose}
                className={classes.btn}
                style={{ marginBottom: "0" }}
              >
                Cancel
              </Button>
            </Grid>
            <Grid>
              <Button
                color="primary"
                variant="outlined"
                onClick={handleSubmit}
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
