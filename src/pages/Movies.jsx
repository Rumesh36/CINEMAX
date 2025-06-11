import React from 'react'
import MovieCard from '../components/MovieCard'
import persuite from '../assets/Img/persuit of happiness.webp'
import fightclub from '../assets/Img/club.webp' 
import interstellar from '../assets/Img/interstellar.webp'

const Movies = () => {
  return (
    <div className='pt-20 bg-gray-300 flex flex-wrap items-center justify-center gap-3 pb-10'>

      <MovieCard 
      img={interstellar}
      title="Interstellar"
      director="Chrishtopher Nolan"
      release="2010"
      />

       <MovieCard 
      img={persuite}
      title="The Pursuit of happyness"
      director="Gabriele Muccino"
      release="2010"
      />

       <MovieCard 
      img={fightclub}
      title="Fight Club"
      director="David Fincher"
      release=" 1999 "
      />

    </div>
  )
}

export default Movies