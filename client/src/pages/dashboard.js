import React, { useEffect, useState } from 'react';
import { appRoute } from '../utils/appRoute';
import AuthCheck from '../components/AuthCheck';
import MiniDrawer from '../components/MiniDrawer';
import UserProgressCard from '../components/UserProgressCard';
import UserInformationDialog from '../components/UserInformationDialog';
import { dummyData } from '../utils/dummyData';
import { dashboardStyles } from '../styles/GlobalDrawerStyles'
import { checkForAllDocumentComplete } from '../utils/checkForAllDocComplete';

export default function Dashboard() {
  const classes = dashboardStyles();
  const { buyer, seller } = dummyData;
  const { userInfo } = appRoute;
  const [dbUserInfo, setDbUserInfo] = useState(null);

  useEffect(() => {
    (async function getUserInformation() {
      const resTwo = await fetch(userInfo, {
        method: 'POST'
      })
      const serverUserInfo = await resTwo.json();
      console.log(serverUserInfo);
      setDbUserInfo(serverUserInfo);
    })()
  }, []);

  return (
    <AuthCheck>
      {dbUserInfo === null ? (
        <p>Loading</p>
      ) : (
          <MiniDrawer
            allDocsComplete={checkForAllDocumentComplete(buyer, seller)}
            classes={classes}
          >
            <UserInformationDialog />
            <UserProgressCard
              key={2}
              data={seller}
            />
            <UserProgressCard
              key={1}
              data={buyer}
            />
          </MiniDrawer>
        )}
    </AuthCheck>
  )
}