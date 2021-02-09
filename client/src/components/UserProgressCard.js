import React from 'react';
import { Card, CardContent, Typography, } from '@material-ui/core';
import { useStyles } from '../styles/UserProgressCardStyles'
import ProgressBar from './ProgressBar';
import AttachFileIcon from '@material-ui/icons/AttachFile';

export default function UserProgressCard({ data: { docs, name, title } }) {
    const classes = useStyles();

    function percentage(arr) {
        var i = 0
        arr.forEach(({ completed }) => {
            completed ? i++ : i = i
        })
        return i / arr.length * 100
    }
    const completed = percentage(docs)

    return (
        <Card className={classes.root}>
            <CardContent className={classes.header}>
                <div>
                    <Typography variant="h3">
                        {name}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                        {title}
                    </Typography>
                </div>
                <div className={classes.documents}>
                    {
                        docs.map(({ id, completed, type }) => (
                            <div className={classes.items} key={id}>
                                <AttachFileIcon
                                    color={completed ? "secondary" : "primary"}
                                />
                                <Typography variant="h6" color="textSecondary">{type}</Typography>
                            </div>
                        ))
                    }
                </div>
            </CardContent>
            <div className={classes.progress}>
                <Typography variant="h6" color="textSecondary">{completed}%</Typography>
                <ProgressBar value={completed} />
            </div>
        </Card>
    );
}