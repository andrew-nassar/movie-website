import React from 'react';
import NavSection from './NavSection'; // Contains Links and Button
import SearchAndLogo from './SearchAndLogo'; // Contains Logo and Search

const Header = () => {
  return (
    // Main Header Container: Fixed, Lighter Dark, Standard LTR flow
    <header 
      className="
        fixed top-0 left-0 w-full z-50 
        flex justify-between items-center 
        px-12 py-4 
        text-white font-sans
        border-b border-gray-800
      "
      style={{ backdropFilter: 'blur(8px)' }}
    >
      
      {/* LEFT Side: Logo and Search (Visually on the Left) */}
      <SearchAndLogo />

      {/* RIGHT Side: Navigation Links and Button */}
      <NavSection />

    </header>
  );
};

export default Header;