import React from "react";
import { dialogStyles } from "../styles/DialogStyles";
import {
  Button,
  Fab,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";

export default () => {
  const [suggestion, setSuggestion] = React.useState("");
  console.log("SuggestionDialog suggestion", suggestion);

  const [open, setOpen] = React.useState(false);

  const classes = dialogStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChanges = name => ({ target: { value } }) => {
    setSuggestion({ ...suggestion, [name]: value });
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
        <DialogTitle>Suggest changes</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please suggest changes in the below dialog
          </DialogContentText>
          <form>
            <TextField
              label="suggestion"
              value={suggestion}
              onChange={handleChanges("suggestion")}
              margin="normal"
              className={classes.formField}
            />
            <br />
            {/* <FormControl>
              <InputLabel htmlFor="muscles">Muscles</InputLabel>
              <Select
                value={muscles}
                onChange={handleChanges("muscles")}
                className={classes.formField}
              >
                {categories.map(category => {
                  return (
                    <MenuItem value={category} key={category}>
                      {category}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <br />
            <TextField
              label="Description"
              multiline
              rows="4"
              onChange={handleChanges("description")}
              margin="normal"
              className={classes.formField}
            /> */}
          </form>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="outlined" onClick={handleSubmit}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
