import "./Checkout.css"
import { useState } from 'react'
import generateReceipt from "../utils/generateReceipt"
function Checkout({ cart, customertype, addcart, setcurrentprocess }) {
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
        if (istaxable) {
            return acc + (price * product.quantity * 0.065)
        }
        return acc
    }, 0)
    const saving = cart.reduce((acc, product) => {
        const price = customertype === "Rewards Members"
            ? product.regularPrice - product.memberPrice
            : 0
        return acc + (price * product.quantity)
    }, 0)
    function emptycart() {
        addcart([])
        setcurrentprocess("ShoppingCart")
    }
    function checkout() {
        alert(generateReceipt(cart,{
            totalQuantity: totalProducts,
            subtotal: subtotal,
            tax: tax,
            total: (subtotal + tax),
            cash: cash,
            change: cash - (subtotal + tax),
            saving: saving,
            customertype: customertype

        }).receipt)
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
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{price}</td>
                            <td>{Math.round((price * product.quantity) * 100) / 100}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
            <div className="text_center">
                <p>TOTAL NUMBER OF ITEMS SOLD: {totalProducts}</p>
                <p>SUB-TOTAL: $ {Math.round((subtotal) * 100) / 100}</p>
                <p>TAX (6.5%):$ {Math.round ((tax) * 100) / 100}</p>
                <p>TOTAL: $ {Math.round((subtotal + tax) * 100) / 100}</p>
                <p>CASH: $ <input type="number" value={cash} onChange={(event) => setCash(event.target.value)} /></p>
                <p>CHANGE: $ {Math.round((cash - (subtotal + tax)) * 100) / 100}</p>
                <p>YOU SAVED: $ {Math.round((saving) * 100) / 100}</p>
                <button className="checkout" onClick={checkout}>Checkout</button>
                <button onClick={emptycart}>Cancel</button>
            </div>
        </div >
    )
}

export default Checkout;