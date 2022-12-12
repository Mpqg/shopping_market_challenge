import { useState } from 'react'
import TypeClient from './components/TypeClient'
import ListProducts from './components/ListProducts'
import ShoppingCart from './components/ShoppingCart';
import './App.css'
import Checkout from './components/Checkout';
import useProducts from './hooks/useProducts';
import useCart from './hooks/useCart';

function App() {
  const { cart, decreaseQuantity, addToCart, emptyCart, getCartLength, increaseQuantity, removeFromCart } = useCart()
  const { products } = useProducts()
  const [customerType, setCustomerType] = useState("")
  const [currentProcess, setCurrentProcess] = useState("Shopping")
  const [cash, setCash] = useState(0.00)

  if (currentProcess === "Checkout") {
    return (
      <div className="App">
        <h1 className="text_center"> Jerry's Quick Mart </h1>
        <Checkout cart={cart} customertype={customerType} addcart={addToCart} setcurrentprocess={setCurrentProcess} />
      </div>
    )
  }

  return (
    <div className="App">
      <h1 className="text_center"> Jerry's Quick Mart </h1>
      <TypeClient customertype={customerType} setcustomer={setCustomerType} />
      <ListProducts
        cart={cart}
        addcart={addToCart}
        customertype={customerType}
        setcustomertype={setCustomerType}
        products={products}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeFromCart={removeFromCart}
        emptyCart={emptyCart}
        getCartLength={getCartLength}
      />
      <ShoppingCart cart={cart} customertype={customerType} setcurrentprocess={setCurrentProcess} />

    </div>
  )
}

export default App
