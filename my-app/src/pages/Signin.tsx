import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { signin } from '../api/user'

type SignInProps = {
}

type TypeInput = {
    email: string,
    password: string
}

const Signin = (props: SignInProps) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInput>();
    const onSubmit: SubmitHandler<TypeInput> = async (data) => {
        // console.log(data);
        const user = await signin(data);
        localStorage.setItem("user", JSON.stringify(user.data.user));
        if (localStorage.getItem("user")) {
            const role = JSON.parse(localStorage.getItem("user") as any).role;
            console.log(role);
        }
        navigate("/")
    }
    return (
        <div className='container form-sign-in_up my-5'>
            <h1>sign in</h1>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <input className="form-control my-2" type="email" placeholder='Email' {...register('email', { required: true })} />
                <input className="form-control my-2 " type="password" placeholder='Password' {...register('password', { required: true })} />
                <button className="form-control btn-primary my-2 fw-bold" >Sign in</button>
            </form>
            <div className='other-option'>
                <Link to="#">Can't sign in ?</Link>
                <Link to="/signup">Create account</Link>
            </div>
        </div>
    )
}

export default Signin