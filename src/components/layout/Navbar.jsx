import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  BookmarkIcon, CommunityIcon, CompetationIcon, HomeIcon, LivekIcon,
  PlaylistIcon, StreamingIcon, TrendingIcon, TutorialIcon
} from '../../utils/Icons'
import NavItem from '../NavItem'


const Navbar = () => {
  return (
    <div className='w-2/12 min-w-min max-w-min p-6 text-gray-500 max-h-[calc(100vh-60px)] overflow-auto '>
      <h1 className='text-2xl font-semibold mb-4 text-gray-300 hidden md:block'>skateboard</h1>
      <h1 className='text-2xl font-semibold mb-8 text-gray-300 text-center bg-active2  rounded-full md:hidden'>S</h1>
      <div className='font-semibold text-lg space-y-4'>
        <div className='flex flex-col gap-y-4 mb-6'>
          <h2 className='font-medium hidden md:block'>Menu</h2>

          <NavItem label="Discover" Icon={HomeIcon} to="/" identifier="discover" />
          <NavItem label='Trending' Icon={TrendingIcon} to="/trending" identifier="trending" active="active2" />
          <NavItem label='Streaming' Icon={StreamingIcon} to="/streaming" identifier="streaming" active="active3" />
          <NavItem label='Playlist' Icon={PlaylistIcon} to="/playlist" identifier="playlist" active="active4" />
          <NavItem label='Bookmark' Icon={BookmarkIcon} to="/bookmark" identifier="bookmark" active="active5" />

        </div>
        <hr className='border  border-gray-600 w-10/12 mx-auto ' />
        <div className='flex flex-col gap-y-4 '>
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