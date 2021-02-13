import React, { useState, useEffect, useRef } from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography
} from '@material-ui/core';
import { authSteps } from '../utils/authSteps';
import { useStyles } from '../styles/AuthDialogSyles';


export default function FormDialog({ open, handleDialogClose }) {
    const {
        content,
        typos,
        currentChar,
        charsToBeTyped,
        welcome
    } = useStyles();
    const { message, route, userId } = authSteps;
    const [userID] = useState(userId);

    const [checkInput, setCheckInput] = useState(false);
    const [auth, setAuth] = useState(false);
    const [authSession, setAuthSession] = useState(0);
    const [increment, setIncrement] = useState(0);
    const [input, setInput] = useState('');
    const tDNA = useRef();

    const handleIncrementUp = () => {
        tDNA.current.start();
        setCheckInput(false);
        setInput('');
        setAuthSession(authSession + 1)
        increment === message.length - 1 ?
            setIncrement(0) :
            setIncrement(increment + 1);
    }

    const backAndReset = () => {
        tDNA.current.reset();
        setCheckInput(false);
        setIncrement(0);
        handleDialogClose()
    }

    const checkPattern = async () => {
        tDNA.current.stop();
        setCheckInput(true);
        const typingPattern = await tDNA.current.getTypingPattern({
            type: 0,
            text: input
        });
        const patternQuality = tDNA.current.getQuality(typingPattern);

        if (patternQuality > 0.3) {
            const res = await fetch(route.signUp, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    typingPattern,
                    patternQuality,
                    authSession,
                    userID,
                    input
                })
            })
            const { message } = await res.json();

            console.log(message)

            if (res.status === 200) {
                handleIncrementUp();
                if (message.result === 1 && message.enrollment === 1) {
                    setAuth(true);
                }
            } else {
                alert("An error occurred on our end. Please refresh and try again.")
                handleIncrementUp()
            }
        } else {
            handleIncrementUp()
        }
    }

    useEffect(() => {
        if (!tDNA.current) {
            tDNA.current = new TypingDNA();
        }
    }, [tDNA])

    useEffect(() => {
        input.length === message[increment].length && checkPattern()
    }, [input])

    return (
        <div>
            <Dialog open={open} onClose={backAndReset} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"><img width="200" src="https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true" /></DialogTitle>
                <DialogContent className={content}>
                    <DialogContentText>
                        <span>To ensure the highest level of security, we are using a technology that will test who you are by the way you type! {!auth && (<span>Please note, it may take up to 5 attempts.</span>)}</span>
                    </DialogContentText>
                    <Typography variant="body1" component="body1">
                        {!auth ? (
                            <>
                                <span>
                                    Please type <span className={typos}>(typos accepted)</span>:{" "}
                                    {message[increment].substring(0, input.length)}
                                    <span className={currentChar}>{message[increment].charAt(input.length)}</span>
                                    <span className={charsToBeTyped}>{message[increment].substring(input.length + 1, message[increment].length)}</span>
                                </span>
                                <TextField
                                    autoFocus
                                    inputProps={{ spellCheck: 'false' }}
                                    autoComplete="off"
                                    margin="dense"
                                    id="name"
                                    label="Type Phrase Here"
                                    color="secondary"
                                    value={input}
                                    disabled={checkInput}
                                    onChange={e => setInput(e.target.value)}
                                    fullWidth
                                />
                            </>
                        ) : (
                                <h3 className={welcome}>Welcome {userID}</h3>
                            )}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={backAndReset} color="secondary">
                        Go Back
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}