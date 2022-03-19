import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { read } from '../api/product';
import { IProduct } from '../types/product';

const DetailProduct = () => {
    console.log(useParams())
    const { id } = useParams();
    const [product, setProduct] = useState<IProduct>();

    useEffect(() => { //Call api
        const getProduct = async () => {
            const { data } = await read(id);
            console.log('data', data)
            setProduct(data);
        }
        getProduct();
    }, [id]); //Nếu id trên đường dẫn thay đổi thì thực hiện lại call api
    return (
        <div>{product?.name}</div>
    )
}

export default DetailProduct