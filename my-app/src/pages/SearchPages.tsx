import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { search } from '../api/product'
import { IProduct } from '../types/product'

type SearchPageProps = {

}

const SearchPage = (props: SearchPageProps) => {
  useParams()
  const [productResult, setProductResult] = useState<IProduct[]>([])
  const { q } = JSON.parse(localStorage.getItem('inputSearch') as any)
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await search(q);
      setProductResult(data)
    }
    getProduct()
  }, [q])
  return (
    <div className='container-fluid'>
      <div className='content_product bg-white'>
        <p className='text-uppercase fw-bold fs-3 d-block'>Have {productResult.length} search results for keyword "{q}"</p>
        <div className="row-products">
          {productResult.map((item, index) => {
            return (
              <div className='column_product' key={index + 1}>
                <div className="img-product">
                  <Link to={`/product/${item.slug}`}>
                    <img src={item.image} alt="" className='img-fluid' />
                  </Link>
                </div>
                <div className="details-product dt_pr_1">
                  <span className="dis_block product-name">{item.name}</span>
                  <span className="dis_block product-price">${item.price}.00</span>
                  <Link to={`/product/${item.slug}`} className="add-to-cart">view detail</Link>
                </div>
              </div>
            )
          })
          }
        </div>
      </div>
    </div>
  )
}

export default SearchPage