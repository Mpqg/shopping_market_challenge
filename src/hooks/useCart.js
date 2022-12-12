import { useState } from 'react';
import useProducts from './useProducts';
export default function useCart() {
    const [cart, setCart] = useState([]);
    const { products, drawFromInventory, putBackInInventory } = useProducts();

    const addToCart = (product) => {
        const updatedProduct = drawFromInventory(product);
        updatedProduct.quantity = 1;
        setCart((cart) => {
            return [...cart, updatedProduct];
        });
    };

    const removeFromCart = (product) => {
        setCart((cart) => {
            return cart.filter((item) => item.id !== product.id);
        });
        putBackInInventory(product);
    };

    const emptyCart = () => {
        cart.forEach((product) => {
            putBackInInventory(product);
        });
        setCart([]);

    };

    const getCartLength = () => {
        return cart.reduce((total, product) => {
            return total + product.quantity;
        }, 0);
    };

    const increaseQuantity = (product) => {
        drawFromInventory(product);
        setCart((cart) => {
            return cart.map((item) => {
                if (item.id === product.id) {
                    item.quantity = item.quantity + 1;
                    return item;
                }
                return item;
            });
        });
    };

    const decreaseQuantity = (product) => {
        putBackInInventory(product);
        setCart((cart) => {
            return cart.map((item) => {
                if (item.id === product.id) {
                    item.quantity = item.quantity - 1;
                    return item;
                }
                return item;
            });
        });
    };

    return {
        cart,
        addToCart,
        removeFromCart,
        emptyCart,
        getCartLength,
        increaseQuantity,
        decreaseQuantity
    };
}
