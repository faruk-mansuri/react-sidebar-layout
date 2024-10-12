import { X } from 'lucide-react';
import React from 'react';

const SmallSideBar = ({ showSidebar, toggleSidebar }) => {
  return (
    <div
      className={`md:hidden absolute inset-0 bg-black/10 p-14 -z-10 transition ${
        showSidebar && 'z-10'
      }`}
    >
      <div className='relative bg-purple-600 w-full h-full p-10'>
        <X
          className='size-10 absolute right-5 top-5 hover:rotate-45 hover:text-red-500 transition cursor-pointer'
          onClick={toggleSidebar}
        />

        <h1 className='text-2xl'> Small Sidebar</h1>
      </div>
    </div>
  );
};

export default SmallSideBar;
