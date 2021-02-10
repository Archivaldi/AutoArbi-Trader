import React from 'react';
import { Card, CardContent, Typography, } from '@material-ui/core';
import { useStyles } from '../styles/UserProgressCardStyles'
import ProgressBar from './ProgressBar';
import AttachFileIcon from '@material-ui/icons/AttachFile';

export default function UserProgressCard({ data: { docs, name, title } }) {
    const {
        root,
        header,
        documents,
        items,
        progress,
        accent,
        font,
        userNameFont
    } = useStyles();

    function percentage(arr) {
        var i = 0
        arr.forEach(({ completed }) => {
            completed ? i++ : i = i
        })
        return i / arr.length * 100
    }
    const completed = percentage(docs)

    return (
        <Card className={root}>
            <CardContent className={header}>
                <div>
                    <Typography className={userNameFont}>
                        {name}
                    </Typography>
                    <Typography className={`${accent} ${font}`}>
                        {title}
                    </Typography>
                </div>
                <div className={documents}>
                    {
                        docs.map(({ id, completed, type }) => (
                            <div className={items} key={id}>
                                <AttachFileIcon
                                    className={font}
                                    color={completed ? "secondary" : "primary"}
                                />
                                <Typography className={font} color="textSecondary">{type}</Typography>
                            </div>
                        ))
                    }
                </div>
            </CardContent>
            <div className={progress}>
                <ProgressBar value={completed} />
            </div>
        </Card>
    );
}