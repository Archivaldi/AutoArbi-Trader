import React from 'react';
import AuthCheck from '../components/AuthCheck';
import MiniDrawer from '../components/MiniDrawer';
import UserProgressCard from '../components/UserProgressCard';
import { dummyData } from '../utils/dummyData';
import { dashboardStyles } from '../styles/GlobalDrawerStyles'
import { checkForAllDocumentComplete } from '../utils/checkForAllDocComplete';


export default function Dashboard() {
  const classes = dashboardStyles();
  const { buyer, seller } = dummyData;
  return (
    <AuthCheck>
      <MiniDrawer
        allDocsComplete={checkForAllDocumentComplete(buyer, seller)}
        classes={classes}
      >
        <UserProgressCard
          key={2}
          data={seller}
        />
        <UserProgressCard
          key={1}
          data={buyer}
        />
      </MiniDrawer>
    </AuthCheck>
  )
}