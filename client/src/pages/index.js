import React from 'react';
import MiniDrawer from '../components/MiniDrawer';
import UserProgressCard from '../components/UserProgressCard';
import { dummyData } from '../utils/dummyData';



export default function Dashboard() {
  const { buyer, seller } = dummyData;
  return (
    <MiniDrawer>
      <UserProgressCard
        key={1}
        data={buyer}
      />
      <UserProgressCard
        key={2}
        data={seller}
      />
    </MiniDrawer>
  )
}