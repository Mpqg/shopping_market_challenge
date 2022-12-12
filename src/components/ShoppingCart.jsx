function ShoppingCart({ cart, customertype, setcurrentprocess }) {
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
    return (
        <div>
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
                    {cart.map((product) => {
                        const price = customertype === "Rewards Members" ? product.memberPrice : product.regularPrice
                        return (<tr key={product.id}>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>$ {Math.round((price) * 100) /100}</td>
                            <td>$ {Math.round((price * product.quantity) * 100) / 100}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
            <div className="text_center">
            <p>TOTAL NUMBER OF ITEMS SOLD: {totalProducts}</p>
            <p>SUB-TOTAL: $ {Math.round((subtotal) * 100) / 100}</p>
            <p>TAX (6.5%):$ {Math.round((tax) * 100) / 100}</p>
            <p>TOTAL: $ {Math.round((subtotal + tax) * 100) / 100}</p>
            <button onClick={() => setcurrentprocess("Checkout")}>Proceed to Checkout</button>
            </div>
        </div >
    )
}

export default ShoppingCart;