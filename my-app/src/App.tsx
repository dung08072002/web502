import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import './App.css'
import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import { list, remove } from './api/product'
import { IProduct } from './types/product'
import Home from './pages/Home'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import ProductManage from './pages/layouts/ProductManage'

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProducts()
  }, [])

  // const removeItem = (id: number) => {
  //   remove(id);
  //   setProducts(products.filter(item => item._id !== id));
  // }

  return (
    <div className="App">
      <header>
        <ul className="list-group">
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product Page</NavLink>
          </li>
          <li>
            <NavLink to="/about">About me</NavLink>
          </li>
        </ul>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Home />}/>
            <Route path="product" element={<h1>Product Page</h1>}/>
            <Route path="About" element={<ShowInfo name="DUNG" age={19}/>}/>
          </Route>
          
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />}/>
            <Route path="products" element={<ProductManage />}/>
          </Route>
        </Routes>
      </main>

    </div>
  )
}

export default App
