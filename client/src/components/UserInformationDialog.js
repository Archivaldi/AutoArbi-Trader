import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from '@material-ui/core';
import { useStyles } from '../styles/UserInformationDialogStyles';
import { authSteps } from '../utils/authSteps';

export default function UserInformationDialog({ open }) {
    const { content, root, logoutButton } = useStyles();
    const { logout } = authSteps.route;

    const handleLogout = async () => {
        const res = await fetch(logout, {
            method: 'POST'
        })
        window.location.reload()
    }

    return (
        <div>
            <Dialog
                open={open}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Please fill out this form 😊"}</DialogTitle>
                <DialogContent className={content}>
                    <form className={root} noValidate autoComplete="off">
                        <TextField variant="outlined" id="outlined-size-normal" label="Standard" color="secondary" />
                        <TextField variant="outlined" id="outlined-size-normal" label="Standard" color="secondary" />
                        <TextField variant="outlined" id="outlined-size-normal" label="Standard" color="secondary" />
                        <TextField variant="outlined" id="outlined-size-normal" label="Standard" color="secondary" />
                        <TextField variant="outlined" id="outlined-size-normal" label="Standard" color="secondary" />
                        <TextField variant="outlined" id="outlined-size-normal" label="Standard" color="secondary" />
                        <TextField variant="outlined" id="outlined-size-normal" label="Standard" color="secondary" />
                        <TextField variant="outlined" id="outlined-size-normal" label="Standard" color="secondary" />
                        <TextField variant="outlined" id="outlined-size-normal" label="Standard" color="secondary" />
                        <TextField variant="outlined" id="outlined-size-normal" label="Standard" color="secondary" />
                        <TextField variant="outlined" id="outlined-size-normal" label="Standard" color="secondary" />
                        <TextField variant="outlined" id="outlined-size-normal" label="Standard" color="secondary" />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button size="large" className={logoutButton} onClick={handleLogout}>
                        Log Out
                    </Button>
                    <Button size="large" color="secondary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}