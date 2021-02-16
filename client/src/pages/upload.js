import React from 'react';
import AuthCheck from '../components/AuthCheck';
import MiniDrawer from '../components/MiniDrawer';
import FileUploadCard from '../components/FileUploadCard';
import UserInformationDialog from '../components/UserInformationDialog';
import { dummyData } from '../utils/dummyData';
import { uploadStyles } from '../styles/GlobalDrawerStyles'
import { checkForAllDocumentComplete } from '../utils/checkForAllDocComplete'

export default function Dashboard() {
    const { buyer, seller } = dummyData;
    const classes = uploadStyles();

    return (
        <AuthCheck>
            <MiniDrawer
                classes={classes}
                allDocsComplete={checkForAllDocumentComplete(buyer, seller)}
            >
                <>
                    <UserInformationDialog />
                    {seller.docs.map(({ id, type, completed, url }) => (
                        <FileUploadCard
                            key={id}
                            type={type}
                            completed={completed}
                            url={url}
                        />
                    ))}
                </>
            </MiniDrawer>
        </AuthCheck >
    )
}