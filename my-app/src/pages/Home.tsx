import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { listCate } from '../api/category'
import { list } from '../api/product'
import { TypeCategory } from '../types/category'
import { IProduct } from '../types/product'


type HomeProps = {
  products: IProduct[];
}

const Home = (props: HomeProps) => {
  return (
    <div>
      <div className='banner_riot'>
        <img src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/bltd17be72ccd7ade2e/624762ed3e5d2501c8941126/2022_HMX-Rakan-Xayah_Promo_hero_2560x722.png?auto=webp&width=1519&quality=85"
          alt="" className='img-fluid' />
      </div>
      <div className='container-fluid'>
        <div className='content_product bg-white'>
          <div className="row-products">
            {props.products.map((item, index) => {
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
    </div>
  )
}

export default Home