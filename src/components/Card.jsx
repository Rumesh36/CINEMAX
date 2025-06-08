import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Card = (props) => {
  const ref = useRef(null);
  const isInView =useInView(ref,{
    triggerOnce:true,
    threshould:0.2,
  } 
);

  return (
    <>
    <motion.div
     ref={ref}
     initial={{opacity:0,scale:0.8,y:30}}
     animate={isInView?{opacity:1,scale:1,y:0}:{}}
     transition={{duration:0.6,ease:"easeInOut"}}
    
    className=' rounded-lg border-2 border-gray-300
    inline-block mx-3 my-3 bg-white px-3 font-semibold
      py-5 hover:bg-red-500 hover:text-white '>
    <h1 className='text-2xl text-jetGray'>
        {props.heading}
    </h1>
    <h2 className='text-sm text-charcoalGray mb-4'>
        {props.content}
    </h2>
     <div className='mt-2 flex justify-center items-center'>  
        <div className=" ">
           {props.icon}
        </div>
     </div>
     </motion.div>
    </>
    
  )
}

export default Card