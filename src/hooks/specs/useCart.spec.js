import { describe } from "@jest/globals";
import { renderHook, act } from "@testing-library/react-hooks";
import useCart from "../useCart";

describe("useCart", () => {
    it("should return an empty array of cart", () => {
        const { result } = renderHook(() => useCart());
        expect(result.current.cart).toEqual([]);
    });

    it("should add a product to the cart", () => {
        const { result } = renderHook(() => useCart());
        const product = {
            id: 1,
            title: "Test Product",
            price: 9.99,
            inventory: 1
        };
        act(() => {
            result.current.addToCart(product);
        });
        expect(result.current.cart[0].inventory).toEqual(0);
        expect(result.current.cart[0].title).toEqual("Test Product");
        expect(result.current.cart[0].price).toEqual(9.99);
        expect(result.current.cart[0].quantity).toEqual(1);
    });

    it("should remove a product from the cart", () => {
        const { result } = renderHook(() => useCart());
        const product = {
            id: 1,
            title: "Test Product",
            price: 9.99,
            inventory: 1
        };
        act(() => {
            result.current.addToCart(product);
        });
        act(() => {
            result.current.removeFromCart(product);
        });
        expect(result.current.cart).toEqual([]);
    });

    it("should empty the cart", () => {
        const { result } = renderHook(() => useCart());
        const product = {
            id: 1,
            title: "Test Product",
            price: 9.99,
            inventory: 1
        };
        act(() => {
            result.current.addToCart(product);
        });
        act(() => {
            result.current.emptyCart();
        });
        expect(result.current.cart).toEqual([]);
    });

    it("should return the correct number of items in the cart", () => {
        const { result } = renderHook(() => useCart());
        const product = {
            id: 1,
            title: "Test Product",
            price: 9.99,
            inventory: 1
        };
        act(() => {
            result.current.addToCart(product);
        });

        let cartLenght = 0;
        act(() => {
            cartLenght = result.current.getCartLength();
        });
        expect(cartLenght).toEqual(1);
    });

    it("should increase the quantity of a product in the cart", () => {
        const { result } = renderHook(() => useCart());
        const product = {
            id: 1,
            title: "Test Product",
            price: 9.99,
            inventory: 1
        };
        act(() => {
            result.current.addToCart(product);
        });
        act(() => {
            result.current.increaseQuantity(product);
        });
        act(() => {
            result.current.increaseQuantity(product);
        });
        expect(result.current.cart[0].quantity).toEqual(3);
    });

    it("should decrease the quantity of a product in the cart", () => {
        const { result } = renderHook(() => useCart());
        const product = {
            id: 1,
            title: "Test Product",
            price: 9.99,
            inventory: 1
        };
        act(() => {
            result.current.addToCart(product);
        });
        act(() => {
            result.current.increaseQuantity(product);
        });
        act(() => {
            result.current.increaseQuantity(product);
        });
        act(() => {
            result.current.decreaseQuantity(product);
        });
        expect(result.current.cart[0].quantity).toEqual(2);
    });
}
);
