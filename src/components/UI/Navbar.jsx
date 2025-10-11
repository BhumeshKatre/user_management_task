import React from 'react';
import logo from  '../../assets/logo.png'

const Navbar = () => {
  return (
    <header className='py-2 px-5 border-b-0.5 border-sky-100 shadow-md bg-white sticky top-0 left-0'>
      <img
        className='w-40 h-14'
        height={10}
        src={logo}
        alt="Polution Under control" />
    </header>
  );
}

export default Navbar;
