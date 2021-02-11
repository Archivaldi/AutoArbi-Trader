import React, { useState, useEffect } from 'react';
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

export default function FormDialog({ open, handleDialogClose, styles }) {
    const [increment, setIncrement] = useState(0);
    const [nextButton, setNextButton] = useState(true)
    const [input, setInput] = useState('');
    const { message } = authSteps;
    let tdna = undefined;

    const handleInputChange = (value) => {
        setInput(value)
        value === message[increment] && setNextButton(false);
    }

    const handleIncrementUp = () => {
        setIncrement(increment + 1);
        setNextButton(true);
        setInput('');
    }

    const backAndReset = () => {
        handleDialogClose();
        setInput('')
        setNextButton(true)
        // reset test after dialog close animation
        setTimeout(() => {
            setIncrement(0)
        }, 200)
    }

    useEffect(() => {
        tdna = new TypingDNA();
        console.log(tdna)
        // return tdna
    }, [])

    return (
        <div>
            <Dialog open={open} onClose={backAndReset} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"><img width="200" src="https://github.com/Archivaldi/4wheelz/blob/userAuthFE/client/src/images/ShoppedTypingDNA.png?raw=true" /></DialogTitle>
                <DialogContent className={styles}>
                    <DialogContentText>
                        To ensure the highest level of security, we are using a technology that will test who you are by the way you type!
                    </DialogContentText>
                    <Typography variant="body1" component="body1">
                        {increment < message.length ? (
                            <>
                                <span>Please type: {message[increment]}</span>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="name"
                                    label="Type Message Here"
                                    type="email"
                                    color="secondary"
                                    value={input}
                                    disabled={!nextButton}
                                    onChange={e => handleInputChange(e.target.value)}
                                    fullWidth
                                />
                            </>
                        ) : (
                                <span>Thank you for participating!</span>
                            )}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={backAndReset} color="secondary">
                        Go Back
                    </Button>
                    {increment < message.length ? (
                        <Button
                            onClick={handleIncrementUp}
                            color="secondary"
                            disabled={nextButton}
                        >
                            Next
                        </Button>
                    ) : (
                            <Button
                                onClick={checkPattern}
                                color="secondary"
                            >
                                Submit
                            </Button>
                        )}
                </DialogActions>
            </Dialog>
        </div>
    );
}