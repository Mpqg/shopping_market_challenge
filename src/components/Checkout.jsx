import "./Checkout.css"
import { useState } from 'react'
import listProducts from '../data/products.json'
function Checkout({ cart, customertype, addcart }) {
    const [cash, setCash] = useState(0.00)
    const totalProducts = cart.reduce((acc, product) => {
        return acc + product.quantity
    }, 0)
    const subtotal = cart.reduce((acc, product) => {
        const price = customertype === "Rewards Members" ? product.memberPrice : product.regularPrice
        return acc + (price * product.quantity)
    }, 0)
    const tax = cart.reduce((acc, product) => {
        const price = customertype === "Rewards Members" ? product.memberPrice : product.regularPrice
        const istaxable = product.taxStatus === "Taxable"
        return acc + (price * product.quantity * 0.065 * istaxable)
    }, 0)
    const saving = cart.reduce((acc, product) => {
        const price = customertype === "Rewards Members"
            ? product.regularPrice - product.memberPrice
            : 0
        return acc + (price * product.quantity)
    }, 0)
    function emptycart() {
        addcart([]);
    }
    return (
        <div>
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
                    {cart.map((product) => {
                        const price = customertype === "Rewards Members" ? product.memberPrice : product.regularPrice
                        return (<tr key={product.id}>
                            <td>{product.productName}</td>
                            <td>{product.quantity}</td>
                            <td>{price}</td>
                            <td>{price * product.quantity}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
            <div className="text_center">
            <p>TOTAL NUMBER OF ITEMS SOLD: {totalProducts}</p>
            <p>SUB-TOTAL: $ {subtotal}</p>
            <p>TAX (6.5%):$ {tax}</p>
            <p>TOTAL: $ {subtotal + tax}</p>
            <p>CASH: $ <input type="number" value={cash} onChange={(event) => setCash(event.target.value)} /></p>
            <p>CHANGE: $ {cash - (subtotal + tax)}</p>
            <p>YOU SAVED: $ {saving}</p>
            <button className="checkout">Checkout</button>
            <button onClick={emptycart}>Cancel</button>
            </div>
        </div >
    )
}

export default Checkout;