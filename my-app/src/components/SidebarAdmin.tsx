import React from 'react'
import { NavLink } from 'react-router-dom'

const SidebarAdmin = () => {
  return (
    <div>SidebarAdmin
        <ul className='list-group'>
            <li>
                <NavLink to="dashboard">Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="products">Product Manage</NavLink>
            </li>
        </ul>
    </div>
    
  )
}

export default SidebarAdmin