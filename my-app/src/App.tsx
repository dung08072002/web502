import { useEffect, useState } from 'react'
import { Routes, Route, NavLink, Navigate, useNavigate } from 'react-router-dom'
//Components
import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
//API
import { add, edit, list, remove } from './api/product'
import { listCate } from './api/category'
//Types
import type { IProduct } from './types/product'
import type { TypeUser } from './types/user'
import type { TypeCategory } from './types/category'
//Pages
import Home from './pages/Home'
import DetailProduct from './pages/DetailProduct'
import Dashboard from './pages/Dashboard'
import ProductManage from './pages/admin/ProductManage'
import AddProduct from './pages/admin/AddProduct'
import EditProduct from './pages/admin/EditProduct'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
//Pages - Layout
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import AdminLayout from './pages/layouts/AdminLayout'
//PrivateRouter
import PrivateRouter from './pages/PrivateRouter'

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<TypeCategory[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProducts()

    const getCategories = async () => {
      const { data } = await listCate();
      setCategories(data);
    }
    getCategories()
  },[])

  const removeItem = (id: string) => {
    remove(id);
    setProducts(products.filter(item => item._id !== id));
  }

  const onHandleAdd = async (product: IProduct) => {
    const { data } = await add(product);
    setProducts([...products, data]);
  }

  const onHandleUpdate = async (product: IProduct) => {
    const { data } = await edit(product);
    setProducts(products.map(item => item._id == data.id ? data : item));
  }

  const buttonLogOut = document.querySelector("#btn-log-out");
  if(buttonLogOut){
    buttonLogOut.addEventListener("click", () => {
      localStorage.removeItem("user");
    })
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
            <Route path="signin" element={<Signin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="About" element={<ShowInfo name="Dung" age={19} />} />
          </Route>

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" >
              <Route index element={<ProductManage category={categories} products={products} onRemove={removeItem} />} />
              <Route path="add" element={<AddProduct category={categories} onAdd={onHandleAdd} />} />
              <Route path=":id/edit" element={<EditProduct onUpdate={onHandleUpdate} />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
