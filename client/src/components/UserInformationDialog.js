import React, { useEffect, useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Divider
} from '@material-ui/core';
import { useStyles } from '../styles/UserInformationDialogStyles';
import { authSteps } from '../utils/authSteps';
import useForm from '../utils/useForm';

export default function UserInformationDialog({ open, userFields }) {
    const { content, root, logoutButton } = useStyles();
    const { logout, session } = authSteps.route;
    const [userRole, setUserRole] = useState(null);
    const { values, updateValue } = useForm({
        firstName: '',
        middleName: '',
        lastName: '',
        state: '',
        county: '',
        city: '',
        street: '',
        zip: '',
        transactionId: '',
        price: '',
        vin: '',
        year: '',
        make: '',
        model: '',
        body: '',
        odometer: '',
        titleNumber: '',
        licenseNumber: ''
    })
    const {
        firstName,
        middleName,
        lastName,
        state,
        county,
        city,
        street,
        zip,
        transactionId,
        price,
        vin,
        year,
        make,
        model,
        body,
        odometer,
        titleNumber,
        licenseNumber
    } = values;

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
                        <TextField value={firstName} name="firstName" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="First Name" color="secondary" />
                        <TextField value={middleName} name="middleName" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Middle Name" color="secondary" />
                        <TextField value={lastName} name="lastName" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Last Name" color="secondary" />
                        <TextField value={state} name="state" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="State" color="secondary" />
                        <TextField value={county} name="county" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="County" color="secondary" />
                        <TextField value={city} name="city" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="City" color="secondary" />
                        <TextField value={street} name="street" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Street" color="secondary" />
                        <TextField value={zip} name="zip" onChange={updateValue} type="number" variant="outlined" id="outlined-size-normal" label="Zip" color="secondary" />
                        <Divider />
                        <>
                            {userRole === "buyer" && (
                                <TextField value={transactionId} name="transactionId" onChange={updateValue} type="number" variant="outlined" id="outlined-size-normal" label="Transaction ID" color="secondary" />
                            )}
                            {userRole === "seller" && (
                                <>
                                    <TextField value={price} name="price" onChange={updateValue} type="number" variant="outlined" id="outlined-size-normal" label="Price" color="secondary" />
                                    <TextField value={vin} name="vin" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Vin" color="secondary" />
                                    <TextField value={year} name="year" onChange={updateValue} type="number" variant="outlined" id="outlined-size-normal" label="Year" color="secondary" />
                                    <TextField value={make} name="make" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Make" color="secondary" />
                                    <TextField value={model} name="model" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Model" color="secondary" />
                                    <TextField value={body} name="body" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Body" color="secondary" />
                                    <TextField value={odometer} name="odometer" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Odometer" color="secondary" />
                                    <Divider />
                                    <TextField value={titleNumber} name="titleNumber" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Title Number" color="secondary" />
                                    <TextField value={licenseNumber} name="licenseNumber" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="License Plate Number" color="secondary" />
                                </>
                            )}
                        </>
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