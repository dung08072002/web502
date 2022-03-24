import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { IProduct } from '../types/product'

type ProductManageProps = {
  products: IProduct[];
  onRemove: (id: string) => void
}

const ProductManage = (props: ProductManageProps) => {
  return (
    <div>ProductManage
      <NavLink to="/admin/products/add">Add product +</NavLink>
      <table>
        <thead>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </thead>
        <tbody>
          {props.products.map((item, index) => {
            return <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => props.onRemove(item.id)}>Remove</button>
              </td>
              <td>
                <Link to={`/admin/products/${item.id}/edit`}>Edit</Link>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductManage