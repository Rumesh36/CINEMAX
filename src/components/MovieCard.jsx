import React from 'react'

const MovieCard = ({img,title,director,release,plot}) => {
  return (
<div>

<div className="bg-white  border-black w-[350px] h-[650px] flex flex-col items-center rounded-xl">
   <div className=" mt-10 rounded-2xl">
       <img className='w-[300px] h-auto object-cover rounded-2xl'
        src={img} alt={title} />
    </div>    

    <div className='mt-3 flex flex-wrap gap-3 justify-center'>
    <h1 className='text-xl font-bold bg-gray-900 text-white px-3 py-2 rounded-lg '>{title}</h1>
    <h1 className='text-xl font-bold bg-gray-200 border-black border-2 px-4 py-2 rounded-lg '>{release}</h1>
    <h1 className='text-xl font-bold border-2  text-red-600 px-5 py-2 rounded-lg '>{director}</h1>
    </div>
     <h1 className=' text-gray-700 font-bold text-lg'>click here for plot</h1>
    <div className="">
        <p>{plot}</p>
    </div>

</div>    




</div>
  )
}

export default MovieCard