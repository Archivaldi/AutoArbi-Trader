import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { authSteps } from '../utils/authSteps';
import { useStyles } from '../styles/AuthCheckStyles';

export default function AuthCheck({ children }) {
    const { session } = authSteps.route;
    const { page } = useStyles();
    const [userId, setUserId] = useState(null);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        (async function fetchUserData() {
            const res = await fetch(session, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST"
            })
            const { user_id, role } = await res.json();

            if (!user_id || !role) {
                window.location.href('/')
            } else {
                setUserRole(role);
                setUserId(user_id);
            }
        })()
    }, [])

    return (
        <>
            {!userId || !userRole ? (
                <div className={page}>
                    <CircularProgress color="secondary" />
                </div>
            ) : (
                    <>
                        {children}
                    </>
                )}
        </>
    )
};