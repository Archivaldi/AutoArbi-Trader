import React, { useState } from 'react';
import {
    Card,
    CardContent,
    Typography,
    Button
} from '@material-ui/core';
import FileUploadDialog from './FileUploadDialog';
import ViewDocumentDialog from './ViewDocumentDialog';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { useStyles } from '../styles/FileUploadCardStyles';

export default function FileUploadCard({ type, completed, url }) {
    const { root, flex, icon, font, buttonMargin, disAppear } = useStyles();
    const [uploadOpen, setUploadOpen] = useState(false);
    const [documentOpen, setDocumentOpen] = useState(false);

    const handleClickUploadOpen = () => {
        setUploadOpen(true);
    };

    const handleUploadClose = () => {
        setUploadOpen(false);
    };

    const handleDocumentOpen = () => {
        setDocumentOpen(true);
    };

    const handleDocumentClose = () => {
        setDocumentOpen(false);
    };

    return (
        <Card className={root}>
            <FileUploadDialog
                open={uploadOpen}
                handleUploadClose={handleUploadClose}
                type={type}
            />
            <ViewDocumentDialog
                open={documentOpen}
                handleDocumentClose={handleDocumentClose}
                type={type}
                url={url}
            />
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
                        className={`${font} ${buttonMargin}`}
                        color="secondary"
                        onClick={handleClickUploadOpen}
                    >
                        <span>Upload<span className={disAppear}>{completed ? 'ed' : ''}</span></span>
                    </Button>
                    <Button
                        disabled={!url}
                        className={`${font} ${buttonMargin}`}
                        color="secondary"
                        onClick={handleDocumentOpen}
                    >
                        <span>View <span className={disAppear}>Document</span></span>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}