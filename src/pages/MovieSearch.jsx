import React, { useEffect, useState } from 'react'



const MovieSearch = () => {

  const [movieName,setMovieName] =useState('');
  const [movieData,setMovieData] =useState(null);
  const [searchQuery,setSearchQuery] =useState(null)
  const [loading,setLoading] = useState(false)

  const OMDB_API_KEY = '6e419398';

  useEffect(()=>{
    if(!searchQuery) return;

    const fetchData=async () => {
     setLoading(true)
     try{
      const res = await fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${searchQuery}&plot=full`);
      const data = await res.json()
      setMovieData(data)
     }
     catch(error){
      console.error("error occured ",error)
     }
     finally{
      setLoading(false);
     }
    }
    fetchData()
  },[searchQuery])

  const handleChanges = (e) => {
    setMovieName(e.target.value);
  };


const handleSearch = () => {
    if (movieName.trim()) {
      setSearchQuery(movieName.trim());
    }
  };
  
  return (
  <>

  <h1 className="text-center text-3xl my-3 font-bold text-gray-700">CineMax Search</h1>


   <div className="text-center mt-5">
      <label className='text-lg font-semibold text-red-600'>Search by Movie Name</label>
      <br />
      <input
        type="text"
        placeholder="Enter name of the movie"
        className="border-2 my-5  rounded-lg px-3 py-2 hover:border-blue-600"
        onChange={handleChanges} 
        value={movieName}
      />
      <br />

      <button onClick={handleSearch} className="btn">
        Search
      </button>
   </div>

      <div className="mt-4 text-center">
        {searchQuery && <h2 className='text-xl text-gray-700'>You Searched for: {searchQuery}</h2>}
        {loading && <p>Loading...</p>}

        {movieData && movieData.Response!=="False" ?
        (
          <div className='flex flex-col justify-center items-center'>
               <h1 className='bg-green-600 text-white my-3 py-2 px-3 rounded-2xl'>Data has fetched successfully</h1>

               <img
                className=" w-[80%] mr-5 sm:w-[75%] lg:w-[30%] h-auto rounded-3xl"
                src={movieData.Poster}
                alt={movieData.Title}
               />

               <h1 className='text-4xl font-bold my-2'>{movieData.Title}</h1>
               <h1 className='text-lg text-gray-500 font-semibold'>Released year :{movieData.Released}</h1>
               <h1 className='text-2xl my-1 font-bold text-gray-700'>Director : {movieData.Director}</h1>
               <h2 className='w-[80%]  border-2 py-3  mb-5 text-md rounded-2xl bg-gray-100'> <span className='font-bold text-xl'>Plot : </span>{movieData.Plot}</h2>
           </div>
           
        ) :
        movieData && movieData.Response === "False" ?(
          <p className='text-white bg-red-600 w-[60%] mx-auto rounded-2xl py-3'>No movie found By this name : {searchQuery}</p>
        ) :null
        }

      </div>
  </>
  )
}

export default MovieSearch