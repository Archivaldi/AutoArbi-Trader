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
    const { root, flex, icon, font } = useStyles();
    return (
        <Card className={root}>
            <CardContent className={flex}>
                <Typography className={font} color="textSecondary">
                    <AttachFileIcon
                        className={icon}
                        color={!completed ? "primary" : "secondary"}
                    />
                    {`${type}`.toUpperCase()}
                </Typography>
                <div>
                    <Button
                        disabled={completed}
                        className={font}
                        color="secondary"
                    >
                        Upload{completed ? 'ed' : ''}
                    </Button>
                    <Button
                        disabled={!completed}
                        className={font}
                        color="secondary"
                    >
                        View Document
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}