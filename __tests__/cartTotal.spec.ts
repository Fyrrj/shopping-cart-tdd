import cartTotal from "../src/shoppingCart";

const total = cartTotal([]);

describe("cartTotal", () => {
  it("should return 0 if cart is empty", () => {
    expect(total).toEqual(0);
  });
  it("should return sum of all product values in cart", () => {
    expect(total).toBeGreaterThan(0);
  });
});
