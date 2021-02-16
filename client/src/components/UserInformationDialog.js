import React, { useEffect, useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField
} from '@material-ui/core';
import { useStyles } from '../styles/UserInformationDialogStyles';
import { authSteps } from '../utils/authSteps';

export default function UserInformationDialog({ open, userFields }) {
    const { content, root, logoutButton } = useStyles();
    const { logout, session } = authSteps.route;
    const [userRole, setUserRole] = useState(null)

    const handleLogout = async () => {
        const res = await fetch(logout, {
            method: 'POST'
        })
        window.location.reload()
    };

    useEffect(() => {
        (async function getUserRole() {
            const res = await fetch(session, {
                method: 'POST'
            })
            const { role } = await res.json();
            setUserRole(role)
        })()
    }, [])

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