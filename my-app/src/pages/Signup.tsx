import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { signup } from '../api/user'
import { TypeUser } from '../types/user'

type SignUpProps = {
}

type TypeInput = {
  name: string,
  email: string,
  password: string
}


const Signup = (props: SignUpProps) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<TypeInput>();
  const onSubmit: SubmitHandler<TypeInput> = (data) => {
    console.log(data);
    signup(data);
    navigate('/signin')
  }
  return (
    <div>Signup
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <input type="text" placeholder='name' {...register('name', { required: true })} />
        <input type="email" placeholder='email' {...register('email', { required: true })} />
        <input type="password" placeholder='password' {...register('password', { required: true })} />
        <button>Sign up</button>
      </form>
    </div>
  )
}

export default Signup