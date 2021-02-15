import React from 'react';
import { dummyData } from '../utils/dummyData';
import LoginCard from '../components/LoginCard';
import { useStyles } from '../styles/LoginPageStyles'

export default function Dashboard() {
    const { buyer, seller } = dummyData;
    const { page } = useStyles();
    return (
        <div className={page}>
            <LoginCard useStyles={useStyles} />
        </div>
    )
}