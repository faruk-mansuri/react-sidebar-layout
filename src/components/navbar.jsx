import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import React from 'react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className='bg-red-400 sticky top-0 flex px-4 items-center justify-between'>
      <HamburgerMenuIcon
        className='size-10 cursor-pointer'
        onClick={toggleSidebar}
      />
      <h1>Navbar</h1>
    </div>
  );
};

export default Navbar;
