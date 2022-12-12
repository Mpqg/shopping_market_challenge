import { useState } from 'react'
import TypeClient from './components/TypeClient'
import ListProducts from './components/ListProducts'
import ShoppingCart from './components/ShoppingCart';
import './App.css'
import Checkout from './components/Checkout';
import useProducts from './hooks/useProducts';

function App() {
  const { products } = useProducts()
  const [cart, addCart] = useState([])
  const [customerType, setCustomerType] = useState("")
  const [currentProcess, setCurrentProcess] = useState("Shopping")
  const [cash, setCash] = useState(0.00)

  if (currentProcess === "Checkout") {
    return (
      <div className="App">
        <h1 className="text_center"> Jerry's Quick Mart </h1>
        <Checkout cart={cart} customertype={customerType} addcart={addCart} setcurrentprocess={setCurrentProcess} />
      </div>
    )
  }

  return (
    <div className="App">
      <h1 className="text_center"> Jerry's Quick Mart </h1>
      <TypeClient customertype={customerType} setcustomer={setCustomerType} />
      <ListProducts 
        cart={cart}
        addcart={addCart}
        customertype={customerType}
        setcustomertype={setCustomerType}
        products={products} />
      <ShoppingCart cart={cart} customertype={customerType} setcurrentprocess={setCurrentProcess} />

    </div>
  )
}

export default App
