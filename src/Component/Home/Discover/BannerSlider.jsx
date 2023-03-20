import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './BannerSlider.css';
import avatarImg from '../../../assets/Images/alif.jpg';
import bannerImg from '../../../assets/Images/skate-removebg-.png';

const BannerSlider = () => {
    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className="  bg-sky-500 text-white">
                      <div className="flex justify-center items-center p-6">
                           
                          <div className='lg:w-1/3 text-start '>
                             <h1 className="text-5xl font-bold">How to do Basic Jumping and how to landing safely</h1>
                                <div className='flex justify-start items-end pt-12 '>
                                    <div className="avatar text-white">
                             <div className="w-12  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={avatarImg}/>
                                        </div>
                                </div>
                                <div className='ml-6'>
                                            <h1>Thomas Hope</h1>
                                            <div className='flex text-white'>
                                            <p> 53K views </p>
                                            <div className='flex justify-center items-center ml-4'>
                                                <div className="badge badge-xs badge-primary"></div>
                                           <p className='ml-2'>2 weeks ago</p>
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
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        
      </Swiper>  
        </div>
    );
};

export default BannerSlider;