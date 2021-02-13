import React, { useState, useEffect } from 'react';
import {
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
    TextField,
    Snackbar,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import UserAuthDialog from './UserAuthDialog';
import { authSteps } from '../utils/authSteps';
import useForm from '../utils/useForm';

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
    const { values, updateValue } = useForm({
        emailInput: '',
        passwordInput: '',
        passwordInputVerify: ''
    })
    const { emailInput, passwordInput, passwordInputVerify } = values;

    const handleDialogOpen = () => {
        setAuthDialogOpen(true)
    };

    const handleDialogClose = () => {
        setAuthDialogOpen(false)
    };

    const handleAuthType = (selection) => {
        setAuthType(selection);
    };

    const handleGoBackReset = () => {

    }

    const handleSecondFormAuth = () => {
        if (authType === 'signup') {
            if (passwordInput !== passwordInputVerify) {
                if (passwordError === false) {
                    setPasswordError(true)
                    setTimeout(() => {
                        setPasswordError(false)
                    }, 3000)
                }
            }
        } else {
            alert('you are logging in')
        }
    }

    return (
        <>
            <UserAuthDialog
                open={authDialogOpen}
                handleDialogClose={handleDialogClose}
            />
            <Card className={root}>
                <div className={brand}>
                    <img src="https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/AutoArbiTraderLogo.png?raw=true" alt="logo" className={logo} />
                    <Typography variant="h5" noWrap>
                        <span className={auto}>auto</span> <span className={arbiTrader}>arbi-trader</span>
                    </Typography>
                </div>
                <CardContent>
                    {authType === null ? (
                        <Typography color="textSecondary">
                            {landing}
                        </Typography>
                    ) : (
                            <>
                                <Snackbar open={passwordError} onClick={() => setPasswordError(false)}>
                                    <Alert severity="error">
                                        Passwords do not match!
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
