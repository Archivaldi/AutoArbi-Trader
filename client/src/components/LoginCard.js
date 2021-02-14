import React, { useState, useEffect } from 'react';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    TextField,
    Snackbar,
    CircularProgress,
    Select,
    MenuItem,
    FormControl,
    FormHelperText
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import UserAuthDialog from './UserAuthDialog';
import { authSteps } from '../utils/authSteps';
import useForm from '../utils/useForm';
import { validateEmail } from '../utils/validateEmail';

export default function LoginCard({ useStyles }) {
    const { landing, secondAuthLogin, secondAuthSignUp } = authSteps.appScript;
    const { signUp } = authSteps.route;
    const {
        root,
        brand,
        auto,
        arbiTrader,
        buttons,
        logo,
        email,
        formControl,
        selectEmpty
    } = useStyles();;
    const [authType, setAuthType] = useState(null);
    const [userRole, setUserRole] = useState(null);
    const [authDialogOpen, setAuthDialogOpen] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('Error!');
    const [apiCall, setApiCall] = useState(false);
    const { values, updateValue } = useForm({
        emailInput: '',
        passwordInput: '',
        passwordInputVerify: ''
    })
    const { emailInput, passwordInput, passwordInputVerify } = values;

    const handleAuthType = (selection) => {
        setAuthType(selection);
    };

    const handleGoBackReset = () => {
        setAuthType(null);
        setApiCall(false)
    }

    const handleSecondFormAuth = async () => {
        if (
            authType === 'signup' && passwordInput !== passwordInputVerify ||
            authType === 'signup' && passwordInputVerify === '' ||
            authType === 'signup' && !userRole ||
            passwordInput === '' ||
            emailInput === '' ||
            !validateEmail(emailInput)
        ) {
            if (passwordError === false) {
                setPasswordError(true)
                setTimeout(() => {
                    setPasswordError(false)
                }, 3000)
            }
            if (authType === 'signup' && passwordInput !== passwordInputVerify) {
                setErrorMessage('Passwords do not match!')
            }
            if (authType === 'signup' && passwordInputVerify === '') {
                setErrorMessage('Re-Enter Password Empty!')
            }
            if (authType === 'signup' && !userRole) {
                setErrorMessage('Transation Role Empty!')
            }
            if (passwordInput === '') {
                setErrorMessage('Password Empty!')
            }
            if (emailInput === '') {
                setErrorMessage('Email Empty!')
            }
            if (!validateEmail(emailInput)) {
                setErrorMessage('Not a valid Email!')
            }
        } else {
            if (authType === 'signup') {
                setApiCall(true)
                console.log(`${signUp}/${userRole}`)
                const res = await fetch(`${signUp}/${userRole}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify({
                        emailInput,
                        passwordInput
                    })
                })

                // setAuthDialogOpen(true)
            } else {
                console.log(`fetch login`)
                setApiCall(true)
                setAuthDialogOpen(true)
            }
        }
    }

    return (
        <>
            <UserAuthDialog
                open={authDialogOpen}
                setAuthDialogOpen={setAuthDialogOpen}
                handleGoBackReset={handleGoBackReset}
            />
            <Card className={root}>
                <div className={brand}>
                    <img src="https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true" alt="logo" className={logo} />
                    <Typography variant="h5" noWrap>
                        <span className={auto}>auto</span> <span className={arbiTrader}>arbi-trader</span>
                    </Typography>
                </div>
                <CardContent>
                    {apiCall === false ? (
                        <>
                            {authType === null ? (
                                <Typography align="center" color="textSecondary">
                                    {landing}
                                </Typography>
                            ) : (
                                    <>
                                        <Snackbar open={passwordError} onClick={() => setPasswordError(false)}>
                                            <Alert severity="error">
                                                {errorMessage}
                                            </Alert>
                                        </Snackbar>
                                        <Typography color="textSecondary">
                                            {authType === 'signup' ? <span>{secondAuthSignUp}</span> : <span>{secondAuthLogin}</span>}
                                        </Typography>
                                        <div className={email}>
                                            <TextField
                                                color="secondary"
                                                type="email"
                                                label="Email"
                                                id="emailInput"
                                                name="emailInput"
                                                value={emailInput}
                                                onChange={updateValue}
                                                required
                                            />
                                            <TextField
                                                color="secondary"
                                                type="password"
                                                label="Password"
                                                id="passwordInput"
                                                name="passwordInput"
                                                onChange={updateValue}
                                                value={passwordInput}
                                                required
                                            />
                                            {authType === 'signup' && (
                                                <>
                                                    <TextField
                                                        color="secondary"
                                                        type="password"
                                                        label="Re-Enter Password"
                                                        id="passwordInputVerify"
                                                        name="passwordInputVerify"
                                                        onChange={updateValue}
                                                        value={passwordInputVerify}
                                                        required
                                                    />
                                                    <FormControl className={formControl} color="secondary" required>
                                                        <Select
                                                            value={userRole}
                                                            onChange={e => setUserRole(e.target.value)}
                                                            displayEmpty
                                                            className={selectEmpty}
                                                            inputProps={{ 'aria-label': 'Without label' }}
                                                        >
                                                            <MenuItem value="" disabled>
                                                                Transaction Role
                                                            </MenuItem>
                                                            <MenuItem value="buyer">Buying</MenuItem>
                                                            <MenuItem value="seller">Selling</MenuItem>
                                                        </Select>
                                                        <FormHelperText>Transaction Role</FormHelperText>
                                                    </FormControl>
                                                </>
                                            )}
                                        </div>
                                    </>
                                )}
                        </>
                    ) : (
                            <CircularProgress color="secondary" />
                        )}
                </CardContent>
                <CardActions className={buttons}>
                    {authType === null ? (
                        <>
                            <Button
                                size="large"
                                color="secondary"
                                onClick={() => handleAuthType('login')}
                            >Logging In</Button>
                            <Button
                                size="large"
                                color="secondary"
                                onClick={() => handleAuthType('signup')}
                            >Signing Up</Button>
                        </>
                    ) : (
                            <>
                                <Button
                                    disabled={apiCall}
                                    size="large"
                                    color="secondary"
                                    onClick={() => handleAuthType(null)}
                                >Go Back</Button>
                                <Button
                                    disabled={apiCall}
                                    size="large"
                                    color="secondary"
                                    onClick={handleSecondFormAuth}
                                >{authType === 'login' ? "Login" : "Sign Up"}</Button>
                            </>
                        )}
                </CardActions>
            </Card>
        </>
    )
};