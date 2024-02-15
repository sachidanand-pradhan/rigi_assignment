import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/" className="text-white text-lg font-semibold">
          Video Player
        </a>

        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="/playlist" className="text-white hover:text-gray-300">
            PlayList
          </a>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden ${isMobileMenuOpen ? "" : "hidden"} bg-gray-800`}
      >
        <div className="container mx-auto py-2">
          <a href="/" className="block text-white hover:text-gray-300 py-2">
            Home
          </a>
          <a
            href="/playlist"
            className="block text-white hover:text-gray-300 py-2"
          >
            PlayList
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
