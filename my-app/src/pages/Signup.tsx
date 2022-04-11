import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate, Link } from 'react-router-dom'
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
    <div className='container form-sign-in_up my-5'>
      <h1>sign up</h1>
      <form onSubmit={handleSubmit(onSubmit)} action="">
        <input className="form-control my-2" type="text" placeholder='Name' {...register('name', { required: true })} />
        <input className="form-control my-2" type="email" placeholder='Email' {...register('email', { required: true })} />
        <input className="form-control my-2" type="password" placeholder='Password' {...register('password', { required: true })} />
        <button className="form-control btn-primary my-2 fw-bold">Sign up</button>
      </form>
      <div className='other-option'>
        <Link to="/signin">Already registered?</Link>
      </div>
    </div>
  )
}

export default Signup