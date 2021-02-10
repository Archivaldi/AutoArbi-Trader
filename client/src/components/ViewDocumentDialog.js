import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ViewDocumentDialog({ open, handleDocumentClose, type }) {
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleDocumentClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Viewing ${type} Document`}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Hello
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDocumentClose} color="secondary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}