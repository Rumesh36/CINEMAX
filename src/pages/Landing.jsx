import React from 'react'
import fightclub from '../assets/fightclub.webp'
import { Link } from 'react-router-dom'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <>
    <div className="bg-jetGray">
        <h1 className="text-center text-3xl pt-4 font-bold text-white">
             cineMax
             </h1>
             <div className="mx-auto w-1/2 rounded-3xl">
                <img src={fightclub} 
                alt=""
                className='rounded-3xl my-4'
                 />
             </div>
             <div className="text-4xl text-center font-bold">
                <h1 className=" text-charcoalGray">
                     Unlimited movies and shows
                     </h1>
                     <h1 className='text-charcoalGray text-3xl'>
                        Get Info
                     </h1>
             </div>

             <Link to={ "home"}>
              <button className='bg-red-600 mx-auto block mt-4 text-white px-3 py-2 rounded'>
                 Click here</button>
             </Link>
             <div className='flex'>
                <h1 className='pl-6 text-2xl'>
                    More Reasons to Explore
                    </h1>
             </div>
             <Cards/>
        
    </div>
    <Footer/>
    </>
  )
}

export default Landing