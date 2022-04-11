import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { TypeCategory } from '../../types/category';
import { Image } from 'antd';

type AddProductProps = {
    onAdd: (product: TypeInput) => void
    category: TypeCategory[]
};
type TypeInput = {
    name: string,
    price: number,
    image: string,
    description: string,
    category: string,
}

const AddProduct = (props: AddProductProps) => {
    const [selectedImage, setSelectedImage] = useState();
    const imageChange = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };
    const navigate = useNavigate();
    const cloud_name = "assigmentjsweb501";
    const upload_preset = "lwllsryx";
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInput>();
    const onSubmit: SubmitHandler<TypeInput> = data => {
        const { files } : any = document.querySelector(".app_uploadInput");
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
        <div className='form-style'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='item-form form-label text-uppercase fw-bold' htmlFor="">name product</label>
                <input type="text" autoComplete='off' className='form-control' {...register('name', { required: true })} />
                <label className='item-form form-label text-uppercase fw-bold' htmlFor="">price product</label>
                <input type="number" autoComplete='off' className='form-control' {...register('price', { required: true })} />
                <label className='item-form form-label text-uppercase fw-bold' htmlFor="">image product</label>
                <input type="file" accept='image/*'
                    {...register('image')} className="app_uploadInput form-control" onChange={imageChange} />
                <div className='previewImage my-4'>
                    {selectedImage && (
                        <Image.PreviewGroup>
                            <Image id='pic' width={200} src={URL.createObjectURL(selectedImage)} alt='thumb' />
                        </Image.PreviewGroup>
                    )}
                </div>
                <label className='item-form form-label text-uppercase fw-bold' htmlFor="">description product</label>
                <textarea className='form-control' {...register('description')}></textarea>
                <label className='item-form form-label text-uppercase fw-bold' htmlFor="">Select category</label>
                <select className='form-control' {...register('category', { required: true })}>
                    <option defaultValue={0} disabled selected className='text-uppercase'>SELECT CATEGORY</option>
                    {
                        props.category.map(item => {
                            return <option value={item._id}>{item.name}</option>
                        })
                    }
                </select>
                <button className='item-form btn btn-primary my-4 text-uppercase'>Add product</button>
            </form>
        </div>

    )
}

export default AddProduct