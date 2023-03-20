import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  BookmarkIcon, CommunityIcon, CompetationIcon, HomeIcon, LivekIcon,
  PlaylistIcon, StreamingIcon, TrendingIcon, TutorialIcon
} from '../../utils/Icons'

const Navbar = () => {
  return (
    <div className='w-2/12 min-w-min p-6  text-[#585767]'>
      <h1 className='text-2xl font-semibold mb-4 text-gray-300 text-center hidden sm:block'>skateboard</h1>
      <h1 className='text-2xl font-semibold mb-4 text-gray-300 text-center bg-[#6C5ECF] w-8 h-8 pb-1 flex items-center justify-center rounded-full sm:hidden'>S</h1>
      <div className='font-semibold text-lg space-y-4'>
        <div className='flex flex-col gap-y-4 mb-6'>
          <h2 className='font-medium hidden ms:block'>Menu</h2>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 discover' to="/">
            <HomeIcon className="w-8 h-8 p-2 bg-[#353340] rounded-lg " /> <span className='hidden sm:block'> Discover</span>
          </NavLink>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 trending' to="/trending">
            <TrendingIcon className="w-8 h-8 p-2 bg-[#353340] rounded-lg " /> <span className='hidden sm:block'> Trending</span>
          </NavLink>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 streaming' to="/streaming">
            <StreamingIcon className="w-8 h-8 p-2 bg-[#353340] rounded-lg " /> <span className='hidden sm:block'> Streaming</span>
          </NavLink>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 playlist' to="/playlist">
            <PlaylistIcon className="w-8 h-8 p-2 bg-[#353340] rounded-lg " /> <span className='hidden sm:block'> Playlist</span>
          </NavLink>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 bookmark' to="/bookmark">
            <BookmarkIcon className="w-8 h-8 p-2 bg-[#353340] rounded-lg " /> <span className='hidden sm:block'> Bookmark</span>
          </NavLink>
        </div>
        <hr className='border  border-gray-600 w-10/12 mx-auto '/>
        <div className='flex flex-col gap-y-4 '>
          <h2 className='font-medium hidden sm:block'>Category</h2>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 discover' to="/category/live">
            <LivekIcon className="w-8 h-8 p-2 bg-[#353340] rounded-lg " /> <span className='hidden sm:block'> Live Stream</span>
          </NavLink>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 discover' to="/category/tutorial">
            <TutorialIcon className="w-8 h-8 p-2 bg-[#353340] rounded-lg " /> <span className='hidden sm:block'> Tutorial</span>
          </NavLink>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 discover' to="/category/competation">
            <CompetationIcon className="w-8 h-8 p-2 bg-[#353340] rounded-lg " /> <span className='hidden sm:block'> Competation</span>
          </NavLink>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 discover' to="/category/community">
            <CommunityIcon className="w-8 h-8 p-2 bg-[#353340] rounded-lg " /> <span className='hidden sm:block'> Community</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar