import React from "react";
import { dialogStyles } from "../styles/DialogStyles";
import Button from "@material-ui/core/Button";

export default () => {
  const [open, setOpen] = React.useState(false);

  const classes = dialogStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Button
      className={classes.applyButton}
      variant="contained"
      color="primary"
      onClick={handleOpen}
    >
      Suggest Changes
    </Button>
  );
};
