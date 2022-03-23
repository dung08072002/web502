import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'

type AddProductProps = {
    name?: string,
    onAdd: (product: TypeInput) => void
};
type TypeInput = {
    name: string,
    price: number
}

const AddProduct = (props : AddProductProps) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInput>();
    const onSubmit: SubmitHandler<TypeInput> = data => {
        props.onAdd(data);
        navigate("/admin/products")
    }
    return (
        <div>AddProduct
            <NavLink to="/admin/products">Back to list</NavLink>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='product name' {...register('name')} />
                <input type="number" placeholder='product price' {...register('price')} />
                <textarea></textarea>
                <button>Add</button>
            </form>
        </div>
    )
}

export default AddProduct