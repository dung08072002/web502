import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes, Route, NavLink } from 'react-router-dom'
import ShowInfo from './components/ShowInfo'
import Product from './components/Product'
import { list, remove } from './api/product'
import { IProduct } from './types/product'

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    };
    getProducts()
  }, [])

  const removeItem = (id: number) => {
    remove(id);
    setProducts(products.filter(item => item._id !== id));
  }

  return (
    <div className="App">
      {products.map(item => {
        return <div>{item.name} <button onClick={() => removeItem(item._id)}>Remove</button></div>
      })}

      <header>
        <ul>
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/product">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/about">Home Page</NavLink>
          </li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/product" element={products.map(item => <div>{item.name}</div>)} />
          <Route path="/about" element={<ShowInfo name="DUNGNV" age={19}/>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
