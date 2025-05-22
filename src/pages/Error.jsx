import Img from '../assets/Img/404img.webp'


const Error = () => {

    return(

    <>
         
         <div className=" my-5">

            <h1 className="text-center lg:text-5xl text-2xl mt-10 font-bold ">404 Error Page Not Found </h1> 
             <h3 className="text-center mt-3 text-lg font-bold text-gray-800">The Page Your Looking For Is not Found or donot exist... please <span className="text-red-500">TRY AGAIN</span></h3>
        </div>

           <div className="">
             <p className="text-center mt-7 text-lg font-bold text-gray-700">Make Sure Your Internet connection is stable</p>
             <img src={Img} alt="Error"
             className=' mt-3 rounded-3xl mx-auto lg:mb-5'  />
           </div>
       
    
    
    </>

    )
}

export default Error