import { useCallback, useState } from 'react';
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

    const increaseQuantity = useCallback((product) => {
        drawFromInventory(product);
        const updatedCart = cart.map((item) => {
            if (item.id === product.id) {
                item.quantity = item.quantity + 1;
                return item;
            }
            return item;
        });
        setCart(updatedCart);
    }, [drawFromInventory, cart]);

    const decreaseQuantity = (product) => {
        putBackInInventory(product);
        const updatedCart = cart.map((item) => {
            if (item.id === product.id) {
                item.quantity = item.quantity - 1 || 0;
                return item;
            }
            return item;
        }).filter((item) => item.quantity > 0);

        setCart(updatedCart);
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