import React from 'react';
// import Image from 'next/image';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from '@material-ui/core';


export default function ViewDocumentDialog({ url, open, handleDocumentClose, type }) {
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
                        <img
                            style={{
                                maxHeight: '350px',
                                maxWidth: '500px'
                            }}
                            src={"https://res.cloudinary.com/fourwheels/image/upload/v1613455329/rbrczqunkjgoo5mviztq.pdf"}
                            alt={type}
                        />
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