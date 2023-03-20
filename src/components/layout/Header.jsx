import React from 'react'
import { NotificationIcon } from '../../utils/Icons'

const Header = () => {
  return (
    <header className='flex justify-between space-x-4 mb-4'>
      <form className='max-w-md w-full' >
        <input className={`search bg-[#353340] w-full rounded-md focus:outline-none `} placeholder="search" type="text" name="search" />
      </form>
      <div className='flex gap-x-2 items-center min-w-max '>
        <button className='flex items-center gap-x-2'>
          <img className='w-8 h-8 rounded-xl object-cover' src="https://images.unsplash.com/photo-1587918842454-870dbd18261a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=943&q=80" alt="" />
          <h2 className='hidden md:block font-semibold'>Sayem</h2>
          <svg className=' hidden md:block w-3 h-3 mt-1 text-[#908d9e]' viewBox="0 0 492 492" fill="currentColor">
            <path d="M484.13 124.99l-16.11-16.23a26.72 26.72 0 00-19.04-7.86c-7.2 0-13.96 2.79-19.03 7.86L246.1 292.6 62.06 108.55c-5.07-5.06-11.82-7.85-19.03-7.85s-13.97 2.79-19.04 7.85L7.87 124.68a26.94 26.94 0 000 38.06l219.14 219.93c5.06 5.06 11.81 8.63 19.08 8.63h.09c7.2 0 13.96-3.57 19.02-8.63l218.93-219.33A27.18 27.18 0 00492 144.1c0-7.2-2.8-14.06-7.87-19.12z"></path>
          </svg>
        </button>
        <button className='relative hidden md:block'>
          <NotificationIcon className="w-9 h-9 p-2 text-[#908d9e] hover:text-white hover:bg-[#353340] rounded-lg ml-2" />
          <div className='w-2 h-2 bg-[#df5634] ring-1 ring-gray-900 rounded-full absolute top-1 right-2 '></div>
        </button>
      </div>
    </header>
  )
}

export default Header