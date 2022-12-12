import { describe } from "@jest/globals";
import { renderHook , act} from "@testing-library/react-hooks";
import useProducts from "../useProducts";

describe("useProducts", () => {
    it("should return an empty array of products", () => {
        const { result } = renderHook(() => useProducts());
        expect(result.current.products).toEqual([]);
    });

    it("should draw from inventory", () => {
        const { result } = renderHook(() => useProducts());
        const product = {
            id: 1,
            title: "Test Product",
            price: 9.99,
            inventory: 1
        };
        act(() => {
            result.current.setProducts([product]);
        });
        act(() => {
            result.current.drawFromInventory(product);
        });
        expect(result.current.products[0].inventory).toEqual(0);
        expect(result.current.products[0].title).toEqual("Test Product");
        expect(result.current.products[0].price).toEqual(9.99);
    });

    it("should put back in inventory", () => {
        const { result } = renderHook(() => useProducts());
        const product = {
            id: 1,
            title: "Test Product",
            price: 9.99,
            inventory: 1,
            quantity: 2
        };
        act(() => {
            result.current.setProducts([product]);
        });
        act(() => {
            result.current.drawFromInventory(product);
        });
        act(() => {
            result.current.putBackInInventory(product);
        });
        expect(result.current.products[0].inventory).toEqual(3);
        expect(result.current.products[0].title).toEqual("Test Product");
        expect(result.current.products[0].price).toEqual(9.99);
        expect (result.current.products[0].quantity).toEqual(0);
    });
}
);
