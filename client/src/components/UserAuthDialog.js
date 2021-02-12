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
    const [textSession, setTextSession] = useState('');
    const [input, setInput] = useState('');
    const { message } = authSteps;
    const tDNA = useRef();

    const handleInputChange = (value) => {
        setInput(value);
        value.length === message[increment].length && setTextAndCheck()
    }

    const handleIncrementUp = () => {
        tDNA.current.start();
        setCheckInput(false);
        setInput('');

        increment === message.length - 1 ?
            setIncrement(0) :
            setIncrement(increment + 1);
    }

    const setTextAndCheck = () => {
        setTextSession([...textSession, input].join(''))
        checkPattern()
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
            length: input.length
        });
        const patternQuality = tDNA.current.getQuality(typingPattern);

        console.log(typingPattern);
        console.log(patternQuality);

        const res = await fetch('/api/typing-dna/signup', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ typingPattern })
        })
        const server = await res.json();

        console.log(server)

        res.status === 200 && handleIncrementUp()
    }


    useEffect(() => {
        if (!tDNA.current) {
            tDNA.current = new TypingDNA();
        }
    }, [tDNA])

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
                                Please type <span style={{ color: 'rgba(255, 255, 255, 0.7)' }}>(typos accepted)</span>: {message[increment].substring(0, input.length)}<span style={{ background: '#0081cb', borderRadius: '2px' }}>{message[increment].substring(input.length, message[increment].length)}</span>
                                <TextField
                                    autoFocus
                                    autoComplete="off"
                                    margin="dense"
                                    id="name"
                                    label="Type Message Here"
                                    color="secondary"
                                    value={input}
                                    inputProps={{ spellCheck: 'false' }}
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