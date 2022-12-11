
function ShoppingCart({ cart, customertype }) {
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
            <p>TOTAL NUMBER OF ITEMS SOLD: 6</p>
            <p>SUB-TOTAL: $17.75</p>
            <p>TAX (6.5%): $1.78</p>
            <p>TOTAL: $19.53</p>
            <button>Proceed to Checkout</button>
        </div >
    )
}

export default ShoppingCart;