import React from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button
} from '@material-ui/core';
import AttachFileIcon from '@material-ui/icons/AttachFile';

import { useStyles } from '../styles/FileUploadCardStyles';

export default function FileUploadCard({ type, completed }) {
    const classes = useStyles();
    console.log(type, completed)
    return (
        <Card className={classes.root}>
            <CardContent className={classes.grid}>
                <Typography className={classes.documentName} color="textSecondary">
                    <AttachFileIcon
                        className={classes.icon}
                        color={!completed ? "primary" : "secondary"}
                    />
                    {`${type}`.toUpperCase()}
                </Typography>
                <div>
                    <Button
                        disabled={completed}
                        className={classes.documentName}
                        color="secondary"
                    >
                        Upload{completed ? 'ed' : ''}
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}