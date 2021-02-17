import React, { useState, useEffect } from 'react';
import AuthCheck from '../components/AuthCheck';
import MiniDrawer from '../components/MiniDrawer';
import FileUploadCard from '../components/FileUploadCard';
import UserInformationDialog from '../components/UserInformationDialog';
import { appRoute } from '../utils/appRoute';
import { authSteps } from '../utils/authSteps';
import { uploadStyles } from '../styles/GlobalDrawerStyles'

export default function Dashboard() {
    const classes = uploadStyles();
    const [currentUserInfo, setCurrentUserInfo] = useState(null);
    const [currentUserDocs, setCurrentUserDocs] = useState([]);
    const { userInfo } = appRoute;
    const { session } = authSteps.route;

    useEffect(() => {
        (async function getUserInformation() {
            const resOne = await fetch(session, {
                method: 'POST'
            })
            const { role } = await resOne.json();

            const resTwo = await fetch(userInfo, {
                method: 'POST'
            })
            const userInform = await resTwo.json();
            setCurrentUserInfo(userInform[role])
        })()
    }, []);

    useEffect(() => {
        let id = 0;
        let docsArr = []
        for (const property in currentUserInfo) {
            if (
                property === 'govId' ||
                property === 'title' ||
                property === 'billOfSale' ||
                property === 'registration'
            ) {
                let type;
                let completed = currentUserInfo[property] === !null
                let url = currentUserInfo[property]
                if (property === 'govId') type = 'Government ID'
                if (property === 'title') type = 'Vehicle Title'
                if (property === 'billOfSale') type = 'Bill of Sale'
                if (property === 'registration') type = 'Registration'
                const docObj = {
                    type,
                    completed,
                    url,
                    id
                }
                docsArr.push(docObj)
                id++
            }
        }
        setCurrentUserDocs(docsArr)
    }, [currentUserInfo])

    return (
        <AuthCheck>
            <MiniDrawer
                classes={classes}
            >
                <>
                    <UserInformationDialog />
                    {currentUserDocs.length > 0 && (
                        currentUserDocs.map(({ id, type, completed, url }) => (
                            <FileUploadCard
                                key={id}
                                type={type}
                                completed={completed}
                                url={url}
                            />
                        ))
                    )}
                </>
            </MiniDrawer>
        </AuthCheck >
    )
}