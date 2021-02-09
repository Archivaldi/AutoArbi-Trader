import React from 'react';
import MiniDrawer from '../components/MiniDrawer';
import FileUploadCard from '../components/FileUploadCard';
import { dummyData } from '../utils/dummyData';
import { uploadStyles } from '../styles/GlobalDrawer'
import { checkForAllDocumentComplete } from '../utils/checkForAllDocComplete';

export default function Dashboard() {
    const { buyer, seller } = dummyData;
    const classes = uploadStyles();

    return (
        <MiniDrawer
            classes={classes}
            allDocsComplete={checkForAllDocumentComplete(buyer, seller)}
        >
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