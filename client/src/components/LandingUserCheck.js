import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import { authSteps } from '../utils/authSteps';
import { useStyles } from '../styles/AuthCheckStyles';

export default function AuthCheck({ children }) {
    const { session } = authSteps.route;
    const { page } = useStyles();
    const [userId, setUserId] = useState(false);

    useEffect(() => {
        (async function fetchUserData() {
            const res = await fetch(session, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST"
            })
            const { user_id } = await res.json();

            if (!user_id) {
                setUserId(true);
            } else {
                window.location.replace('/dashboard');
            }
        })()
    }, []);

    return (
        <>
            {userId ? (
                <>
                    {children}
                </>
            ) : (
                    <div className={page}>
                        <CircularProgress color="secondary" />
                    </div>
                )}
        </>
    )
};