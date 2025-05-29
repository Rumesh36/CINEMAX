import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
const AppLayout = () => {
  return (
    
    <>
    
    <Navbar/>
    
    <main className='pt-20'>
        <Outlet/>
    </main>
    
    </>
  )
}

export default AppLayout