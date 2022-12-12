import React, { useState } from 'react'
function Product({ cart, product, customertype, addcart, increaseQuantity, decreaseQuantity, removeFromCart }) {
    const price = customertype === "Rewards Members" ? product.memberPrice : product.regularPrice
    const productInCart = cart.find((item) => item.id === product.id)


    return (
        <tr>
            {/* <td><img src={product.photo} alt="" width={80} /></td> */}
            <td>{product.name}</td>
            <td>{product.inventory - ((productInCart ? productInCart.quantity: 0) || 0)}</td>
            <td>${price}</td>

            <td>
                {productInCart ? (
                    <div>
                        <button
                            disabled={productInCart.quantity === 0}
                            onClick={() => decreaseQuantity(product)}
                        >
                            -
                        </button> {productInCart.quantity}
                        <button
                            disabled={product.inventory === productInCart.quantity}
                            onClick={() => increaseQuantity(product)}
                        >
                            +
                        </button>
                    </div>
                )
                    : (
                        <button
                            onClick={() => addcart(product)}
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