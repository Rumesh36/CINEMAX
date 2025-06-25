import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  
  const toggleMenu = () =>{
    setOpen(!open);
  }

  const navLinks = [
    {label:"Home" ,path:"/"},
    {label:"Search" ,path:"/search"},
    {label:"Music" ,path:"/music"}, 
    {label:"Movies" ,path:"/movies"}, 
  ];

  
  return (
  
   <>
   <nav className='bg-gray-100 fixed top-0 left-0 w-full z-50 shadow-md'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="text-3xl text-gray-800 font-bold  tracking-[0.3rem] ">
          Cine<span className='text-red-600 t'>Max</span>
        </div>
           {/* desktop menu */}
           <div className="hidden md:flex space-x-6 text-gray-800 text-xl font-semibold">
            {navLinks.map((link)=>(
            <Link
            key={link.path}
            to={link.path}
            className='hover:text-red-700'
            >
              {link.label}
            </Link>
            ))}
           </div>

           {/* mobile menu toggle */}
           <div className="md:hidden transition-all ">
            <button onClick={toggleMenu}
            className='text-gray-800'>
            {open ? (
              <FaTimes size={25} color="red"/>
            ):(<FaBars size={25} color='red'/>)}

            </button>
           </div>
      </div>
    </div>
      {/* mobile menu  */}
           {open && (
            <div className="md:hidden px-4 pb-4 space-y-4 text-gray-800 font-bold text-xl ">
              {navLinks.map((link)=>(
               <Link
               key={link.path}
               to={link.path}
               onClick={()=>setOpen(false)}
               className='block  hover:text-red-700'
               >
                {link.label}
               </Link>
              ))}
            </div>
           )}
   </nav>
   
   
   </>




  )
}

export default Navbar