import React from 'react'
import fightclub from '../assets/fightclub.webp'
import { Link } from 'react-router-dom'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <>
    <div className="bg-linear-to-b from-white to-red-500">
        <h1 className="text-center text-3xl pt-4 font-bold text-gray-800 tracking-[0.8rem]">
             CineMax
             </h1>
             <div className="  mx-auto w-[90%] sm:w-[75%] lg:w-[30%]  h-auto rounded-3xl">
                <img src={fightclub} 
                alt=""
                className='rounded-3xl my-4 '
                 />
             </div>
             <div className="text-4xl text-center font-bold">
                <h1 className=" text-charcoalGray">
                     Unlimited movies ,TV shows and More...
                     </h1>
                     <h1 className='text-charcoalGray text-lg'>
                        Ready to watch? Enter your email to create or restart your membership.
                     </h1>
             </div>

             <Link to={ "home"}>
              <button className='bg-red-600 mx-auto block mt-4 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-red-700'>
                 Click here</button>
             </Link>
             <div className=''>
                <h1 className='pl-6 text-2xl text-center mb-4 mt-4 text-red-800 font-medium'>
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