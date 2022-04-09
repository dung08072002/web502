import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type AddCateProps = {
  onAddCate: (category: TypeInput) => void
}
type TypeInput = {
  name: string,
}

const AddCategory = (props: AddCateProps) => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<TypeInput>();
  const onSubmit: SubmitHandler<TypeInput> = data => {
    console.log(data);
    props.onAddCate(data);
    navigate('/admin/categories');
  }
  return (
    <div><form onSubmit={handleSubmit(onSubmit)}>
      <label className='item-form form-label text-uppercase fw-bold' htmlFor="">name category</label>
      <input type="text" autoComplete='off' className='form-control' {...register('name', { required: true })} />
      <button className='item-form btn btn-primary my-4 text-uppercase'>Add category</button>
    </form></div>
  )
}

export default AddCategory