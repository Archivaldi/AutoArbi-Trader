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

export default function FormDialog({ open, handleDialogClose, styles }) {
    const [increment, setIncrement] = useState(0);
    const [nextButton, setNextButton] = useState(true)
    const [input, setInput] = useState([]);
    const [text, setText] = useState('')
    const { message, url: { domain, port, path } } = authSteps;
    const tDNA = useRef();

    const handleInputChange = (value) => {
        setInput(value)
        value === message[increment] && setNextButton(false);
    }

    const handleIncrementUp = () => {
        setIncrement(increment + 1);
        setNextButton(true);
        setText([...text, ...input])
        setInput('');
    }

    const backAndReset = () => {
        // reset test after dialog close animation
        setTimeout(() => {
            handleDialogClose();
            setInput('')
            setNextButton(true)
            setIncrement(0)
        }, 200)
    }

    const checkPattern = async () => {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json')
        tDNA.current.stop()
        const typingPattern = await tDNA.current.getTypingPattern({
            type: 1,
            text: text.join('')
        })
        console.log({ typingPattern })
        fetch('/sighup/typingdna', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ typingPattern })
        }).then(res => {
            console.log({ res })
            const server = res.json()
            console.log({ server })
        })
    }

    useEffect(() => {
        if (!tDNA.current) {
            tDNA.current = new TypingDNA();
        }
    }, [tDNA])

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
                                    autoComplete="off"
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