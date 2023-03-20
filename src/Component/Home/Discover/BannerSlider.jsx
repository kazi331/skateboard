import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import './BannerSlider.css';
import avatarImg from '../../../assets/Images/alif.jpg';
import avatarImg2 from '../../../assets/Images/avatar2.jpg';
import bannerImg from '../../../assets/Images/skate-removebg-.png';
import bannerImg2 from '../../../assets/Images/2nd-banner.jpg';

const BannerSlider = () => {
    return (
        <div>
            <Swiper  slidesPerView={1.5}
                spaceBetween={30}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
       
        modules={[Autoplay]}
        className="mySwiper">
                <SwiperSlide>
                    <div className="rounded-lg m-6 bg-secondary text-primary lg:h-96 overflow-hidden" >
                      <div className="flex justify-center items-start p-6">
                           
                          <div className='lg:w-1/3 text-start pt-6'>
                             <h1 className="text-3xl font-bold">How to do Basic Jumping and how to landing safely</h1>
                                <div className='flex justify-start items-center pt-12 '>
                                    <div className="avatar ">
                             <div className="w-12  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={avatarImg}/>
                                        </div>
                                </div>
                                <div className='ml-4'>
                                            <h1 className='font-bold '>Thomas Hope</h1>
                                            <div className='flex  text-xs'>
                                            <p> 53K views</p>
                                            <div className='flex justify-center items-center ml-4'>
                                                <div className="badge badge-xs badge-primary"></div>
                                           <p className='ml-2'>2 weeks ago </p>
                                            </div>
                                           
                                           </div>
                                </div>
                           </div>
                            </div>
                             <div className='lg:w-2/3'>
                                  <img src={bannerImg} className="      rounded-lg " />
                             </div>
                      </div>
                   </div>
                    
        </SwiperSlide>
   <SwiperSlide>
                    <div className="rounded-lg m-6  text-primary lg:h-96 overflow-hidden" style={{backgroundImage:`url("${bannerImg2}") `, backgroundSize:'cover'}}>
                      <div className="flex justify-center items-start p-6">
                           
                          <div className='lg:w-1/3 text-start pt-6'>
                             <h1 className="text-3xl font-bold">How to do Basic Jumping and how to landing safely</h1>
                                <div className='flex justify-start items-center pt-12 '>
                                    <div className="avatar ">
                             <div className="w-12  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={avatarImg2}/>
                                        </div>
                                </div>
                                <div className='ml-4'>
                                            <h1 className='font-bold'>Thomas Hope</h1>
                                            <div className='flex  text-xs'>
                                            <p> 53K views</p>
                                            <div className='flex justify-center items-center ml-4'>
                                                <div className="badge badge-xs badge-primary"></div>
                                           <p className='ml-2'>2 weeks ago </p>
                                            </div>
                                           
                                           </div>
                          </div>
                           </div>
                            </div>
                             <div className='lg:w-2/3'>
                                  {/* <img src={bannerImg} className="      rounded-lg " /> */}
                             </div>
                      </div>
                   </div>
                    
        </SwiperSlide>
        
      </Swiper>  
        </div>
    );
};

export default BannerSlider;