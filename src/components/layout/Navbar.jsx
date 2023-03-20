import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  BookmarkIcon, CommunityIcon, CompetationIcon, HomeIcon, LivekIcon,
  PlaylistIcon, StreamingIcon, TrendingIcon, TutorialIcon
} from '../../utils/Icons'

const Navbar = () => {
  return (
    <div className='w-2/12 min-w-min max-w-min p-6 text-gray-500 '>
      <h1 className='text-2xl font-semibold mb-4 text-gray-300 text-center hidden md:block'>skateboard</h1>
      <h1 className='text-2xl font-semibold mb-4 text-gray-300 text-center bg-[#6C5ECF] w-8 h-8 pb-1 flex items-center justify-center rounded-full md:hidden'>S</h1>
      <div className='font-semibold text-lg space-y-4'>
        <div className='flex flex-col gap-y-4 mb-6'>
          <h2 className='font-medium hidden ms:block'>Menu</h2>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 discover group' to="/">
            <HomeIcon className="transition-all  w-8 h-8 p-2 bg-inactivebg group-hover:bg-active1 group-hover:text-gray-200 rounded-lg relative " /> <span className=' hidden absolute left-24 bg-inactivebg md:bg-transparent px-3 pb-1 text-sm md:text-lg  rounded  md:static group-hover:block md:block'> Discover</span>
          </NavLink>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 trending group' to="/trending">
            <TrendingIcon className="transition-all  w-8 h-8 p-2 bg-inactivebg group-hover:bg-active2 group-hover:text-gray-200 rounded-lg relative " /> <span className=' hidden absolute left-24 bg-inactivebg md:bg-transparent px-3 pb-1 text-sm md:text-lg  rounded  md:static group-hover:block md:block'> Trending</span>
          </NavLink>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 streaming group' to="/streaming">
            <StreamingIcon className="transition-all  w-8 h-8 p-2 bg-inactivebg group-hover:bg-active3 group-hover:text-gray-200 rounded-lg relative " /> <span className=' hidden absolute left-24 bg-inactivebg md:bg-transparent px-3 pb-1 text-sm md:text-lg  rounded  md:static group-hover:block md:block'> Streaming</span>
          </NavLink>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 playlist group' to="/playlist">
            <PlaylistIcon className="transition-all  w-8 h-8 p-2 bg-inactivebg group-hover:bg-active4 group-hover:text-gray-200 rounded-lg relative " /> <span className=' hidden absolute left-24 bg-inactivebg md:bg-transparent px-3 pb-1 text-sm md:text-lg  rounded  md:static group-hover:block md:block'> Playlist</span>
          </NavLink>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 bookmark group' to="/bookmark">
            <BookmarkIcon className="transition-all  w-8 h-8 p-2 bg-inactivebg group-hover:bg-active5 group-hover:text-gray-200 rounded-lg relative " /> <span className=' hidden absolute left-24 bg-inactivebg md:bg-transparent px-3 pb-1 text-sm md:text-lg  rounded  md:static group-hover:block md:block'> Bookmark</span>
          </NavLink>
        </div>
        <hr className='border  border-gray-600 w-10/12 mx-auto ' />
        <div className='flex flex-col gap-y-4 '>
          <h2 className='font-medium hidden md:block'>Category</h2>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 discover group' to="/category/live">
            <LivekIcon className="transition-all  w-8 h-8 p-2 bg-inactivebg group-hover:bg-active1 group-hover:text-gray-200 rounded-lg relative " /> <span className=' hidden absolute left-24 bg-inactivebg md:bg-transparent px-3 pb-1 text-sm md:text-lg  rounded  md:static group-hover:block md:block'> Live Stream</span>
          </NavLink>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 discover group' to="/category/tutorial">
            <TutorialIcon className="transition-all  w-8 h-8 p-2 bg-inactivebg group-hover:bg-active1 group-hover:text-gray-200 rounded-lg relative " /> <span className=' hidden absolute left-24 bg-inactivebg md:bg-transparent px-3 pb-1 text-sm md:text-lg  rounded  md:static group-hover:block md:block'> Tutorial</span>
          </NavLink>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 discover group' to="/category/competation">
            <CompetationIcon className="transition-all  w-8 h-8 p-2 bg-inactivebg group-hover:bg-active1 group-hover:text-gray-200 rounded-lg relative " /> <span className=' hidden absolute left-24 bg-inactivebg md:bg-transparent px-3 pb-1 text-sm md:text-lg  rounded  md:static group-hover:block md:block'> Competation</span>
          </NavLink>
          <NavLink className='hover:text-gray-300 flex items-center gap-x-2 discover group' to="/category/community">
            <CommunityIcon className="transition-all  w-8 h-8 p-2 bg-inactivebg group-hover:bg-active1 group-hover:text-gray-200 rounded-lg relative " /> <span className=' hidden absolute left-24 bg-inactivebg md:bg-transparent px-3 pb-1 text-sm md:text-lg  rounded  md:static group-hover:block md:block'> Community</span>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar