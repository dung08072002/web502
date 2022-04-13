import React, { useEffect, useState } from 'react'
import { NavLink, Link, Navigate } from 'react-router-dom'
import { listCate } from '../api/category';
import { TypeCategory } from '../types/category';

type Props = {}

const AsidePageProduct = (props: Props) => {
    const [categories, setCategories] = useState<TypeCategory[]>([]);

    useEffect(() => {
      const getCategories = async () => {
        const { data } = await listCate();
        setCategories(data);
        console.log(data);
      }
      getCategories();
    }, [])
    return (
        <div className='left-pages'>
            <aside className=''>
                <span className='text-uppercase category-aside'>category</span>
                <div>
                    {
                        categories.map((item, index) => {
                            return (
                                <div className='item-cate' key={index + 1}>
                                    <Link className='' to={`/category/${item.slug}`}>{item.name}</Link>
                                </div>
                            )
                        })
                    }
                </div>
            </aside>
        </div>
    )
}

export default AsidePageProduct