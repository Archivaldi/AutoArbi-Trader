import React from 'react';
import MiniDrawer from '../components/MiniDrawer';
import UserProgressCard from '../components/UserProgressCard';
import { dummyData } from '../utils/dummyData';
import { useStyles } from '../styles/Dashboard'

export default function Dashboard() {
  const classes = useStyles();
  const { buyer, seller } = dummyData;
  return (
    <MiniDrawer classes={classes}>
      <UserProgressCard
        key={2}
        data={seller}
      />
      <UserProgressCard
        key={1}
        data={buyer}
      />
    </MiniDrawer>
  )
}