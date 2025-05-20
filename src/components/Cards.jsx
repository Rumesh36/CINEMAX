import React from 'react'
import Card from './Card'
import { FaTv } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { BiSolidCameraMovie } from "react-icons/bi";
import { PiFilmReelFill } from "react-icons/pi";

const Cards = () => {
  return (
    <>


<div className="text-center ">

    <Card 
    heading = {" Movies"}
    content = {"Discover the latest movies,shows and more...."}
    icon = {<FaTv size={28} color='black'/>}
    />


    <Card 
    heading = {"PopReel"}
    content = {"Music,Tv ,Trending and many more highlights...."}
    icon = {<FaMusic size={28} color='black'/>}
    />


    <Card 
    heading = {"Shows"}
    content = {"Your guide to movies, series, and music by us"}
    icon = {<BiSolidCameraMovie size={28} color='black'/>}
    />


    <Card 
    heading = {"ALL IN ONE"}
    content = {"TV shows. Music. News, reviews ,shows -all in 1"}
    icon = {<PiFilmReelFill size={28} color='black'/>}
    />


</div>

    </>
  )
}

export default Cards