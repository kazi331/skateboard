import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const WatchInfoDetails = ({ Info }) => {
    const { name, des, time, week, userImg, userVideo,views,bg } = Info;
    return (
        <div className='w-60  bg-[#353340] rounded-2xl '>
            <div className='relative'>
                <video  width="250 rounded-2xl" >
            <source src={userVideo} type="video/mp4"/>
                </video>
                <p className='absolute top-2 right-2 bg-gray-500 opacity-60 rounded-lg text-xs p-1 '>{time} </p>
                <img className='absolute right-2 bottom-[-24px] w-14 h-14 border-2 p-1 rounded-full' src={userImg} alt="user-img" />
                <BsFillCheckCircleFill size='20px'  className='p-1 fill-[#0aa0f7]  bg-[#353340] rounded-full border-0 absolute right-2'/>
            </div>
            <div className='p-4'>
                <div className='flex  items-center'>

                    <h1 className=' text-gray-500'>{name}</h1>
                <div className={`ml-2 w-1 h-1 rounded-lg bg-${bg}-500`}></div>
                </div>
                <p className='my-2 leading-5'>{des}</p>
                <div className='text-xs text-gray-500 flex justify-start'>
                    <p>{views} views</p>
                    <div className='flex ml-4 items-center'>
                         <div className='mr-2 w-1 h-1 rounded-lg bg-gray-500'></div> <p className=''> {week} </p>
                   </div>
                </div>
          </div>
        </div>
    );
};

export default WatchInfoDetails;