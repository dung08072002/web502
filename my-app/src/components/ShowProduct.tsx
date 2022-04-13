import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
type ShowProductProps = {

}

const ShowProduct = (props: ShowProductProps) => {
    return (
        <div className="row-products in_page_products">
            {/* {props.products.map((item, index) => {
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
            } */}
        </div>
    )
}

export default ShowProduct