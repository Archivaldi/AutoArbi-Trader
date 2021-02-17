import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, } from '@material-ui/core';
import { useStyles } from '../styles/UserProgressCardStyles'
import ProgressBar from './ProgressBar';
import AttachFileIcon from '@material-ui/icons/AttachFile';

export default function UserProgressCard({ userData }) {
    const { firstName, lastName, govId, title, billOfSale, registration } = userData;
    const [docs, setDocs] = useState([])
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

    useEffect(() => {
        let id = 0;
        let docsArr = []
        for (const property in userData) {
            if (
                property === 'govId' ||
                property === 'title' ||
                property === 'billOfSale' ||
                property === 'registration'
            ) {
                const completed = userData[property];
                let type;
                if (property === 'govId') type = 'Government ID'
                if (property === 'title') type = 'Vehicle Title'
                if (property === 'billOfSale') type = 'Bill of Sale'
                if (property === 'registration') type = 'Registration'
                const docObj = {
                    completed,
                    type,
                    id
                }
                docsArr.push(docObj);
                id++
            }
        }
        setDocs(docsArr)
    }, [userData])

    return (
        <Card className={root}>
            <CardContent className={header}>
                <div>
                    <Typography className={userNameFont}>
                        <span>{firstName} {lastName}</span>
                    </Typography>
                    <Typography className={`${accent} ${font}`}>
                        {docs.length === 4 ? "Seller" : "Buyer"}
                    </Typography>
                </div>
                <div className={documents}>
                    {docs.length > 0 && (
                        <>
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
                        </>
                    )}
                </div>
            </CardContent>
            <div className={progress}>
                <ProgressBar value={completed} />
            </div>
        </Card>
    );
}