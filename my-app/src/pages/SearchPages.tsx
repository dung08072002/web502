import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { search } from '../api/product'
import { IProduct } from '../types/product'

type SearchPageProps = {

}

const SearchPage = (props: SearchPageProps) => {
  useParams()
  const [products, setProducts] = useState<IProduct[]>([])
  const { q } = JSON.parse(localStorage.getItem('inputSearch') as string)
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await search(q);
      setProducts(data)
    }
    getProduct()
  }, [q])
  return (
    <div>
        <p>Có {products.length} kết quả tìm kiếm cho từ khóa {q}</p>
        {products.map((item, index) => {
            return (
                <div className='' key={index + 1}>
                    <div className='product'>
                        <Link to={`/products/${item.slug}`}/>
                        <img src={item.image} alt="" />
                        <Link to={`/products/${item.slug}`}>{item.name}</Link>
                        <p>{item.price}</p>
                    </div>
                </div>
            )
        })
        }
    </div>
  )
}

export default SearchPage