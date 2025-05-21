import React, { useEffect, useState } from 'react'



const Home = () => {

  const [movieName,setMovieName] =useState('');
  const [movieData,setMovieData] =useState(null);
  const [searchQuery,setSearchQuery] =useState(null)
  const [loading,setLoading] = useState(false)

  const OMDB_API_KEY = '6e419398';

  useEffect(()=>{
    if(!searchQuery) return;

    const fetchData=async () => {
     setLoading(true)
      const res = await fetch(`http://www.omdbapi.com/?apikey=${OMDB_API_KEY}&t=${searchQuery}&plot=full`);
      const data = await res.json()
      
      
      setMovieData(data)
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

  <h1 className="text-center">CineMax Search</h1>

      <label>Search by Movie Name</label>
      <br />
      <input
        type="text"
        placeholder="Enter movie"
        className="border-2 my-5"
        onChange={handleChanges}
        value={movieName}
      />
      <br />

      <button onClick={handleSearch} className="btn">
        Search
      </button>

      <div className="mt-4">
        {searchQuery && <h2>You Searched for: {searchQuery}</h2>}
        {loading && <p>Loading...</p>}

        {movieData && movieData.Response!=="False" ?
        (
          <div>
            <p>plot : {movieData.Plot}</p>
          <img src={movieData.Poster} alt={movieData.Title} />
          <h1 className='bg-green-600 text-white'>Data has fetched successfully</h1>
           </div>
           
        ) :
        movieData && movieData.Response === "False" ?(
          <p className='text-white bg-red-600'>No movie found {searchQuery}</p>
        ) :null
        }

      </div>
  </>
  )
}

export default Home