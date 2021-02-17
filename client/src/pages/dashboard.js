import React, { useEffect, useState } from 'react';
import { CircularProgress, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
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
  const [transactionID, setTransactionID] = useState('No Id');
  const [displayTransaction, setDisplayTransaction] = useState(false);

  useEffect(() => {
    (async function getUserInformation() {
      const resTwo = await fetch(userInfo, {
        method: 'POST'
      })
      const serverUserInfo = await resTwo.json();
      setDbUserInfo(serverUserInfo);
      if (serverUserInfo.seller.transaction_id) {
        setTransactionID(`Your Transaction ID: ${serverUserInfo.seller.transaction_id}`);
        setDisplayTransaction(true)
      }
    })()
  }, []);

  console.log(dbUserInfo)

  return (
    <AuthCheck>
      {dbUserInfo === null ? (
        <div className={classes.loading}>
          <CircularProgress color="secondary" />
        </div>
      ) : (
          <MiniDrawer
            allDocsComplete={checkForAllDocumentComplete(buyer, seller)}
            classes={classes}
          >
            <UserInformationDialog />
            <Snackbar open={displayTransaction}>
              <Alert severity="info">
                {transactionID}
              </Alert>
            </Snackbar>
            {dbUserInfo && (
              <>
                {dbUserInfo.seller && (
                  <UserProgressCard
                    key={2}
                    userData={dbUserInfo.seller}
                  />
                )}
                {dbUserInfo.buyer && (
                  <UserProgressCard
                    key={1}
                    userData={dbUserInfo.buyer}
                  />
                )}
              </>
            )
            }
          </MiniDrawer>
        )}
    </AuthCheck>
  )
}