import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollTop = () => {
   const {pathname} = useLocation();

   useEffect(()=>{
    
    window.screenTop(0,0);
   },[pathname])
   return null;
};

export default ScrollTop;