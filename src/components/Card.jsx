import React from 'react'

const Card = (props) => {
  return (
    <>
    <div className='text-center border-6 border-green-800 inline-block'>
    <h1>
        {props.heading}
    </h1>
    <h2>
        {props.content}
    </h2>
         {props.icon}
     </div>
    </>
    
  )
}

export default Card