import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IProduct } from '../../types/product'
import { Table, Tag, Space } from 'antd';
import { TypeCategory } from '../../types/category';
import { listCate } from '../../api/category';

type ProductManageProps = {
  products: IProduct[];
  onRemove: (id: any) => void
  category: TypeCategory[];
}

const columns = [
  {
    title: 'Number',
    dataIndex: 'number',
    key: 'number'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action'
  },
]

const ProductManage = (props: ProductManageProps) => {
  useEffect(() => {
    const getCategory = 
  }, [])
  const dataSource = props.products.map((item, index) => {
    return {
      key: index + 1,
      number: index + 1,
      name: item.name,
      image: <div><img src={item.image} width={100} alt="" /></div>,
      price: item.price,
      category: item.category,
      action: <div><button onClick={() => props.onRemove(item._id)}>Delete</button><button><Link to={`/admin/products/${item.slug}/edit`}>Edit</Link></button></div>
    }
  })

  return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  )
}

export default ProductManage