import { useRef, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Showinfo from './components/Showinfo'

function App() {
  // const products = [
  //   {id: 1, name: "a"},
  //   {id: 2, name: "b"},
  //   {id: 3, name: "c"},
  // ]

  const [products, setProducts] = useState([
    {id: 1, name: "A"},
    {id: 2, name: "B"},
    {id: 3, name: "C"},
    {id: 4, name: "D"},
    {id: 5, name: "E"},
    {id: 6, name: "F"},
  ]);
  const [name, setName] = useState("Dung")
  const [status, setStatus] = useState(false);

  return (
    <div>
      {name} <button onClick={() => setName("Dungne")}>ChangeName</button>
      <hr></hr>
      <button onClick={() => setStatus(!status)}>Toggled</button>
      {status ? products.map((item, index) => <div key={index}>{item.name}</div>) : ""}
      <Showinfo name="dung" />
      <Showinfo name="dungne" />
    </div>
    )
}

export default App
