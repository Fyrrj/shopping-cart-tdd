import cartTotal from "../src/shoppingCart";

const total = cartTotal([]);

describe("cartTotal", () => {
  it("should return 0 if cart is empty", () => {
    expect(total).toEqual(0);
  });
});
