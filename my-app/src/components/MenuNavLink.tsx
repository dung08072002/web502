import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuNavLink = () => {
    return (
        <div>
            <ul className='list-group'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/product">Product Page</NavLink></li>
                <li><NavLink to="/about">About me</NavLink></li>
                <li><NavLink to="/signin">Sign in</NavLink></li>
                <li><NavLink to="/signup">Sign up</NavLink></li>
                <li><NavLink to="/admin">Admin</NavLink></li>
            </ul>
        </div>
    )
}

export default MenuNavLink