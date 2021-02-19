import React, { useEffect, useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Divider,
    Snackbar,
    Typography
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { useStyles } from '../styles/UserInformationDialogStyles';
import { authSteps } from '../utils/authSteps';
import { appRoute } from '../utils/appRoute';
import useForm from '../utils/useForm';

export default function UserInformationDialog() {
    const { content, root, logoutButton, textCenter } = useStyles();
    const { logout, session } = authSteps.route;
    const { userInfo, addUserInfo } = appRoute;
    const [infoDialogOpen, setInfoDialogOpen] = useState(false);
    const [apiCall, setApiCall] = useState(false);
    const [userRole, setUserRole] = useState(null);
    const [errorDisplayed, setErrorDisplayed] = useState(false);
    const [errorMessage, setErrorMessage] = useState('Error!');
    const { values, updateValue } = useForm({
        firstName: '',
        lastName: '',
        state: '',
        county: '',
        city: '',
        street: '',
        zip: '',
        transactionId: '',
        price: '60000',
        vin: 'SAJWA2GEXBMV00832',
        year: '2020',
        make: 'Tesla',
        model: 'S',
        body: 'P100D',
        odometer: '20142',
        titleNumber: '830774853',
        regDate: '12/21',
        regNumber: 'F649336',
        licenseNumber: 'NPD7309'
    })

    const {
        firstName,
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
        regDate,
        regNumber,
        licenseNumber
    } = values;

    const handleSuccessCall = () => {
        window.location.replace('/dashboard');
    }

    const handleFormSubmit = async () => {
        if (
            firstName === '' ||
            lastName === '' ||
            state === '' ||
            county === '' ||
            city === '' ||
            street === '' ||
            zip === '' ||
            userRole === 'buyer' && transactionId === '' ||
            userRole === 'seller' && price === '' ||
            userRole === 'seller' && vin === '' ||
            userRole === 'seller' && year === '' ||
            userRole === 'seller' && make === '' ||
            userRole === 'seller' && model === '' ||
            userRole === 'seller' && body === '' ||
            userRole === 'seller' && odometer === '' ||
            userRole === 'seller' && titleNumber === '' ||
            userRole === 'seller' && licenseNumber === ''
        ) {
            setErrorMessage('Missing Fields!')
            if (errorDisplayed === false) {
                setErrorDisplayed(true)
                setTimeout(() => {
                    setErrorDisplayed(false)
                }, 3000)
            }
        } else {
            setApiCall(true);
            const res = await fetch(addUserInfo, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    firstName,
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
                    regDate,
                    regNumber,
                    licenseNumber
                })
            })
            const message = await res.json();

            if (message.user_id) {
                handleSuccessCall()
            } else {
                setErrorMessage(message.error)
                if (errorDisplayed === false) {
                    setErrorDisplayed(true)
                    setTimeout(() => {
                        setErrorDisplayed(false)
                    }, 3000)
                }
                setApiCall(false);
            }
        }
    }

    const handleLogout = async () => {
        await fetch(logout, {
            method: 'POST'
        })
        window.location.reload()
    };

    useEffect(() => {
        (async function getUserInformation() {
            const resOne = await fetch(session, {
                method: 'POST'
            })
            const { role } = await resOne.json();
            setUserRole(role)

            const resTwo = await fetch(userInfo, {
                method: 'POST'
            })
            const { message } = await resTwo.json();
            if (message === "Some info missing") {
                setInfoDialogOpen(true)
            }
        })()
    }, []);

    return (
        <div>
            <Snackbar open={errorDisplayed}>
                <Alert severity="error">
                    {errorMessage}
                </Alert>
            </Snackbar>
            <Dialog
                open={infoDialogOpen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Please fill out this form 😊"}</DialogTitle>
                <DialogContent className={content}>
                    <form className={root} noValidate autoComplete="off">
                        <TextField disabled={apiCall} value={firstName} name="firstName" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="First Name" color="secondary" />
                        <TextField disabled={apiCall} value={lastName} name="lastName" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Last Name" color="secondary" />
                        <TextField disabled={apiCall} value={state} name="state" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="State" color="secondary" />
                        <TextField disabled={apiCall} value={county} name="county" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="County" color="secondary" />
                        <TextField disabled={apiCall} value={city} name="city" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="City" color="secondary" />
                        <TextField disabled={apiCall} value={street} name="street" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Street" color="secondary" />
                        <TextField disabled={apiCall} value={zip} name="zip" onChange={updateValue} type="number" variant="outlined" id="outlined-size-normal" label="Zip" color="secondary" />
                        <Divider />
                        <>
                            {userRole === "buyer" && (
                                <>
                                    <Typography className={textCenter} variant="body1">💡Tip: You can get this from the seller</Typography>
                                    <TextField disabled={apiCall} value={transactionId} name="transactionId" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Transaction ID" color="secondary" />
                                </>
                            )}
                            {userRole === "seller" && (
                                <>
                                    <TextField disabled={apiCall} value={price} name="price" onChange={updateValue} type="number" variant="outlined" id="outlined-size-normal" label="Price" color="secondary" />
                                    <TextField disabled={apiCall} value={vin} name="vin" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Vin" color="secondary" />
                                    <TextField disabled={apiCall} value={year} name="year" onChange={updateValue} type="number" variant="outlined" id="outlined-size-normal" label="Year" color="secondary" />
                                    <TextField disabled={apiCall} value={make} name="make" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Make" color="secondary" />
                                    <TextField disabled={apiCall} value={model} name="model" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Model" color="secondary" />
                                    <TextField disabled={apiCall} value={body} name="body" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Body" color="secondary" />
                                    <TextField disabled={apiCall} value={odometer} name="odometer" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Odometer" color="secondary" />
                                    <Divider />
                                    <TextField disabled={apiCall} value={regDate} name="regDate" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Registration Date" color="secondary" />
                                    <TextField disabled={apiCall} value={regNumber} name="regNumber" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Registration Number" color="secondary" />
                                    <TextField disabled={apiCall} value={titleNumber} name="titleNumber" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="Title Number" color="secondary" />
                                    <TextField disabled={apiCall} value={licenseNumber} name="licenseNumber" onChange={updateValue} variant="outlined" id="outlined-size-normal" label="License Plate Number" color="secondary" />
                                </>
                            )}
                        </>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button disabled={apiCall} size="large" className={logoutButton} onClick={handleLogout}>
                        Log Out
                    </Button>
                    <Button disabled={apiCall} size="large" color="secondary" onClick={handleFormSubmit}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}