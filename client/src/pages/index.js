import React from 'react';
import { dummyData } from '../utils/dummyData';
import LoginCard from '../components/LoginCard';
import { useStyles } from '../styles/LoginPageStyles';
import LandingUserCheck from '../components/LandingUserCheck';

export default function Dashboard() {
    const { page } = useStyles();
    return (
        <LandingUserCheck>
            <div className={page}>
                <LoginCard useStyles={useStyles} />
            </div>
        </LandingUserCheck>
    )
}