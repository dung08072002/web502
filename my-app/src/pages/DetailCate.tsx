import React, { useEffect, useState } from 'react'
import { TypeCategory } from '../types/category';
import { IProduct } from '../types/product';
import { NavLink, useParams, Link, Outlet } from 'react-router-dom';
import { listCate, oneCate } from '../api/category';
import AsidePageProduct from '../components/AsidePageProduct';

type Props = {}

const DetailCate = (props: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const { slug } = useParams();
  // console.log(slug)
  useEffect(() => {
    const getProductByCate = async () => {
      const { data } = await oneCate(slug);
      console.log(data);
      setProducts(data.products);
    }
    getProductByCate();
  }, [slug])
  return (
    <div>
      <div>
        <img src="https://images.contentstack.io/v3/assets/blt5bbf09732528de36/blt468e6836c084f555/607f3db36371c75a11ad9fc4/plp_Ekko_banner_1617x365.jpg.jpg?auto=webp&width=1519&quality=85" alt="" className='img-fluid' />
      </div>
      <div className='container-fluid product-page'>
        <AsidePageProduct />
        <div className='content_product pro-page bg-white'>
          <div className='sort-option'>
            <span>Shop by category</span>
            <span>Sort by <i className="fa-solid fa-angle-down"></i></span>
          </div>
          <div className="row-products in_page_products">
            {products.map((item, index) => {
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

export default DetailCate