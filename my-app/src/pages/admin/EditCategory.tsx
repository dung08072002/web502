import React, { useEffect } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { useNavigate, useParams } from 'react-router-dom'
import { oneCate } from '../../api/category'
import { TypeCategory } from '../../types/category'

type EditCateProps = {
  onUpdateCate: (category: TypeCategory) => void
}

type TypeInput = {
  name: string,
}

const EditCategory = (props: EditCateProps) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TypeInput>();
  const { slug } = useParams();
  useEffect(() => {
    const getCate = async () => {
      const { data } = await oneCate(slug);
      console.log(data)
      reset(data.category);
    }
    getCate();
  }, [])
  const onSubmit: SubmitHandler<TypeInput> = data => {
    // console.log(data);
    // console.log(slug);
    props.onUpdateCate(data);
    navigate('/admin/categories')
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='item-form form-label text-uppercase fw-bold' htmlFor="">name category</label>
        <input type="text" autoComplete='off' className='form-control' {...register('name', { required: true })} />
        <button className='item-form btn btn-primary my-4 text-uppercase'>Edit category</button>
      </form>
    </div>
  )
}

export default EditCategory