import React, { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import { TypeCategory } from '../../types/category';
import { Image } from 'antd';
import { Select } from 'antd';

const { Option } = Select;


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
    const [selectedImage, setSelectedImage] = useState();
    const imageChange = (e: any) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
    };
    const removeSelectedImage = () => {
        setSelectedImage();
    };

    function onChange(value : any) {
        console.log(`selected ${value}`);
    }

    function onSearch(val: any) {
        console.log('search:', val);
    }


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
        <div className='form-style'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className='item-form' htmlFor="">
                    <p>product name</p>
                    <input type="text" autoComplete='off' {...register('name', { required: true })} />
                </label>
                <label className='item-form' htmlFor="">
                    <p>product price</p>
                    <input type="number" autoComplete='off' {...register('price')} />
                </label>
                <label className='item-form' htmlFor="">
                    <p>product image</p>
                    <input type="file" accept='image/*'
                        {...register('image')} className="app_uploadInput" onChange={imageChange} />
                </label>
                <label className='item-form' htmlFor="">
                    <p>category</p>

                    <Select
                        showSearch
                        placeholder="Select category"
                        optionFilterProp="children"
                        onChange={onChange}
                        onSearch={onSearch}
                        filterOption={(input, option : any) =>
                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        }
                        {...register('category')}
                    >
                        {
                            props.category.map(item => {
                                return <Option value={item._id}>{item.name}</Option>
                            })
                        }
                    </Select>
                </label>
                <button className='item-form'>Add</button>
            </form>
            <div className='previewImage'>
                {selectedImage && (
                    <Image.PreviewGroup>
                        <Image id='pic' width={200} src={URL.createObjectURL(selectedImage)} alt='thumb' />
                        <button onClick={removeSelectedImage}>
                            Remove This Image
                        </button>
                    </Image.PreviewGroup>
                )}
            </div>
        </div>

    )
}

export default AddProduct