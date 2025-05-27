import React, { useEffect, useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";

const DarkMode = () => {

  const [dark,setDark] = useState(false)
  useEffect(()=>{

    if(dark){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }

  },[dark])

  const toggle = () =>{
    setDark(!dark)
  }

  return (
  
    <>
    
    <div className=" dark:bg-gray-900 text-white">

      <button 
      onClick={toggle}
      className="fixed top-5 right-1 w-9 h-9 flex items-center justify-center rounded-full shadow bg-gray-200 dark:bg-gray-700 text-black dark:text-white z-40 transition"
      >
               {dark ? <FaSun /> : <FaMoon className='text-black' />}
       
        
      </button>
    </div>
    
    
    
    
    
    
    </>

  )
}

export default DarkMode