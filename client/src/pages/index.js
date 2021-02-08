import React from 'react';
import MiniDrawer from '../components/MiniDrawer';
import UserProgressCard from '../components/UserProgressCard';

export default function Dashboard() {
  return (
    <MiniDrawer>
      <UserProgressCard />
      <UserProgressCard />
    </MiniDrawer>
  )
}