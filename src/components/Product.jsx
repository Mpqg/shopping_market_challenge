import React, { useState } from 'react'
function Product({ cart, product, customertype, addcart }) {
    const [quantity, setQuantity] = useState(1)
    const price = customertype === "Rewards Members" ? product.memberPrice : product.regularPrice
    const isInCart = cart.find((item) => item.id === product.id)

    const addProduct = (productId) => {
        const updatedCart = cart.map((product)=> {
            if (product.id == productId) {
                product.quantity++
            }
            return (product);
        })
        addcart(updatedCart);
     }
     const addProductBag = (product) => {
        product.quantity = 1;
        addcart([...cart, product])
     }
    const removeProduct = (productId) => {
        let shouldRemoveProduct =  false
        let updatedCart = cart.map((product)=> {
            if (product.id == productId) {
                product.quantity--
                if (product.quantity === 0) {
                    shouldRemoveProduct = true
                }
            }
            return (product);
        })
        if (shouldRemoveProduct) {
            updatedCart = updatedCart.filter((product) => product.id !== productId)
        }
        addcart(updatedCart);
    }

    return (
        <tr>
            {/* <td><img src={product.photo} alt="" width={80} /></td> */}
            <td>{product.name}</td>
            <td>{product.inventory - (product.quantity || 0)}</td>
            <td>${price}</td>

            <td>
                {isInCart ? (
                    <div>
                        <button
                            disabled={product.quantity === 0}
                            onClick={() => removeProduct(product.id)}
                        >
                            -
                        </button> {product.quantity}
                        <button
                            disabled={product.stock === product.quantity}
                            onClick={() => addProduct(product.id)}
                        >
                            +
                        </button>
                    </div>
                )
                    : (
                        <button
                            onClick={() => addProductBag(product)}
                        >
                            add to cart
                        </button>
                    )
                }
            </td>
        </tr>
    )

}
export default Product;