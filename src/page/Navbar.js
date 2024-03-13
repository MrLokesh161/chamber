import React from 'react';
import logoImage from "../assets/rect.png";
import { useNavigate } from 'react-router-dom';

const Navbar = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  const loginPage = () => {
    navigate("/login");
  };

  const logout = () => {
    // Implement your logout logic here
  };

  return (
    <div className="flex gap-5 justify-between items-center self-center px-5 mt-1 w-full font-bold whitespace-nowrap max-w-[1653px] max-md:flex-wrap max-md:max-w-full">
      {/* Logo */}
      <img
        loading="lazy"
        src={logoImage}
        className="self-stretch max-w-full aspect-[2.5] w-[329px]"
        alt="logo"
      />
      {/* Navigation */}
      <div className="flex flex-row gap-8 justify-center items-center self-stretch my-auto text-sm text-black max-md:flex-wrap max-md:max-w-full">
        <a href="/" className="nav-button px-9"  style={{ textDecoration: 'none', color: 'your-color' }}>
          HOME
        </a>
        <a href="/membership" className="nav-button px-9"  style={{ textDecoration: 'none', color: 'your-color' }}>
          MEMBERSHIPS
        </a>
        <a href="#journals" className="nav-button px-9"  style={{ textDecoration: 'none', color: 'your-color' }}>
          JOURNALS
        </a>
        <a href="#members" className="nav-button px-9"  style={{ textDecoration: 'none', color: 'your-color' }}>
          MEMBERS
        </a>
      </div>
      {/* Conditional rendering based on authentication */}
      {isAuthenticated ? (
        <>
          {/* User icon (replace with your user icon component) */}
          <div className="user-icon"></div>
          {/* Logout button */}
          <button className="justify-center self-stretch px-3.5 py-3 my-auto text-xs text-white bg-violet-800 rounded-3xl" onClick={logout}>
            LOGOUT
          </button>
        </>
      ) : (
        // JOIN NOW button for not logged in users
        <button className="justify-center self-stretch px-3.5 py-3 my-auto text-xs text-white bg-violet-800 rounded-3xl" onClick={loginPage}>
          JOIN NOW
        </button>
      )}
    </div>
  );
};

export default Navbar;
