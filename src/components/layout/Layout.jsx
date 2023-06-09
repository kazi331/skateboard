import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <div className='bg-[#1F1D2B] text-gray-200 p-6 min-h-screen'>
            <div className="flex rounded-lg overflow-hidden">
                <Navbar />
                <div className='w-10/12 p-6'>
                    <Header />
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout