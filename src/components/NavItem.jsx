import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({ to, Icon, identifier = "trending", active = "active1", label = "Label" }) => {
    return (
        <NavLink className={`hover:text-gray-300 flex items-center gap-x-2 group ${identifier}`} to={to}>
            <Icon className={`transition-all  w-8 h-8 p-2 bg-inactivebg group-hover:bg-${active} group-hover:text-gray-200 rounded-lg relative `} />
            <span className=' hidden absolute left-24 bg-inactivebg md:bg-transparent px-3 pb-1 text-sm md:text-lg  rounded  md:static group-hover:block md:block'> {label}</span>
        </NavLink>
    )
}

export default NavItem