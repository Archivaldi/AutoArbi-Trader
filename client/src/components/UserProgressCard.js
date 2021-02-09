import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
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
                    <Typography component="h5" variant="h5">
                        Current Progress
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {name} - {title}
                    </Typography>
                </div>
                <div className={classes.documents}>
                    {
                        docs.map(({ id, completed, type }) => {
                            var indicatorColor = completed ? "primary" : "secondary"
                            return (
                                <div className={classes.items}>
                                    <AttachFileIcon
                                        key={id}
                                        color={indicatorColor}
                                    />
                                    <Typography>{type}</Typography>
                                </div>
                            )
                        })
                    }
                </div>
            </CardContent>
            <div className={classes.progress}>
                {completed}%
                <ProgressBar value={completed} />
            </div>
        </Card>
    );
}