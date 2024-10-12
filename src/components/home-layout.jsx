import { Outlet } from 'react-router-dom';
import BigSidebar from './big-sidebar';
import SmallSideBar from './small-sidebar';
import Navbar from './navbar';
import { useState } from 'react';

const HomeLayout = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className='flex'>
      <BigSidebar showSidebar={showSidebar} />
      <SmallSideBar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />

      <div className='w-full h-screen bg-white'>
        <Navbar toggleSidebar={toggleSidebar} />
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
