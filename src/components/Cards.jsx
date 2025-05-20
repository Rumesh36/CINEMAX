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
    content = {"Find your favourite movies ,TV shows Here.."}
    icon = {<FaTv size={28} color='black'/>}
    />


    <Card 
    heading = {"Easy Search"}
    content = {"Fast and Accurate search-search your fav here.. "}
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