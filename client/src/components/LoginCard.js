import React, { useState, useEffect } from 'react';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    TextField,
    Snackbar,
    CircularProgress
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import UserAuthDialog from './UserAuthDialog';
import { authSteps } from '../utils/authSteps';
import useForm from '../utils/useForm';
import { validateEmail } from '../utils/validateEmail';

export default function LoginCard({ useStyles }) {
    const { landing, secondAuth } = authSteps.appScript;
    const {
        root,
        brand,
        auto,
        arbiTrader,
        buttons,
        logo,
        email
    } = useStyles();;
    const [authType, setAuthType] = useState(null);
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

    const handleSecondFormAuth = () => {
        if (authType === 'signup') {
            if (
                passwordInput !== passwordInputVerify ||
                passwordInput === '' ||
                passwordInputVerify === '' ||
                emailInput === '' ||
                !validateEmail(emailInput)
            ) {
                if (passwordError === false) {
                    setPasswordError(true)
                    setTimeout(() => {
                        setPasswordError(false)
                    }, 3000)
                }
                if (passwordInput !== passwordInputVerify) {
                    setErrorMessage('Passwords do not match!')
                }
                if (passwordInput === '') {
                    setErrorMessage('Password Empty!')
                }
                if (passwordInputVerify === '') {
                    setErrorMessage('Re-Enter Password Empty!')
                }
                if (emailInput === '') {
                    setErrorMessage('Email Emapty!')
                }
                if (!validateEmail(emailInput)) {
                    setErrorMessage('Not a valid Email!')
                }
            } else {
                console.log("API call to signup")
                setApiCall(true)
                setAuthDialogOpen(true)
            }
        } else {
            console.log("API call to login")
            setApiCall(true)
            setAuthDialogOpen(true)
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
                                            {secondAuth}
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
                            >Login</Button>
                            <Button
                                size="large"
                                color="secondary"
                                onClick={() => handleAuthType('signup')}
                            >Sign Up</Button>
                        </>
                    ) : (
                            <>
                                <Button
                                    size="large"
                                    color="secondary"
                                    onClick={() => handleAuthType(null)}
                                >Go Back</Button>
                                <Button
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