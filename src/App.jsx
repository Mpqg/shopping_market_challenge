import { useState } from 'react'
import listProducts from './data/products.json'
import TypeClient from './components/TypeClient'
import ListProducts from './components/ListProducts'
import ShoppingCart from './components/ShoppingCart';
import './App.css'
import Checkout from './components/Checkout';

function App() {
  const [cart, addCart] = useState([])
  const [customerType, setCustomerType] = useState("")
  const [currentProcess, setCurrentProcess] = useState("Shopping")
  const [cash, setCash] = useState(0.00)

  return (
    <div className="App">
      <h1 className="text_center"> Jerry's Quick Mart </h1>
      <TypeClient customertype={customerType} setcustomer={setCustomerType}/>
      <ListProducts cart={cart} addcart={addCart} customertype={customerType} setcustomertype={setCustomerType}/>
      <ShoppingCart cart={cart} customertype={customerType}/>
      <Checkout cart={cart} customertype={customerType} addcart={addCart}/>

    </div>
  )
}

export default App
