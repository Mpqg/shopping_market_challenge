import { useState } from 'react'
import listProducts from './data/products.json'
import TypeClient from './components/TypeClient'
import ListProducts from './components/ListProducts'
import ShoppingCart from './components/ShoppingCart';
import './App.css'

function App() {
  const [cart, addCart] = useState([])
  const [customerType, setCustomerType] = useState("Rewards Members")
  const [currentProcess, setCurrentProcess] = useState("Shopping")
  const [cash, setCash] = useState(0.00)

  return (
    <div className="App">
      <h1 className="text_center"> Jerry's Quick Mart </h1>
      <TypeClient customertype={customerType} setcustomer={setCustomerType}/>
      <ListProducts cart={cart} addcart={addCart} customertype={customerType}/>
      <ShoppingCart cart={cart} customertype={customerType}/>
      <h2 className="text_center">Checkout</h2>

      <table align='center'>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>QUANTITY</th>
            <th>UNIT PRICE</th>
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Milk</td>
            <td>2</td>
            <td>$3.50</td>
            <td>$7.00</td>
          </tr>
          <tr>
            <td>Red Bull</td>
            <td>3</td>
            <td>$4.00</td>
            <td>$12.00</td>
          </tr>
          <tr>
            <td>Flour</td>
            <td>1</td>
            <td>$2.75</td>
            <td>$2.75</td>
          </tr>
        </tbody>
      </table>
      <p>TOTAL NUMBER OF ITEMS SOLD: 6</p>
      <p>SUB-TOTAL: $17.75</p>
      <p>TAX (6.5%): $1.78</p>
      <p>TOTAL: $19.53</p>
      <p>CASH: <input type="text" /></p>
      <p>CHANGE: $0.00</p>
      <p>YOU SAVED: $1.75!</p>
      <button>Checkout</button>
      <button>Cancel</button>


    </div>
  )
}

export default App
