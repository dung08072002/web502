import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuNavLink = () => {
    return (
        <div>
            <ul className='menu-nav'>
                <li className='menu-nav_item'><NavLink to="/">Home</NavLink></li>
                <li className='menu-nav_item'><NavLink to="/product">Product Page</NavLink></li>
                <li className='menu-nav_item'><NavLink to="/about">About me</NavLink></li>
                <li className='menu-nav_item'><NavLink to="/admin">Admin</NavLink></li>
                <li className='menu-nav_item'><button id="btn-log-out">Log out</button></li>
            </ul>
        </div>
    )
}

export default MenuNavLink