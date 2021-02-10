import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function FileUploadDialog({ open, handleUploadClose, type }) {
    const classes = useStyles()
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleUploadClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Upload ${type} Document`}</DialogTitle>
                <DialogContent>
                    <form className={classes.root} noValidate autoComplete="off">
                        <div>
                            <TextField id="standard-error" label="Error" />
                            <TextField
                                id="standard-error-helper-text"
                                label="Error"
                                defaultValue="Hello World"
                                helperText="Incorrect entry."
                            />
                        </div>
                        <div>
                            <TextField

                                id="filled-error"
                                label="Error"
                                defaultValue="Hello World"
                                variant="filled"
                            />
                            <TextField

                                id="filled-error-helper-text"
                                label="Error"
                                defaultValue="Hello World"
                                helperText="Incorrect entry."
                                variant="filled"
                            />
                        </div>
                        <div>
                            <TextField

                                id="outlined-error"
                                label="Error"
                                defaultValue="Hello World"
                                variant="outlined"
                            />
                            <TextField

                                id="outlined-error-helper-text"
                                label="Error"
                                defaultValue="Hello World"
                                helperText="Incorrect entry."
                                variant="outlined"
                            />
                        </div>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button color="secondary">
                        Submit
                    </Button>
                    <Button onClick={handleUploadClose} color="secondary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}