import React from 'react';

const BigSidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className='hidden md:flex bg-slate-600 sticky top-0 h-screen'>
      <div
        className={`w-[250px] -ml-[250px] ${
          showSidebar && 'ml-0'
        } transition-all`}
      >
        BigSidebar
      </div>
    </div>
  );
};

export default BigSidebar;
