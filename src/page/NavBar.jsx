import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-lg font-semibold">
          Video Player
        </Link>

        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/playlist" className="text-white hover:text-gray-300">
            PlayList
          </Link>
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
          <Link
            onClick={toggleMobileMenu}
            to="/"
            className="block text-white hover:text-gray-300 py-2"
          >
            Home
          </Link>
          <Link
            onClick={toggleMobileMenu}
            to="/playlist"
            className="block text-white hover:text-gray-300 py-2"
          >
            PlayList
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
