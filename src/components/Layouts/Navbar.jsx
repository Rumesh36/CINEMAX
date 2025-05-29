import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import DarkMode from "../DarkMode";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Open = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
          <Link to="/">
            <h1 className="text-2xl font-bold text-gray-800">
              CiNEMAX
            </h1>
          </Link>
          <button
            onClick={Open}
            className="text-3xl text-black sm:hidden z-50"
          >
            {isOpen ? <IoClose color="black" size={32} /> : <GiHamburgerMenu  size={28}/>}
          </button>
        </div>

       <nav className={`  max-sm:min-h-screen sm:flex sm:items-center sm:justify-between sm:px-6 sm:py-2 sm:h-5 transition-all duration-300 bg-gray-400 sm:bg-transparent 
         ${isOpen ? "block" : "hidden sm:block"}`}>

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

       <ul className="flex flex-col  sm:flex-row items-center text-white sm:text-black dark:sm:text-white font-semibold text-xl gap-y-6 sm:gap-x-6 px-6 py-4 sm:py-0">

            <li>
              <Link
                to="/"
                onClick={Open}
                className="hover:bg-gray-800 py-2 px-2 rounded-xl cursor-pointer block"
              >
                Home
              </Link>
            </li>

              
           <li>
            <Link to="/MovieSearch"
            onClick={Open}
            className="hover:bg-gray-800 py-2 px-2 rounded-xl cursor-pointer block">
              Search
            </Link>
           </li>

            <li>
              <Link
                to="/MovieSearch"
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
