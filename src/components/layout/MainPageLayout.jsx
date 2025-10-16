import React from 'react';
import Navbar from '../UI/Navbar';
import Dashboard from '../UI/Dashboard';
import MaintainReacords from './MaintainReacords';
import { useAuth } from '../../Context/AuthProvider';
import Loader from '../UI/Loader';



const MainPageLayout = () => {

  const { loading } = useAuth();
  if (loading) {
    return <Loader />
  }
  console.log(loading);
  return (
    <div className='m-0 p-0 bg-gray-200 '>
      <Navbar />
      <Dashboard />
      <MaintainReacords />
    </div>
  );
}

export default MainPageLayout;
