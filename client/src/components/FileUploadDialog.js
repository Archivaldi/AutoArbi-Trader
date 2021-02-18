import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

export default function FileUploadDialog({ open, handleUploadClose, type }) {
    const { root } = useStyles()
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
    };

    const uploadFile = async e => {
        let doc = "";
        if (type === "Government ID") {
            doc = "government_id"
        }
        const files = document.querySelector('input[name="Government ID"]').files;
        const data = new FormData();
        data.append("file", files[0]);
        const res = await fetch(`/api/db/documentUpload/${doc}`, {
            method: "POST",
            body: data
        });
        window.location.reload();
    }

    return (
        <div>
            <Dialog
                color="dark"
                open={open}
                onClose={handleUploadClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{`Upload ${type} Document`}</DialogTitle>
                <DialogContent>
                    {type === 'Bill of Sale' ? (
                        <form className={root} noValidate autoComplete="on">
                            <TextField color="secondary" id="standard-required" label="First Name" required />
                            <TextField color="secondary" id="standard-required" label="Last Name" required />
                            <TextField color="secondary" id="standard-required" label="Vin Number" required />
                            <TextField color="secondary" id="standard-required" label="Chassis Year" required />
                            <TextField color="secondary" id="standard-required" label="Model" required />
                            <TextField color="secondary" id="standard-required" label="Title #" required />
                            <TextField color="secondary" id="standard-required" label="Milage" required />
                            <TextField color="secondary" id="standard-required" label="Price" required />
                            <FormControlLabel
                                control={<Checkbox checked={checked} onChange={handleChange} />}
                                label="Apply Signature"
                            />
                        </form>
                    ) : (
                            <FormGroup>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    component="label"
                                >
                                    Upload {type}
                                    <input
                                        type="file"
                                        name={type}
                                        hidden
                                    />
                                </Button>
                            </FormGroup>
                        )}
                </DialogContent>
                <DialogActions>
                    <Button color="secondary" onClick={uploadFile}>
                        Submit
                    </Button>
                    <Button onClick={handleUploadClose} color="secondary">
                        Close
                    </Button>
                    <Typography variant="subtitle1">Please only use PNG or JPG</Typography>
                </DialogActions>
            </Dialog>
        </div>
    );
}