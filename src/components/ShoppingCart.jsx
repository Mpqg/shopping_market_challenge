
function ShoppingCart({ cart, customertype }) {
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
                            <td>{product.productName}</td>
                            <td>{product.quantity}</td>
                            <td>{price}</td>
                            <td>{price * product.quantity}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
            <p>TOTAL NUMBER OF ITEMS SOLD: {totalProducts}</p>
            <p>SUB-TOTAL: $ {subtotal}</p>
            <p>TAX (6.5%):$ {tax}</p>
            <p>TOTAL: $ {subtotal + tax}</p>
            <button>Proceed to Checkout</button>
        </div >
    )
}

export default ShoppingCart;