import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaHome, FaUserTie, FaCommentDots, FaEnvelope } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-linear-to-r from-black via-gray-900 to-black backdrop-blur-md shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">

        {/* LOGO */}
        <div className="cursor-pointer text-2xl font-bold text-white font-[Caveat]">
          FitLife Gym 
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center text-white font-semibold">
          <Link to="home" smooth duration={500} className="flex items-center gap-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer">
            <FaHome /> Home
          </Link>

          <Link to="trainers" smooth duration={500} className="flex items-center gap-2 hover:text-green-500 transition-colors duration-300 cursor-pointer">
            <FaUserTie /> Trainer
          </Link>

          <Link to="opinions" smooth duration={500} className="flex items-center gap-2 hover:text-pink-500 transition-colors duration-300 cursor-pointer">
            <FaCommentDots /> Opinion
          </Link>

          <Link to="contact" smooth duration={500} className="flex items-center gap-2 hover:text-purple-500 transition-colors duration-300 cursor-pointer">
            <FaEnvelope /> Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
                {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden bg-gray-800 text-white flex flex-col items-center gap-4 py-4">
              <Link to="home" smooth duration={500} className="hover:text-blue-500 transition-colors duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>
                 Home
              </Link>

              <Link to="trainer" smooth duration={500} className="hover:text-green-500 transition-colors duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>
                Trainer
              </Link>

              <Link to="opinion" smooth duration={500} className="hover:text-pink-500 transition-colors duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>
                Opinion
              </Link>

              <Link to="contact" smooth duration={500} className="hover:text-purple-500 transition-colors duration-300 cursor-pointer" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
          </div>
          )
        }

    </nav>
  );
};

export default Navbar;