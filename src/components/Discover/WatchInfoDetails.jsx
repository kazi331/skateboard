import React from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import HoverVideoPlayer from 'react-hover-video-player';
import './watch.css'
const WatchInfoDetails = ({ Info }) => {
    const { name, des, time, week, userImg, userVideo,views,bg } = Info;
    return (
        <div className='lg:w-60 watch-container bg-[#353340] rounded-2xl '>
            <div className='relative '>
                <HoverVideoPlayer className="rounded-xl   video-content"
      videoSrc={userVideo} 
                    pausedOverlay={
          <div></div>
        // <img
        //   src={userImg}
        //   alt=""
        //   style={{
        //     // Make the image expand to cover the video's dimensions
        //     width: '100%',
        //     height: '100%',
        //     objectFit: 'cover',
        //   }}
        // />
      }
      loadingOverlay={
        <div className="loading-overlay"> 
          <div className="loading-spinner" />
        </div>
      }
    />
                <p className='absolute top-2 right-2 bg-gray-500 opacity-60 rounded-lg text-xs p-1 time-content'>{time} </p>
                <img className='absolute image-content right-2 bottom-[-24px] w-14 h-14 border-2 p-1 rounded-full' src={userImg} alt="user-img" />
                <BsFillCheckCircleFill size='20px'  className='icon p-1 fill-[#0aa0f7]  bg-[#353340] rounded-full border-0 absolute right-2'/>
            </div>
            <div className='p-4'>
                <div className='flex name-content items-center'>

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