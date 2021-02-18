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
                <DialogTitle id="alert-dialog-title"> <img src="https://raw.githubusercontent.com/Archivaldi/4wheelz/master/client/src/images/ShoppedAnvilLogo.png" alt="anvil_logo" width="200"/> </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        <embed
                            style={{
                                maxHeight: '350px',
                                maxWidth: '500px'
                            }}
                            src={url}
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