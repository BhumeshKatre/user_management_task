import React from 'react';
import Navbar from '../UI/Navbar';
import Dashboard from '../UI/Dashboard';
import MaintainReacords from './MaintainReacords';

const MainPageLayout = () => {
  return (
    <div className='m-0 p-0 bg-gray-200 '>
      <Navbar />
      <Dashboard />
      <MaintainReacords />
    </div>
  );
}

export default MainPageLayout;
