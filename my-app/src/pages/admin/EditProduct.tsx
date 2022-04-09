import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate, NavLink, useParams } from "react-router-dom"
import { read } from '../../api/product'
import { TypeCategory } from '../../types/category'
import { IProduct } from '../../types/product'

type EditProductProps = {
    onUpdate: (product: IProduct) => void
    category: TypeCategory[]
}

type TypeInput = {
    name: string,
    price: number,
    image: string,
    category: string,
}

const EditProduct = (props: EditProductProps) => {
    const [selectedImage, setSelectedImage] = useState();
    const [preview, setPreview] = useState<string>();
    const imageChange = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };
    const navigate = useNavigate();
    const cloud_name = "assigmentjsweb501";
    const upload_preset = "lwllsryx";
    const { register, handleSubmit, formState: { errors }, reset } = useForm<TypeInput>();
    const { id } = useParams()

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            console.log(data);
            setPreview(data.image);
            reset(data);
        }
        getProduct();
    }, []);

    const onSubmit: SubmitHandler<TypeInput> = data => {
        let imgUploadedLink = "";
        const { files } = document.querySelector(".app_uploadInput");
        if (files) {
            const formData = new FormData();
            formData.append("file", files);
            formData.append("upload_preset", upload_preset);
            const options = {
                method: "POST",
                body: formData,
            };
            return fetch(`https://api.Cloudinary.com/v1_1/${cloud_name}/image/upload`, options)
                .then((res) => res.json())
                .then((res) => {
                    console.log(data);
                    props.onUpdate(data);
                    navigate("/admin/products");
                })
                .catch((err) => console.log(err));
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='item-form form-label text-uppercase fw-bold' htmlFor="">name product</label>
                <input type="text" autoComplete='off' className='form-control' {...register('name', { required: true })} />
                <label className='item-form form-label text-uppercase fw-bold' htmlFor="">price product</label>
                <input type="number" autoComplete='off' className='form-control' {...register('price', { required: true })} />
                <label className='item-form form-label text-uppercase fw-bold' htmlFor="">image product</label>
                <input type="file" accept='image/*' {...register('image')} className="app_uploadInput form-control" onChange={imageChange} />
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