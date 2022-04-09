import React, { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IProduct } from '../../types/product'
import { Table, Tag, Space } from 'antd';
import { TypeCategory } from '../../types/category';
import { listCate } from '../../api/category';
import { Button, Menu, Dropdown } from 'antd';

type CategoryManagerProps = {
  onRemoveCate: (slug: any) => void
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
    key: 'name'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action'
  }
]

const CategoryManager = (props: CategoryManagerProps) => {
  const dataSource = props.category.map((item, index) => {
    return {
      key: index + 1,
      number: index + 1,
      name: item.name,
      action: <div>
        <Button className='button-action' onClick={() => props.onRemoveCate(item.slug)} type="primary" danger size='large'>Delete</Button>
        <Button className='button-action' type="primary" size='large'><Link to={`/admin/categories/${item.slug}/edit`}>Edit</Link></Button>
      </div>
    }
  })
  return (
    <div>
      <Table columns={columns} dataSource={dataSource}/>
    </div>
  )
}

export default CategoryManager