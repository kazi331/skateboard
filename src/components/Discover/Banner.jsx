
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { BsFillCheckCircleFill} from "react-icons/bs";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import './Banner.css';
import avatarImg from '../../assets/Images/alif.jpg';
import avatarImg2 from '../../assets/Images/avatar2.jpg';


function Banner() {
    return (
         <div >
            <Swiper  slidesPerView={1.5}
                spaceBetween={30}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay]} className="lg:block hidden"
       >
               <SwiperSlide className="rounded-lg p-6 banner-content-1  lg:80 overflow-hidden bg-sky-500" >  
                          <div className=' text-start '>
                             <h1 className="text-3xl font-bold lg:w-1/3">How to do Basic Jumping and how to landing safely</h1>
                                <div className='flex justify-start items-center pt-6 '>
                                    <div className='flex justify-between items-center'>
                                          <div className='w-12 h-12 relative'>
                                    <img className='rounded-full border-2 p-1' src={avatarImg} alt="user-img" />
                                     <BsFillCheckCircleFill size='20px'  className='p-1   bg-[#0aa0f7] rounded-full border-0 absolute right-0 bottom-0'/>
                                    </div> 
                                     <div className='ml-4'>
                                            <h1 className='font-bold'>Thomas Hope</h1>
                                            <div className='flex  text-xs'>
                                            <p> 53K views</p>
                                            <div className='flex justify-center items-center ml-4'>
                                                <div className="w-1 h-1 rounded-full bg-gray-300 p-1">
                                                   
                                                </div>
                                           <p className='ml-2'>2 weeks ago </p>
                                            </div>
                                           
                                           </div>
                          </div>
                                  </div>
                           </div>
                            </div>
                         
        <p className= 'fixed right-6 bottom-6 bg-gray-500 p-1 rounded-lg text-xs opacity-90 h-6'>7 min</p> </SwiperSlide>
    <SwiperSlide className="rounded-lg p-6 banner-content opacity-90 lg:80 " >                
                             <div className=' text-start '>
                             <h1 className="text-3xl font-bold lg:w-1/3 mt-2">Skateboard Tips You need to know</h1>
                                
                                    <div className='mt-6'>               
                                     <div >
                                            <h1 className='font-bold'>Thomas Hope</h1>
                                            <div className='flex  text-xs'>
                                            <p> 53K views</p>
                                            <div className='flex justify-center items-center ml-4'>
                                                <div className="w-1 h-1 rounded-full bg-gray-300 p-1">
                                                   
                                                </div>
                                           <p className='ml-2'>2 weeks ago </p>
                                            </div>
                                     
                                           </div>
                                </div>
                                   
                           
                                
                        </div>
                         <div className='w-12 h-12 mt-4 relative'>
                            <img className='rounded-full border-2 p-1' src={avatarImg2} alt="user-img" />
                            <BsFillCheckCircleFill size='20px'  className='p-1 rounded-full border-0 absolute right-0 bottom-0'/>
                                    </div> 
                            </div>
                          <p className= 'fixed right-6 bottom-6 bg-gray-500 opacity-90 p-1 rounded-lg text-xs h-6'>7 min</p>
                    
        </SwiperSlide>
            </Swiper>  
            

            {/* mobile:****************************
         */}
            <div className='rounded-lg'>
                    <div className="rounded-lg p-6 banner-content-1  bg-sky-500 lg:80 overflow-hidden w-80 lg:hidden block mb-6 opacity-90" >  
                          <div className=' text-start rounded-lg'>
                             <h1 className="lg:text-3xl text-xl font-bold w-2/3">How to do Basic Jumping and how to landing safely</h1>
                                <div className='pt-6 '>
                                   <div >
                                            <h1 className='font-bold'>Thomas Hope</h1>
                                            <div className='flex  text-xs'>
                                            <p> 53K views</p>
                                            <div className='flex justify-center items-center ml-4'>
                                                <div className="w-1 h-1 rounded-full bg-gray-300 p-1">
                                                   
                                                </div>
                                           <p className='ml-2'>2 weeks ago </p>
                                          
                                </div>
                                   
                           
                                
                        </div>
                         <div className=' mt-4'>
                                    <img className='w-12 h-12 rounded-full border-2 p-1' src={avatarImg} alt="user-img" />
                                    </div> 
                            </div>
                        </div>
                          
                    </div>
                    <p className='absolute right-12 bottom-0  bg-gray-500 p-1 rounded-lg text-xs h-6 opacity-90 mt-6'>7 min</p>
                         
        </div>
            <div className="rounded-lg p-6 banner-content  lg:80 overflow-hidden w-80 lg:hidden block opacity-95" >  
                          <div className=' text-start w-2/3'>
                             <h1 className="lg:text-3xl text-xl font-bold ">Skateboard Tips You need to know</h1>
                                <div className='pt-6 '>
                                  
                            <div >
                                            <h1 className='font-bold'>Thomas Hope</h1>
                                            <div className='flex  text-xs'>
                                            <p> 53K views</p>
                                            <div className='flex justify-center items-center ml-4'>
                                                <div className="w-1 h-1 rounded-full bg-gray-300 p-1">
                                                   
                                                </div>
                                           <p className='ml-2'>2 weeks ago </p>
                                            </div>        
                        </div>
                         <div className=' mt-4'>
                                    <img className=' w-12 h-12 rounded-full border-2 p-1' src={avatarImg2} alt="user-img" />
                                    
                                    </div> 
                    </div>
                
                           </div>
                            </div>
                        <p className='absolute right-8 bottom-[-5px]bg-gray-500 p-1 rounded-lg text-xs h-6 opacity-90 '>7 min</p> 
        </div>
        </div>
        </div>
    )
}

export default Banner
