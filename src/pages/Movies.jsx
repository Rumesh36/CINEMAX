import React from 'react'
import MovieCard from '../components/MovieCard'
import persuite from '../assets/Img/persuit of happiness.webp'
import fightclub from '../assets/Img/club.webp' 
import interstellar from '../assets/Img/interstellar.webp'
import Seven from '../assets/Img/Seven.webp'
import gifted from '../assets/Img/gifted.webp'
import inception from '../assets/Img/inception.webp'
import FordvsFerrari from '../assets/Img/Ford.webp'

const Movies = () => {
  return (
    <>    
    <div className='pt-20 bg-gray-300 '>
      <h1 className='text-center text-2xl text-red-600 font-bold mb-4 underline'>Admin Picks</h1>

    <div className='flex flex-wrap items-center justify-center gap-3 pb-10'>
       
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

       <MovieCard 
      img={Seven}
      title="Seven"
      director="David Fincher"
      release=" 1999 "
      plot={`Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives. As the investigation progresses, they are drawn deeper into a dark, twisted series of crimes that challenge their morals and sanity — leading to a harrowing, unforgettable climax.`}
      />

       <MovieCard 
      img={gifted}
      title="Gifted"
      director="Marc Webb"
      release=" 2017 "
      plot={`Frank Adler, a single man raising his child prodigy niece Mary, wants her to have a normal life. But when her extraordinary mathematical talents catch attention, a custody battle ensues with his mother — threatening to separate them and disrupt the simple life he tries to give her.`}
       />

      <MovieCard 
      img={inception}
      title="Inception"
      director="Christopher Nolan"
      release=" 2017 "
      plot={`Dom Cobb is a skilled thief, the best in the art of extraction: stealing secrets from within the subconscious during dreams. He's offered a chance to have his past erased — but only if he can achieve the impossible: inception — planting an idea in someone's mind. As layers of dreams unfold, reality begins to blur.`}
      />


      <MovieCard 
      img={FordvsFerrari}
      title="Ford v Ferrari"
      director="ames Mangold"
      release=" 2019 "
      plot={`American car designer Carroll Shelby and fearless British driver Ken Miles battle corporate odds, personal demons, and the laws of physics to build a revolutionary race car for Ford. Their mission? Defeat Ferrari at the 1966 Le Mans — a 24-hour race that becomes a legend.`}
      />


    </div>
  </div>
    </>

  )
}

export default Movies