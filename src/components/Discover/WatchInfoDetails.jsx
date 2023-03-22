import React from 'react';
import { UsersIcon } from '../../utils/Icons';

const WatchInfoDetails = ({ Info }) => {
    const { name, des, time, week, userImg, userVideo,views,bg } = Info;
    return (
        <div className='w-60  bg-[#353340] rounded-2xl '>
            <div className='relative'>
                <video controls width="250 rounded-2xl" >
            <source src={userVideo} type="video/mp4"/>
                </video>
                <img className='w-6 h-6 rounded-full' src={userImg} alt="user-img" />
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