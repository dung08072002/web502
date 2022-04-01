import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { TypeCategory } from '../../types/category';


type AddProductProps = {
    onAdd: (product: TypeInput) => void
    category: TypeCategory[]
};
type TypeInput = {
    name: string,
    price: number,
    image: string,
    category: string,
}

const AddProduct = (props: AddProductProps) => {
    const navigate = useNavigate();
    const cloud_name = "assigmentjsweb501";
    const upload_preset = "lwllsryx";
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInput>();
    const onSubmit: SubmitHandler<TypeInput> = data => {
        const { files } = document.querySelector(".app_uploadInput");
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", upload_preset);
        const options = {
            method: "POST",
            body: formData,
        };
        return fetch(`https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`, options)
            .then((res) => res.json())
            .then((res) => {
                // console.log(res.url) 
                // console.log(data)
                console.log({ ...data, image: res.url })
                props.onAdd({ ...data, image: res.url });
                navigate("/admin/products");
            })
            .catch((err) => console.log(err));
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder='product name' {...register('name', { required: true })} />
                <input type="number" placeholder='product price' {...register('price')} />
                <input type="file" {...register('image')} className="app_uploadInput" />
                <select {...register('category')}>
                    <option selected defaultValue={0} disabled>Chon danh muc</option>
                    {
                        props.category.map(item => {
                            return <option value={item._id}>{item.name}</option>
                        })
                    }
                </select>
                <button>Add</button>
            </form>
        </div>

    )
}

export default AddProduct