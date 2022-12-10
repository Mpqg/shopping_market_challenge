import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [cart, addCart] = useState([])
  const [quantity, setQuantity] = useState(0)
  const [customerType, setCustomerType] = useState("Regular")
  const [currentProcess, setCurrentProcess] = useState("Shopping")
  const [cash, setCash] = useState(0.00)

  return (
    <div className="App">
      <h1 className="text_center"> Jerry's Quick Mart </h1>
      <h2>Type of client</h2>
      <p>Rewards Members <input type="checkbox" /></p>
      <p>Regular Customer <input type="checkbox" /></p>
      <h2 className="text_center">List of products</h2>
      <button>Empty Cart</button>
      <img src="/icons8-carrito-de-compras-30.png" alt="" />
      <table align='center'>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Product</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="/icons8-carrito-de-compras-30.png" alt="" /></td>
            <td>Eggs</td>
            <td>2.00</td>
            <td>add to cart</td>
          </tr>
          <tr>
            <td><img src="/icons8-carrito-de-compras-30.png" alt="" /></td>
            <td>Milk</td>
            <td>1.00</td>
            <td>add to cart</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text_center">Shopping Cart</h2>
      <h2 className="text_center">Checkout</h2>
    </div>
  )
}

export default App
