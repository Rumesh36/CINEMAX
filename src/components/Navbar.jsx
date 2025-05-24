import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import DarkMode from './DarkMode';

const Navbar = () => {

  const [isOpen,setIsOpen] = useState(false);

  const Open = () =>{
    setIsOpen(!isOpen)
  }

  return (
  <>
    <header>
    <div className='mb-20'>
      <Link to="/">
      <h1 className='sm:hidden text-2xl absolute  top-5 left-4 font-semibold text-gray-700'>CiNEMAX</h1>
      </Link>
      <button
      onClick={Open}
       className="sm:hidden text-3xl absolute text-black top-4 right-5 z-50"
       >
        {isOpen?<IoClose color='white' size={35}/> :<GiHamburgerMenu/>} 
      </button>
   </div>

        <nav className={` fixed top-0  rounded-sm h-75 w-64 bg-gray-500 px-4 py-4 transition-all duration-300
         sm:h-auto sm:w-full sm:right-0 sm:mt-0 sm:rounded-none ${isOpen ? 'right-0 ': '-right-full'}  `}>

          <ul className={`flex  flex-col items-center text-white font-semibold space-x-6 px-4
                     sm:flex-row `}>
            <li className="text-2xl sm:mr-auto ">
               <Link to="/" 
                onClick={Open}
                className="cursor-pointer sm:text-center">CINEMAX</Link>
            </li>

            <li>
               <Link to="/home" 
                onClick={Open}
                className="hover:bg-gray-800 py-2 px-2 rounded-xl cursor-pointer block">Home</Link>
            </li>

            <li>
               <Link to="/" 
                onClick={Open}
                className="hover:bg-gray-800 py-2 px-2 rounded-xl cursor-pointer block">Music</Link>
            </li>

            <li>
              <Link to="/" className="hover:bg-gray-800 py-2 px-2 rounded-xl cursor-pointer block mr-3"
              >About</Link>
            </li>
            
      </ul>
         
    </nav>

      
    </header>

</>  
  );
};

export default Navbar;
