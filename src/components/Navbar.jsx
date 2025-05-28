import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import DarkMode from "./DarkMode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Open = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <div className="mb-25">
          <Link to="/">
            <h1 className="sm:hidden text-2xl absolute  top-5 left-4 font-semibold text-gray-700">
              CiNEMAX
            </h1>
          </Link>
          <button
            onClick={Open}
            className="sm:hidden text-3xl absolute text-black top-4 right-5 z-50"
          >
            {isOpen ? <IoClose color="white" size={35} /> : <GiHamburgerMenu />}
          </button>
        </div>

        <nav
          className={` fixed top-0  rounded-sm min-h-screen w-75 bg-gray-500    transition-all duration-300 flex justify-between
         sm:absolute sm:min-h-15 sm:w-full sm:right-0 sm:mt-0 sm:rounded-none ${
           isOpen ? "right-0 " : "-right-full"
         } dark:bg-gray-900  `}
        >
          <div className="hidden sm:flex items-center ml-5 ">
            <h1 className="text-2xl  text-white font-semibold  ">
              <Link
                to="/"
                onClick={Open}
                className="cursor-pointer sm:text-center"
              >
                CINEMAX
              </Link>
            </h1>
          </div>
          <ul
            className={`flex  flex-col items-center text-white font-semibold space-x-6 py-15 mx-auto text-2xl sm:text-xl sm:py-3
                     sm:flex-row `}
          >
            <li>
              <Link
                to="/home"
                onClick={Open}
                className="hover:bg-gray-800 py-2 px-2 rounded-xl cursor-pointer block"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/"
                onClick={Open}
                className="hover:bg-gray-800 py-2 px-2 rounded-xl cursor-pointer block"
              >
                Music
              </Link>
            </li>

            <li>
              <Link
                to="/"
                className="hover:bg-gray-800 py-2 px-2 rounded-xl cursor-pointer block mr-3"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
