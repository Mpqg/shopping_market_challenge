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
      <table align='center'>
        <thead>
          <tr>
            <th>PHOTO</th>
            <th>ITEM</th>
            <th>PRICE</th>
            <th><img src="/icons8-carrito-de-compras-30.png" alt="" />{quantity}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><img src="/icons8-botella-de-leche-100.png" alt="" /></td>
            <td>Milk</td>
            <td>$3.50</td>
            <td><button>add to cart</button></td>
          </tr>
          <tr>
            <td><img src="/soda.png" alt="" width={80} /></td>
            <td>Red Bull</td>
            <td>$4.00</td>
            <td><button>add to cart</button></td>
          </tr>
          <tr>
            <td><img src="/wheat.png" alt="" width={60} /></td>
            <td>Flour</td>
            <td>$2.75</td>
            <td><button>add to cart</button></td>
          </tr>
        </tbody>
      </table>

      <h2 className="text_center">Shopping Cart</h2>
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
            <td><button type='button'>+</button> 2 <button>-</button></td>
            <td>$3.50</td>
            <td>$7.00</td>
          </tr>
          <tr>
            <td>Red Bull</td>
            <td><button className='add'>+</button> num <button className='less'>-</button></td>
            <script>
            let buttonAdd = document.querySelector('.add');
            let buttonLess = document.querySelector('.less');
            let num = <document className="getElementById"></document>;
            
            </script>
            
            <td>$4.00</td>
            <td>$12.00</td>
          </tr>
          <tr>
            <td>Flour</td>
            <td><button>+</button> 1 <button>-</button></td>
            <td>$2.75</td>
            <td>$2.75</td>
          </tr>
        </tbody>
      </table>
      <p>TOTAL NUMBER OF ITEMS SOLD: 6</p>
      <p>SUB-TOTAL: $17.75</p>
      <p>TAX (6.5%): $1.78</p>
      <p>TOTAL: $19.53</p>
      <button>Proceed to Checkout</button>

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
