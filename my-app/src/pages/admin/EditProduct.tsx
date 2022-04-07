import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate, NavLink, useParams } from "react-router-dom"
import { read } from '../../api/product'
import { IProduct } from '../../types/product'

type EditProductProps = {
    onUpdate: (product: IProduct) => void
}

type TypeInput = {
    name: string,
    price: number
}

const EditProduct = (props: EditProductProps) => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TypeInput>();
    const { id } = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            console.log(data);
            reset(data);
        }
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<TypeInput> = data => {
        console.log(data);
        props.onUpdate(data);
        navigate("/admin/products")
    }

    return (
        <div>EditProduct
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register('name', { required: true })} />
                <input type="number" {...register('price', { required: true })} />
                <button>Edit</button>
            </form>
        </div>
    )
}

export default EditProduct