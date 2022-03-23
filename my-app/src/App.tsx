import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import './App.css'
import axios from 'axios'
//Components
import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
//API
import { add, list, remove } from './api/product'
//Types
import type { IProduct } from './types/product'
//Pages
import Home from './pages/Home'
import DetailProduct from './pages/DetailProduct'
import Dashboard from './pages/Dashboard'
import ProductManage from './pages/ProductManage'
import AddProduct from './pages/admin/AddProduct'
//Pages - Layout
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProducts()
  }, [])

  const removeItem = (id: string) => {
    remove(id);
    setProducts(products.filter(item => item._id !== id));
  }

  const onHandleAdd = async (product: IProduct) => {
    const {data} = await add(product);
    setProducts([...products, data]);
  }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Home />} />
            <Route path="product">
              <Route index element={<h1>Product Page</h1>} />
              <Route path=":id" element={<DetailProduct />} />
            </Route>
            <Route path="categories">
            </Route>
            <Route path="About" element={<ShowInfo name="DUNG" age={19} />} />
          </Route>
          
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" >
              <Route index element={<ProductManage products={products} onRemove={removeItem}/>}/>
              <Route path="add" element={<AddProduct onAdd={onHandleAdd} />}/>
            </Route>
          </Route>
        </Routes>
      </main>

    </div>
  )
}

export default App
