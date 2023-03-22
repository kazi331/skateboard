import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ to, Icon, identifier, active = "active1", label = "Label" }) => {
    console.log(identifier)
    return (
        <NavLink className={`hover:text-gray-300 nav-item flex items-center gap-x-2 py-1 group ${identifier}`} to={to}>
            <Icon className={`transition-all w-10 md:w-8  h-10 md:h-8 p-2 bg-inactiveBg  group-hover:text-white rounded-lg relative `} />
            <span className=' opacity-0 w-0 overflow-hidden group-hover:w-auto md:w-auto absolute  translate-x-0 group-hover:opacity-100 group-hover:translate-x-11 transition-all whitespace-nowrap  bg-inactiveBg md:bg-transparent px-3 py-1  rounded md:translate-x-0 md:group-hover:translate-x-0 md:opacity-100  md:static group-hover:block md:block'> {label}</span>
        </NavLink>
    )
}

export default NavItem