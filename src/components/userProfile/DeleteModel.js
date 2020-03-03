import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {Button} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    paper: {
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: `${50}%`,
        left: `${50}%`,
        transform: `translate(-${50}%, -${50}%)`
    },
    button: {
        margin: "1em 0 0 30%"
    }
}));

export default function SimpleModal() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button
                type="button"
                variant="contained"
                color="secondary"
                onClick={handleOpen}
            >
                Delete Account
            </Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div className={classes.paper}>
                    <h2 id="simple-modal-title">
                        ARE YOU SURE YOU WANT TO DELETE YOUR ACCOUNT? THIS ACTION CANNOT BE
                        UNDONE!
                    </h2>
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                    >
                        Yes Delete It
                    </Button>
                </div>
            </Modal>
        </div>
    );
}
