import React from 'react';
import MiniDrawer from '../components/MiniDrawer';
import FileUploadCard from '../components/FileUploadCard';
import { dummyData } from '../utils/dummyData';
import { useStyles } from '../styles/UploadStyles'

export default function Dashboard() {
    const { buyer, seller } = dummyData;
    const classes = useStyles();

    return (
        <MiniDrawer classes={classes}>
            {seller.docs.map(({ id, type, completed }) => (
                <FileUploadCard
                    key={id}
                    type={type}
                    completed={completed}
                />
            ))}
        </MiniDrawer>
    )
}