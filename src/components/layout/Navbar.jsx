import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  BookmarkIcon, CommunityIcon, CompetationIcon, HomeIcon, LivekIcon,
  PlaylistIcon, StreamingIcon, TrendingIcon, TutorialIcon
} from '../../utils/Icons'
import NavItem from '../NavItem'


const Navbar = () => {
  return (
    <div className='w-2/12  min-w-min max-w-min p-6 text-gray-500 max-h-[calc(100vh-60px)] overflow-auto '>
      <h1 className='text-2xl font-semibold mb-4 text-gray-300 hidden md:block'>skateboard</h1>
      <h1 className='text-2xl font-semibold mb-8 text-gray-300 text-center bg-active3  rounded-full md:hidden'>S</h1>
      <div className='font-semibold space-y-4'>
        <div className='flex flex-col gap-y-2 mb-6'>
          <h2 className='font-medium hidden md:block'>Menu</h2>
          {/* <NavLink className='hover:text-gray-300 flex items-center gap-x-2 discover group' to="/">
            <HomeIcon className="transition-all  w-8 h-8 p-2 bg-inactivebg group-hover:bg-active1 group-hover:text-gray-200 rounded-lg relative " /> <span className=' hidden absolute left-24 bg-inactivebg md:bg-transparent px-3 pb-1 text-sm md:text-lg  rounded  md:static group-hover:block md:block'> Discover</span>
          </NavLink> */}
          <NavItem label="Discover" Icon={HomeIcon} to="/" identifier="discover" active="active1" />
          <NavItem label='Trending' Icon={TrendingIcon} to="/trending" identifier="trending" active="active2" />
          <NavItem label='Streaming' Icon={StreamingIcon} to="/streaming" identifier="streaming" active="active3" />
          <NavItem label='Playlist' Icon={PlaylistIcon} to="/playlist" identifier="playlist" active="active4" />
          <NavItem label='Bookmark' Icon={BookmarkIcon} to="/bookmark" identifier="bookmark" active="active5" />

        </div>
        <hr className='border  border-gray-600 w-10/12 mx-auto ' />
        <div className='flex flex-col gap-y-2 '>
          <h2 className='font-medium hidden md:block'>Category</h2>
          <NavItem label='Live streaming' Icon={LivekIcon} to="/category/live" identifier="discover" active="active1" />
          <NavItem label='Tutorial' Icon={TutorialIcon} to="/category/tutorial" identifier="trending" active="active2" />
          <NavItem label='Competation' Icon={CompetationIcon} to="/category/competation" identifier="streaming" active="active3" />
          <NavItem label='Community' Icon={CompetationIcon} to="/category/community" identifier="playlist" active="active4" />

        </div>
      </div>
    </div>
  )
}

export default Navbar