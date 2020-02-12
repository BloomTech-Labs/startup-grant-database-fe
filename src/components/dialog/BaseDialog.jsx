import React, {useState} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    TextField
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {useForm} from "../../hooks/useForm";

const useStyles = makeStyles(theme => ({
    applyButton: {
        color: '#fff',
        fontFamily: 'Nunito Sans',
        fontWeight: 600,
        marginTop: '20px'
    },
    header: {
        background: '#3CBBB1'
    },
    headerText: {
        color: '#ffffff',
        marginTop: '10px',
        textAlign: 'center'
    },
    btn: {
        margin: '20px',
        padding: '0 50px'
    },
    formField: {
        width: '100%'
    }

}));

function BaseDialog(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const [values, handleChange, handleSubmit, resetForm] = useForm({
        grant_id: props.id,
        subject: '',
        suggestion: ''
    }, doSubmit);

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        resetForm();
    };

    function doSubmit() {
        console.log(values);
    }

    return (
        <>
            <Button
                className={classes.applyButton}
                variant='contained'
                color='primary'
                onClick={handleOpen}
            >
                {props.actionButtonText}
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <Grid
                    container
                    justify='center'
                    direction='column'
                    alignItems='center'
                    className={classes.header}
                >
                    <Grid item>
                        <DialogTitle className={classes.headerText}>
                            {props.headerText}
                        </DialogTitle>
                    </Grid>
                    <Grid item>
                        <DialogContentText className={classes.headerText}>
                            {props.message}
                        </DialogContentText>
                    </Grid>
                </Grid>
                <form onSubmit={handleSubmit}>
                    <DialogContent>

                        <TextField
                            margin='normal'
                            label={props.subject}
                            onChange={handleChange}
                            name='subject'
                            value={values.subject}
                            variant='outlined'
                            fullWidth
                        />
                        <TextField
                            margin='normal'
                            label={props.suggestion}
                            onChange={handleChange}
                            name='suggestion'
                            value={values.suggestion}
                            variant='outlined'
                            multiline
                            rows='4'
                            fullWidth
                        />

                    </DialogContent>
                    <DialogActions>
                        <Grid
                            container
                            justify='center'
                        >
                            <Grid item>
                                <Button
                                    color='secondary'
                                    variant='outlined'
                                    onClick={handleClose}
                                    className={classes.btn}
                                >
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button
                                    color='primary'
                                    variant='outlined'
                                    type='submit'
                                    className={classes.btn}
                                >
                                    Send
                                </Button>
                            </Grid>
                        </Grid>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    )
}

export default BaseDialog;
