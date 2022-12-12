import "./ListProducts.css"
import Product from './Product'
function ListProducts({ cart, addcart, customertype, setcustomertype, products }) {
    const totalProducts = cart.reduce((acc, product) => {
        return acc + product.quantity
    }, 0);
function emptycart() {
    addcart([]);
}
    return (
        <div>
            <h2 className="text_center">List of products</h2>
            <table align='center'>
                <thead>
                    <tr>
                        {/* <th>PHOTO</th> */}
                        <th>ITEM</th>
                        <th>STOCK</th>
                        <th>PRICE</th>
                        <th>
                            <img src="/icons8-carrito-de-compras-30.png" alt="" />{totalProducts}
                            <img className="emptycart" src="/trash.png" alt="" width={30} onClick={emptycart}/>

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => {
                        return <Product
                            key={product.id}
                            cart={cart}
                            customertype={customertype}
                            product={product}
                            addcart={addcart}
                        />
                    })}
                </tbody>
            </table>

        </div>
    )
}
export default ListProducts;

