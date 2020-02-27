import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export const ConfirmedModel = props => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(props.openStatus);
  return (
    <div>
      {/* <button type="button">Open Modal</button> */}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onBackdropClick={() => {
          setOpen(false);
        }}
        // onClose={() => (status = false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">
            Thank you, your suggestion has been submitted!
          </h2>
          <p id="simple-modal-description">We will review it shortly.</p>
        </div>
      </Modal>
    </div>
  );
};
