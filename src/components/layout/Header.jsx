import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HomeIcon, LikeIcon, NotificationIcon, UsersIcon } from '../../utils/Icons'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)


  window.addEventListener("click", (e) => {
    // close when click on menu items

    if (e.target.parentElement?.id === "menu") {
      setShowMenu(false)
    }
    // close when click on outside of menu
    if (e.target.parentElement?.id !== "menu" && e.target.parentElement?.id !== "menu-btn") {
      setShowMenu(false)
    }
  })

  return (
    <header className='flex justify-between space-x-4 mb-4'>
      <form className='max-w-md w-full' >
        <input className={`search bg-[#353340] w-full rounded-md focus:outline-none `} placeholder="search" type="text" name="search" />
      </form>
      <div className='flex gap-x-2 items-center min-w-max relative'>
        <button id="menu-btn" onClick={() => setShowMenu(!showMenu)} className='flex items-center cursor-pointer gap-x-2'>
          <img className='w-8 h-8 rounded-xl object-cover' src="https://sharif.rocks/static/media/me.d3a2f6d2099663316429.jpg" alt="" />
          <h2 className='hidden md:block font-semibold '>Sayem</h2>
          <svg className=' hidden md:block w-3 h-3 mt-1 text-[#908d9e]' viewBox="0 0 492 492" fill="currentColor">
            <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"></path>
          </svg>
        </button>
        {/* profile menu  */}
        <div id="menu" className={` ${showMenu ? "z-20 top-full" : "-z-10 top-14"} transition-all duration-200 absolute top-full right-0  flex flex-col text-gray-300  whitespace-pre-wrap min-w-max bg-inactiveBg bg-opacity-60 backdrop-blur-3xl shadow-lg items-start  rounded-lg py-2 text-sm`}>
          <Link href="/profile" className='flex gap-x-2 py-2 px-3 rounded items-center hover:text-white hover:bg-white hover:bg-opacity-5 hover:backdrop-blur-3xl w-full'>
            <img className='w-6 h-6 rounded-xl object-cover' src="https://sharif.rocks/static/media/me.d3a2f6d2099663316429.jpg" alt="" />
            Kazi Shariful Islam
          </Link>
          <Link href="/profile" className='flex gap-x-2 py-2 px-3 rounded items-center hover:text-white hover:bg-white hover:bg-opacity-5 hover:backdrop-blur-3xl w-full'><HomeIcon className="w-5 h-5" /> Dashboard</Link>
          <Link href="/profile" className='flex gap-x-2 py-2 px-3 rounded items-center hover:text-white hover:bg-white hover:bg-opacity-5 hover:backdrop-blur-3xl w-full'><LikeIcon className="w-5 h-5" /> Settings</Link>
          <Link href="/profile" className='flex gap-x-2 py-2 px-3 rounded items-center hover:text-white hover:bg-white hover:bg-opacity-5 hover:backdrop-blur-3xl w-full'><UsersIcon className="w-5 h-5" /> Videos</Link>
          <Link href="/profile" className='flex md:hidden gap-x-2 py-2 px-3 rounded items-center hover:text-white hover:bg-white hover:bg-opacity-5 hover:backdrop-blur-3xl w-full'><NotificationIcon className="w-5 h-5" /> Notifications</Link>
        </div>

        <button className='relative hidden md:block'>
          <NotificationIcon className="w-9 h-9 p-2 text-[#908d9e] hover:text-white hover:bg-[#353340] rounded-lg ml-2" />
          <div className='w-2 h-2 bg-[#df5634] ring-1 ring-gray-900 rounded-full absolute top-1 right-2 '></div>
        </button>
      </div>
    </header>
  )
}

export default Header