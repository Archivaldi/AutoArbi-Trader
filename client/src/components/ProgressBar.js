import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export default function ProgressBar({ value }) {
    const { root } = useStyles();

    return (
        <div className={root}>
            <LinearProgress
                variant="determinate"
                value={value}
                color={value === 100 ? "secondary" : "primary"}
            />
        </div>
    );
}