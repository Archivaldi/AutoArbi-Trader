import React, { useEffect, useState, useRef } from 'react';
import AuthCheck from '../components/AuthCheck';
import MiniDrawer from '../components/MiniDrawer';
import UserProgressCard from '../components/UserProgressCard';
import UserInformationDialog from '../components/UserInformationDialog';
import { dummyData } from '../utils/dummyData';
import { dashboardStyles } from '../styles/GlobalDrawerStyles'
import { checkForAllDocumentComplete } from '../utils/checkForAllDocComplete';
import { appRoute } from '../utils/appRoute';

export default function Dashboard() {
  const classes = dashboardStyles();
  const { buyer, seller } = dummyData;
  const { userInfo } = appRoute;
  const initValues = useRef()
  const [infoDialogOpen, setInfoDialogOpen] = useState(true);

  useEffect(() => {
    (async function getUserInfo() {
      const res = await fetch(userInfo, {
        method: 'POST'
      })
      const defaults = await res.json();
      initValues.current = defaults;
      for (let fields in defaults) {
        if (defaults[fields] === null) {
          setInfoDialogOpen(true);
        }
      }
    })()
  }, []);

  return (
    <AuthCheck>
      <MiniDrawer
        allDocsComplete={checkForAllDocumentComplete(buyer, seller)}
        classes={classes}
      >
        <>
          <UserInformationDialog
            open={infoDialogOpen}
            userFields={initValues.current}
          />
          <UserProgressCard
            key={2}
            data={seller}
          />
        </>
        <>
          <UserProgressCard
            key={1}
            data={buyer}
          />
        </>
      </MiniDrawer>
    </AuthCheck>
  )
}