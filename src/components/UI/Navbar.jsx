import React from 'react';
import logo from  '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // 🔐 Remove token
    localStorage.removeItem("token");

    // 👉 Redirect to login
    navigate("/", { replace: true });
  };
  return (
    <header className='py-2 px-5 border-b-0.5 border-sky-100 shadow-md bg-white sticky top-0 left-0 z-50 flex justify-between items-center'>
      <img
        className='w-40 h-14'
        height={10}
        src={logo}
        alt="Polution Under control" />
      <div>
        <button
          onClick={handleLogout}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
        >
          Logout
        </button>
    </div>
    </header>
  );
}

export default Navbar;
