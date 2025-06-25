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
      plot={`In a future where Earth is on the brink of collapse, a group of astronauts embarks on a daring mission to find a new habitable planet for humanity. Guided by love, time, and sacrifice, they travel through a wormhole 
      and face unimaginable challenges that test the limits of space and time, in a race to save mankind.`}
      />

       <MovieCard 
      img={persuite}
      title="The Pursuit of happyness"
      director="G Muccino"
      release="2010"
      plot="A struggling salesman, Chris Gardner, battles homelessness 
      while raising his young son. Despite countless hardships, he clings to hope and determination as he pursues a life-changing internship at a prestigious brokerage firm — proving that love, persistence, and belief can defy the odds."
      />

       <MovieCard 
      img={fightclub}
      title="Fight Club"
      director="David Fincher"
      release=" 1999 "
      plot="An insomniac office worker and a mysterious soap salesman 
      form an underground fight club that evolves into something much more sinister. As the club spreads, he struggles with his identity and descends into a dangerous spiral of violence, rebellion, and psychological unraveling."
      />

    </div>
  )
}

export default Movies