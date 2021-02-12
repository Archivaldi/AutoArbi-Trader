import React, { useState, useEffect, useRef } from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
    CircularProgress
} from '@material-ui/core';
import { authSteps } from '../utils/authSteps';

export default function FormDialog({ open, handleDialogClose, styles }) {
    const [increment, setIncrement] = useState(0);
    const [checkInput, setCheckInput] = useState(false);
    const [input, setInput] = useState('');
    const [inputError, setInputError] = useState('');

    const tDNA = useRef();
    const { message } = authSteps;

    const handleInputChange = (value) => {
        setInput(value);
        value === message[increment] && checkPattern()
    }

    const handleIncrementUp = () => {
        tDNA.current.start();
        setIncrement(increment + 1);
        setCheckInput(false);
        setInput('');
    }


    const backAndReset = (failed) => {
        if (failed) {
            setInput('Whoops! Something when wrong, please back-out and try again');
        }
        tDNA.current.reset();
        setCheckInput(false);
        setIncrement(0);
        handleDialogClose()
    }

    const checkPattern = async () => {
        tDNA.current.stop();
        setCheckInput(true);
        const typingPattern = await tDNA.current.getTypingPattern({
            type: 1,
            text: input
        })

        console.log(typingPattern);

        const res = await fetch('/api/typing-dna/signup', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ typingPattern })
        })
        await res.json();

        res.status === 200 && handleIncrementUp(res)
    }


    useEffect(() => {
        if (!tDNA.current) {
            tDNA.current = new TypingDNA();
        }
    }, [tDNA])

    useEffect(() => {
        const input = [...input];
        const expected = [...message[increment]]
    }, [input])

    return (
        <div>
            <Dialog open={open} onClose={backAndReset} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title"><img width="200" src="https://github.com/Archivaldi/4wheelz/blob/master/client/src/images/ShoppedTypingDNA.png?raw=true" /></DialogTitle>
                <DialogContent className={styles}>
                    <DialogContentText>
                        To ensure the highest level of security, we are using a technology that will test who you are by the way you type!
                    </DialogContentText>
                    <Typography variant="body1" component="body1">
                        {increment < message.length ? (
                            <>
                                <span>Please type: <span style={{ background: '#00b0ff', color: '#464646' }}>{message[increment]}</span></span>
                                <TextField
                                    autoFocus
                                    autoComplete="off"
                                    margin="dense"
                                    id="name"
                                    label="Type Message Here"
                                    color="secondary"
                                    value={input}
                                    disabled={checkInput}
                                    onChange={e => handleInputChange(e.target.value)}
                                    fullWidth
                                />
                            </>
                        ) : (
                                <CircularProgress color="secondary" />
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