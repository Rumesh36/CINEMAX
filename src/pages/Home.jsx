import React, { useEffect } from 'react'
import { useState } from 'react';
import MovieSearch from '../utilities/MovieSearch';

const Home = () => {

  const OMDB_API_KEY = '6e419398'

  const [movieName, setmovieName] = useState('');
  const [movieData, setmovieData] = useState(null)


  const handleChanges = (e) => {
    
    setmovieName(e.target.value);
  };

  const handleSearch = () => {
    fetch(`http://www.omdbapi.com/?apikey=6e419398&t=${movieName}&plot=full`)
    .then((response) => response.json())
    .then((data) =>{
      setmovieData(data);
    })
    .catch((error)=>{
      console.error(" errrowerfuyg " , error)
    })
  };




  return (
    <>
    <h1 className='text-center'>
      CineMax Search
      </h1>
    <label >Search by Movie Name {"    "}</label>
    <br />
    <input type="text"
    placeholder='enter movie'
    className='border-2 my-5'
    onChange={handleChanges}
    value={movieName}
     />
     <br />
     <button
     onClick={handleSearch}
      className='btn'>
      
       search </button>

       <div className="mt-4">
        <h2> You Searched for : {movieName}</h2>

        {movieData && (
          <div>
            {movieData.Plot}
            <img src={movieData.Poster} alt="" />
          </div>
        )}
        
       </div>
     
    </>
  )
}

export default Home