import React, { useEffect } from 'react'
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
        if(localStorage.getItem("user")){
            const role = JSON.parse(localStorage.getItem("user")).role;
            console.log(role);
        }
        navigate("/")
    }
    return (
        <div>Signin
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <input type="email" placeholder='email' {...register('email', { required: true })} />
                <input type="password" placeholder='password' {...register('password', { required: true })} />
                <button>Sign in</button>
            </form>
        </div>
    )
}

export default Signin