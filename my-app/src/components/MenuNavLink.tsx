import React, { useEffect, useState } from 'react'
import { Navigate, NavLink, useNavigate, Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import { TypeCategory } from '../types/category'
import { listCate } from '../api/category'
import {
    ShoppingCartOutlined
} from '@ant-design/icons'
type MenuNavLinkProps = {

}

type TypeInput = {
    q: string,
}

const MenuNavLink = (props: MenuNavLinkProps) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TypeInput>();
    const navigate = useNavigate();

    const logOutClick = () => {
        if (localStorage.getItem("user")) {
            localStorage.removeItem("user");
            navigate('/signin')
        }
    }
    const onSubmit: SubmitHandler<TypeInput> = data => {
        localStorage.setItem("inputSearch", JSON.stringify(data))
        // location.href =`/search?q=${data.q}`
        navigate(`/search?searchText=${data.q}`)
    }
    return (
        <div>
            <ul className='menu-nav d-flex justify-content-between mb-0'>
                <div className='left-nav'>
                    <Link to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 587.93 165" width={80} height={26}><defs><style dangerouslySetInnerHTML={{ __html: ".cls-1{fill:#f1f5f1}" }} /></defs><path className="cls-1" d="M98.77.33 0 46.07l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74L54.96 136l32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.71L98.77.33zM101.09 142.38l1.63 9.22 73.42 12.24v-30.68l-75.01 9.22h-.04z" /><path className="cls-1" d="M912 580.89v12.63h15.57a14.84 14.84 0 0 1-1.92 7.31 13 13 0 0 1-5.6 5.11 20 20 0 0 1-8.9 1.8 17.53 17.53 0 0 1-10-2.8 17.87 17.87 0 0 1-6.44-8.14 33.06 33.06 0 0 1-2.27-12.93 31.81 31.81 0 0 1 2.32-12.81 18.14 18.14 0 0 1 6.5-8 17.27 17.27 0 0 1 9.82-2.78 19.31 19.31 0 0 1 5.36.71 14.15 14.15 0 0 1 4.33 2.09 12.92 12.92 0 0 1 3.18 3.29 15.61 15.61 0 0 1 2 4.44h17.27a27.22 27.22 0 0 0-3.46-10.28 28.84 28.84 0 0 0-7.05-8.1 32.6 32.6 0 0 0-9.91-5.29 38.2 38.2 0 0 0-12.06-1.86 37.32 37.32 0 0 0-14 2.6 32.6 32.6 0 0 0-11.36 7.61 35 35 0 0 0-7.61 12.21 46.15 46.15 0 0 0-2.73 16.44q0 11.94 4.54 20.59A32.4 32.4 0 0 0 892.27 618a39.84 39.84 0 0 0 35.84.84 28.39 28.39 0 0 0 11.67-11q4.25-7.19 4.24-17.2v-9.76Z" transform="translate(-666.42 -457.73)" /><path className="cls-1" d="M460.61 163.97V88.53h51.67v13.96h-34.62v16.76h27.99v13.96h-27.99v16.8h34.7v13.96h-51.75z" /><path className="cls-1" d="M1228.86 568.4a9 9 0 0 0-3.54-6.64c-2.09-1.59-5-2.38-8.69-2.38a16.63 16.63 0 0 0-6.26 1 8.62 8.62 0 0 0-3.83 2.78 6.74 6.74 0 0 0-1.33 4 6.2 6.2 0 0 0 .79 3.29 7.27 7.27 0 0 0 2.4 2.45 16.54 16.54 0 0 0 3.7 1.79 40.14 40.14 0 0 0 4.64 1.31l6.63 1.54a47.19 47.19 0 0 1 9.45 3.08 27.46 27.46 0 0 1 7.2 4.68 18.84 18.84 0 0 1 4.58 6.39 20.37 20.37 0 0 1 1.61 8.29 20.65 20.65 0 0 1-3.54 12.11 22.56 22.56 0 0 1-10.15 7.85 41.31 41.31 0 0 1-15.93 2.76 42.69 42.69 0 0 1-16.17-2.81 23.22 23.22 0 0 1-10.72-8.48q-3.83-5.66-4-14.12h16.43a10.68 10.68 0 0 0 7.05 9.94 19.37 19.37 0 0 0 7.24 1.26 18.44 18.44 0 0 0 6.66-1.09 10 10 0 0 0 4.33-3 7.22 7.22 0 0 0 1.57-4.48 6.16 6.16 0 0 0-1.42-4 10.86 10.86 0 0 0-4.14-2.81 42.07 42.07 0 0 0-6.89-2.14l-8.07-1.95q-9.65-2.3-15.23-7.26t-5.54-13.44a19.86 19.86 0 0 1 3.72-12.12 24.74 24.74 0 0 1 10.33-8.11 36.74 36.74 0 0 1 15-2.91 35.62 35.62 0 0 1 14.92 2.91 23.43 23.43 0 0 1 9.91 8.14 21.54 21.54 0 0 1 3.6 12.12Z" transform="translate(-666.42 -457.73)" /><path className="cls-1" d="M448.45 163.97h-16.87v-57.35l-1.73-.02-17.04 57.37h-16.86l-16.58-57.37-2.15.02v57.35h-16.87V88.53h28.67l14.48 50.56h1.75l14.48-50.56h28.72v75.44z" /><path className="cls-1" d="M1000.21 621.7h18.27l-25.33-75.43H970l-25.37 75.43h18.3l4.93-16.54h27.42ZM971.78 592l8.22-27.65h3.1l8.26 27.65ZM1250.36 554.24a4 4 0 0 1-3.67-2.44 4 4 0 0 1 0-3.1 4 4 0 0 1 .85-1.27 4.25 4.25 0 0 1 1.27-.86 4.15 4.15 0 0 1 3.1 0 4.13 4.13 0 0 1 1.27.86 4.08 4.08 0 0 1 .86 1.27 4 4 0 0 1 0 3.1 4.08 4.08 0 0 1-.86 1.27 4 4 0 0 1-1.27.86 4 4 0 0 1-1.55.31Zm0-1.09a2.84 2.84 0 0 0 1.47-.39 2.94 2.94 0 0 0 1.05-1 2.93 2.93 0 0 0 0-2.92 3 3 0 0 0-1.06-1 2.93 2.93 0 0 0-2.92 0 3 3 0 0 0-1 1 2.86 2.86 0 0 0 0 2.92 3 3 0 0 0 1 1 2.83 2.83 0 0 0 1.46.39Zm-1.46-1.15v-3.67h1.78a1.52 1.52 0 0 1 .69.15 1.13 1.13 0 0 1 .47.42 1.24 1.24 0 0 1 .17.66 1.16 1.16 0 0 1-.18.66 1 1 0 0 1-.48.41 1.56 1.56 0 0 1-.7.14h-1.2v-.72h1a.52.52 0 0 0 .36-.12.5.5 0 0 0 .14-.37.47.47 0 0 0-.14-.37.52.52 0 0 0-.36-.12h-.55V552Zm2.39-1.68.82 1.68H1251l-.75-1.68Z" transform="translate(-666.42 -457.73)" /><path className="cls-1" d="M282.41 1.03h17.05v75.44h-17.05z" /><path className="cls-1" d="M1046.85 496.48q0 12.42-4.71 21a32.67 32.67 0 0 1-12.79 13.17 38.57 38.57 0 0 1-36.31 0 32.75 32.75 0 0 1-12.79-13.2q-4.71-8.66-4.71-21t4.71-21.05A32.67 32.67 0 0 1 993 462.26a38.65 38.65 0 0 1 36.31 0 32.67 32.67 0 0 1 12.79 13.17q4.71 8.64 4.71 21.05m-17.35 0a33.35 33.35 0 0 0-2.23-13 17.47 17.47 0 0 0-6.33-8 18.57 18.57 0 0 0-19.45 0 17.57 17.57 0 0 0-6.35 8 38.59 38.59 0 0 0 0 26 17.49 17.49 0 0 0 6.35 8 18.57 18.57 0 0 0 19.45 0 17.39 17.39 0 0 0 6.33-8 33.4 33.4 0 0 0 2.23-13M913 507.9l8.76 26.3h18.71l-9.74-28.33H917.5l-.79-2.44c2.52-.49 6.83-1.25 10.65-3.85a20 20 0 0 0 8.75-16.39 24.15 24.15 0 0 0-3.26-12.75 21.9 21.9 0 0 0-9.36-8.64 32.56 32.56 0 0 0-14.64-3h-30.43v75.4h17.06v-26.3Zm-.32-15.61a19.35 19.35 0 0 1-7.26 1.18h-9.94v-20.86h9.91a18.68 18.68 0 0 1 7.25 1.24 9.12 9.12 0 0 1 4.4 3.7 10 10 0 0 1 1.5 5.64 9.65 9.65 0 0 1-1.48 5.55 8.86 8.86 0 0 1-4.38 3.55M1048.46 458.76v14h29.3l.8 2.45c-2.48.48-6.67 1.22-10.43 3.7v55.31H1085v-61.5h19.62v-14Z" transform="translate(-666.42 -457.73)" /></svg>
                    </Link>
                </div>
                <div className='d-flex mid-nav'>
                    <li className='menu-nav_item'><NavLink to="/">Home</NavLink></li>
                    <li className='menu-nav_item'><NavLink to="/product">Product</NavLink></li>
                    <li className='menu-nav_item'><NavLink to="/about">About me</NavLink></li>
                </div>
                <div className='right-nav'>
                    <div className='search_cart'>
                        <li className='menu-nav_item cart'><NavLink to="/cart"><i className="fa-solid fa-cart-shopping"></i></NavLink></li>
                        <li className='menu-nav_item search'>
                            <form onSubmit={handleSubmit(onSubmit)} action='/search' className="align-items-center col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3 d-flex h-50">
                                <input type="search" {...register('q')} className="form-control" placeholder="Search..." aria-label="Search" autoComplete='off' />
                                <button className='h-50 btn-search'><i className="fa-solid fa-magnifying-glass"></i></button>
                            </form>
                        </li>
                    </div>
                    <div className='d-flex account'>
                        {localStorage.getItem("user") ? <div className='d-flex'>
                            <li className='menu-nav_item'><NavLink to="/admin">{JSON.parse(localStorage.getItem('user') as any).name}</NavLink></li>
                            <li className='menu-nav_item'><button onClick={logOutClick} className='btn-log-out' id="btn-log-out"><i className="fa-solid fa-arrow-right-from-bracket"></i></button></li>
                        </div>
                            :
                            <div className='d-flex'>
                                <li className='menu-nav_item'><NavLink to="/signin">Sign In</NavLink></li>
                                <li className='menu-nav_item'><NavLink to="/signup">Sign Up</NavLink></li>
                            </div>
                        }
                    </div>
                </div>
            </ul>
        </div>
    )
}

export default MenuNavLink