import React from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'


const MenuNavLink = () => {
    const navigate = useNavigate();
    const logOutClick = () => {
        if (localStorage.getItem("user")) {
            localStorage.removeItem("user");
            navigate('/signin')
        }
    }
    return (
        <div>
            <ul className='menu-nav'>
                <li className='menu-nav_item'><NavLink to="/">Home</NavLink></li>
                <li className='menu-nav_item'><NavLink to="/product">Product Page</NavLink></li>
                <li className='menu-nav_item'><NavLink to="/about">About me</NavLink></li>
                {localStorage.getItem("user") ? <div>
                    <li className='menu-nav_item'><NavLink to="/admin">{JSON.parse(localStorage.getItem('user')).name}</NavLink></li>
                    <li className='menu-nav_item'><NavLink to="/admin">Manager</NavLink></li>
                    <li className='menu-nav_item'><button onClick={logOutClick} id="btn-log-out">Log out</button></li>
                </div>
                    :
                    <div>
                        <li className='menu-nav_item'><NavLink to="/signin">Sign In</NavLink></li>
                        <li className='menu-nav_item'><NavLink to="/signup">Sign Up</NavLink></li>
                    </div>
                }

            </ul>
        </div>
    )
}

export default MenuNavLink