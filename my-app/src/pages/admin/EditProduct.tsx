import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate, NavLink, useParams } from "react-router-dom"
import { read } from '../../api/product'
import { TypeCategory } from '../../types/category'
import { IProduct } from '../../types/product'
import { Image } from 'antd';
import axios from 'axios'


type EditProductProps = {
    onUpdate: (product: IProduct) => void
    category: TypeCategory[]
}

type TypeInput = {
    name: string,
    price: number,
    image: string,
    description: string,
    category: string,
}

const EditProduct = (props: EditProductProps) => {
    const [selectedImage, setSelectedImage] = useState();
    const [image, setImage] = useState<string>('')
    
    const imageLast = document.querySelector('#pic');
    imageLast?.addEventListener('change', (e : any) => {
        setImage(URL.createObjectURL(e.target?.files[0]))
    })

    const navigate = useNavigate();
    const cloud_name = "assigmentjsweb501";
    const CLOUDINARY_PRESET = "lwllsryx";
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TypeInput>();
    const { slug } = useParams()
    // console.log(slug)
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(slug);
            // console.log(data);
            setImage(data.image);
            reset(data);
        }
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<TypeInput> = async (data) => {
        console.log(data);
        const file = data.image[0];
        if(data.image == image){
            props.onUpdate(data);
        }
        if(data.image != image){
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            const res = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                }
            })
            props.onUpdate({...data, image: res.data.url})
        }
        navigate('/admin/products');
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='item-form form-label text-uppercase fw-bold' htmlFor="">name product</label>
                <input type="text" autoComplete='off' className='form-control' {...register('name', { required: true })} />
                <label className='item-form form-label text-uppercase fw-bold' htmlFor="">price product</label>
                <input type="number" autoComplete='off' className='form-control' {...register('price', { required: true })} />
                <label className='item-form form-label text-uppercase fw-bold' htmlFor="">image product</label>
                <input id='pic' type="file" accept='image/*' {...register('image')} className="app_uploadInput form-control" />
                <div className='previewImage my-4'>
                        <Image.PreviewGroup>
                            <Image width={200} src={image} alt='thumb' />
                        </Image.PreviewGroup>
                </div>
                <label className='item-form form-label text-uppercase fw-bold' htmlFor="">Select category</label>
                <select className='form-control' {...register('category', { required: true })}>
                    <option defaultValue={0} disabled selected className='text-uppercase'>SELECT CATEGORY</option>
                    {
                        props.category.map(item => {
                            return <option value={item._id}>{item.name}</option>
                        })
                    }
                </select>
                <button className='item-form btn btn-primary my-4 text-uppercase'>Edit product</button>
            </form>
        </div>
    )
}

export default EditProduct