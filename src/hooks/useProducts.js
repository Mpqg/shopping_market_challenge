import { useState, useEffect } from 'react';
export default function useProducts() {
    const [products, setProducts] = useState([]);

    const drawFromInventory = (product) => {
        if (product.inventory > 0) {
            const updatedProduct = {
                ...product,
                inventory: product.inventory - 1
            };
            setProducts((products) => {
                return products.map((product) => {
                    if (product.id === updatedProduct.id) {
                        return updatedProduct;
                    }
                    return product;
                });
            });
            return updatedProduct;
        }
    };

    const putBackInInventory = (product) => {
        const updatedProduct = {
            ...product,
            inventory: product.inventory + product.quantity,
            quantity: 0
        };
        setProducts((products) => {
            return products.map((product) => {
                if (product.id === updatedProduct.id) {
                    return updatedProduct;
                }
                return product;
            });
        });
        return updatedProduct;
    };

    useEffect(() => {
        setProducts([]);
    }, []);

    return { products, drawFromInventory , putBackInInventory, setProducts};
}