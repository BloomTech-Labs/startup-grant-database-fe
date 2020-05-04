import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { useAuth0 } from "../auth0/Auth0Wrapper";

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { loginWithRedirect } = useAuth0();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {" "}
          Stay up to date with the latest funding offerings and opportunities.
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            "I know where I'm putting my money."
          </DialogContentText>
          <DialogContentText>- Marc Andreessen</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={() => loginWithRedirect()} color="primary">
            Create an Account
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
