import "./ListProducts.css"
import Product from './Product'
import listProducts from '../data/products.json'
function ListProducts({ cart, addcart, customertype }) {
    return (
        <div>
            <h2 className="text_center">List of products</h2>
            <table align='center'>
                <thead>
                    <tr>
                        <th>PHOTO</th>
                        <th>ITEM</th>
                        <th>STOCK</th>
                        <th>PRICE</th>
                        <th>
                            <img src="/icons8-carrito-de-compras-30.png" alt="" />{cart.length}
                            <img className="emptycart" src="/trash.png" alt="" width={30} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {listProducts.map((product) => {
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

