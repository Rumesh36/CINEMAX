import React from 'react'
import Card from './Card'
import { Link } from 'react-router-dom';
import { FaTv } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { BiSolidCameraMovie } from "react-icons/bi";
import { PiFilmReelFill } from "react-icons/pi";
import { IoSearchSharp } from "react-icons/io5";

const Cards = () => {
  return (
    <>


<div className="text-center  ">

 <Link to="/movies">
    <Card 
    heading = {" Movies"}
    content = {"Know more About Your Favourite Movie,Director,cast more...."}
    icon = {<BiSolidCameraMovie size={28} color='black'/>}
    />
</Link>

  <Link to="/search">
    <Card 
    heading = {"Easy Search"}
    content = {"Find movies fast with detailed info like cast, Plot, and ratings."}
    icon = {<IoSearchSharp size={28} color='gray'/>}
    />
 </Link>
 
 <Link to="music">
    <Card 
    heading = {"Music"}
    content = {"Now Listen and Enjoy The Top Music picked by US for free......"}
    icon = {<FaMusic size={28} color='blue'/>}
    />
</Link>

   

</div>

    </>
  )
}

export default Cards