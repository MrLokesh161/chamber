import React from 'react';
import logoImage from "../assets/rect.png";


const Navbar = () => {
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
          <a href="/" className="nav-button px-9">
            HOME
          </a>
          <a href="/membership" className="nav-button px-9">
            MEMBERSHIPS
          </a>
          <a href="#journals" className="nav-button px-9">
            JOURNALS
          </a>
          <a href="#members" className="nav-button px-9">
            MEMBERS
          </a>
        </div>
        {/* Join Now Button */}
        <div className="justify-center self-stretch px-3.5 py-3 my-auto text-xs text-white bg-violet-800 rounded-3xl">
          JOIN NOW
        </div>
      </div>
  );
};

export default Navbar;
