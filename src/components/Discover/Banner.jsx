
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
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
       
        modules={[Autoplay]}
       >
               <SwiperSlide className="rounded-lg p-6 banner-content-1 text-primary lg:h-96 overflow-hidden" >  
                          <div className=' text-start '>
                             <h1 className="text-3xl font-bold lg:w-1/3">How to do Basic Jumping and how to landing safely</h1>
                                <div className='flex justify-start items-center pt-6 '>
                                    <div className='flex justify-between items-center'>
                                          <div className='w-12 h-12'>
                                    <img className='rounded-full border-2 p-1' src={avatarImg} alt="user-img" />
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
                         
        </SwiperSlide>
    <SwiperSlide className="rounded-lg p-6 banner-content text-primary lg:h-96 overflow-hidden" >  
                          <div className=' text-start '>
                             <h1 className="text-3xl font-bold lg:w-1/3">Skateboard Tips You need to know</h1>
                                <div className='flex justify-start items-center pt-6 '>
                                    <div className='flex justify-between items-center'>
                                          <div className='w-12 h-12'>
                                    <img className='rounded-full border-2 p-1' src={avatarImg2} alt="user-img" />
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
                         
        </SwiperSlide>
        
      </Swiper>  
        </div>
    )
}

export default Banner
