import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { oneCate } from '../api/category';
import { read } from '../api/product';
import { IProduct } from '../types/product';
type props = {

}
const DetailProduct = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState<IProduct>();
    const [products, setProducts] = useState<IProduct[]>([]);
    const [cateName, setCatename] = useState<string>('');

    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(slug);
            setProduct(data);
        }
        getProduct();
    }, [slug]);
    return (
        <div>
            <div className="detail-product-id">
                <div className="left-dt">
                    <div className='dt-image'>
                        <img className="img-fluid mx-auto" src={product?.image} alt='' />
                    </div>
                </div>
                <div className="right-dt mx-auto i4-products px-20">
                    <div className="infor-dt-product">
                        <h1 className="dt-pro-name">{product?.name}</h1>
                        <p className="dt-pro-price">${product?.price}.00</p>
                    </div>
                    <div className="mt-5 flex add-cart-quantity">
                        <div className="mr-5">
                            <button className="item-btn-dt">-</button>
                            <input type="number" id="inputValue" className="item-btn-dt mid-btn" defaultValue={1} />
                            <button className="item-btn-dt">+</button>
                        </div>
                        <button id="btnAddToCart" className=''>Add to cart</button>
                    </div>
                    <div className="mt-5">
                        <h3 className="dt-pro-desc text-uppercase fw-bold">Description:</h3>
                        <p className="dt-pro-desc-main">{product?.description}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default DetailProduct