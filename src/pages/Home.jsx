import React from 'react'
import fightclub from '../assets/Img/fightclub.webp'
// import club1 from '../assets/Img/club1.webp'
// import club2 from '../assets/Img/club2.webp'
import { Link } from 'react-router-dom'
import Cards from '../components/Cards'
import Footer from '../components/Layouts/Footer'

const Home = () => {
  return (
    <>
    <div className="bg-linear-to-b from-white to-gray-500 dark:bg-gray-900 min-h-screen" >
             <h1 className='text-center mt-2 text-3xl text-black tracking-[0.5rem] font-bold'>Cine<span className='text-red-600'>Max</span></h1>
             <p className='text-center text-charcoalGray text-xs'>Where the soul meets emotion — that’s the magic of cinema.</p>

             <div className="  mx-auto w-[90%] sm:w-[75%] lg:w-[30%]  h-auto rounded-3xl">
                <img src={fightclub} 
                alt=""
                className='rounded-3xl my-4 '
                 />
             </div>
             <div className="text-3xl text-center ">
                <h1 className=" text-gray-800 font-bold">
                     Search Unlimited Movies and Listen Best music
                     </h1>
                     <h1 className='text-gray-700 font-semibold text-xl my-2'>
                         Know the Reviews and plots of The Movies by easy search
                     </h1>
                     <h2 className='text-charcoalGray font-bold text-sm'>Bless Your Soul With Amazing Music Picked By Us...</h2>
             </div>

             <Link to="/search">
              <button className='bg-red-600 mx-auto block mt-4 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-red-700'>
                 Begins Here </button>
             </Link>
             <div className=''>
                <h1 className='pl-6 text-2xl text-center mb-4 mt-4 text-red-700 font-medium'>
                    More Reasons to Follow Us...
                    </h1>
             </div>
             <Cards/>
        
    </div>
    <Footer/>
    </>
  )
}

export default Home