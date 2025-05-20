import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className='text-center rounded-lg border-2 border-gray-300
    inline-block mx-3 my-3 bg-white px-3 font-semibold
      py-5 hover:bg-red-500 hover:text-white '>
    <h1 className='text-2xl text-jetGray'>
        {props.heading}
    </h1>
    <h2 className='text-sm text-charcoalGray'>
        {props.content}
    </h2>
         {props.icon}
     </div>
    </>
    
  )
}

export default Card