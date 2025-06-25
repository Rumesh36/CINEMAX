import React, { useState } from "react";
import { motion } from "framer-motion";
const MovieCard = ({ img, title, director, release, plot }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div>
      <div className="bg-white  border-black w-[350px] h-[650px] flex flex-col items-center rounded-xl">

        {/* card flip area */}
        <div
          className=" mt-8 rounded-2xl w-[300px] h-[450px] cursor-pointer [perspective:1000px]"
          onClick={() => setFlipped(!flipped)}
        >
          {/* framer */}
          <motion.div 
            className="relative w-full h-full transition-transform duration-100"
            animate={{rotateY:flipped ? 180 : 0 }}
            style={{transformStyle:"preserve-3d"}}
          >
            {/* front side of image  */}
          
            <div className="absolute w-full h-full rounded-2xl backface-hidden">
              <img 
              className=" w-full h-full object-cover rounded-2xl" 
              src={img}
              alt={title} />
           </div>
            {/* back side of image -plot */}

            <div
             className="absolute w-full h-full rounded-2xl  backface-hidden [transform:rotateY(180deg)] overflow-hidden">
              <img 
              className="w-full h-full object-cover filter blur-sm brightness-75 scale-105"
              src={img} 
              alt={title} />

              <div className="absolute inset-0 flex items-center justify-center p-4">
              <p className="text-center whitespace-pre-line leading-relaxed px-2 italic tracking-wider font-bold text-white ">
                {plot}</p>
                </div>
            </div>

          </motion.div>
           </div>
      
        <div className="mt-3 flex flex-wrap gap-3 justify-center  w-70">
          <h1 className="text-xl font-bold bg-gray-900 text-white px-3 py-2 rounded-lg ">
            {title}
          </h1>
          <h1 className="text-xl font-bold bg-gray-200 border-black border-2 px-4 py-2 rounded-lg ">
            {release}
          </h1>
          <h1 className="text-xl font-bold border-2  text-red-600 px-5 py-2 rounded-lg ">
            {director}
          </h1>
        </div>
        <button className="text-gray-700 font-medium text-lg mt-2">
          Click on image for plot....
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
