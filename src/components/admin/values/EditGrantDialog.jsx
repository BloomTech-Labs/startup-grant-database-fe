import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />
});

function EditGrantDialog({isOpen, handleClose, title, message, component: Component, grant}) {
    return (
        <Dialog open={isOpen} onClose={handleClose} keepMounted TransitionComponent={Transition}>
            <DialogTitle id='edit-grant-slide-title'>{title}</DialogTitle>
            <DialogContent>
                <DialogContentText id='edit-grant-slide-description'>
                    {message}
                </DialogContentText>
                <Component grant={grant}/>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditGrantDialog
