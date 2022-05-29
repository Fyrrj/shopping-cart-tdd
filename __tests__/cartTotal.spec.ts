import cartTotal from "../src/shoppingCart";

const total = cartTotal([]);
const total2 = cartTotal([
  {
    name: "ball",
    price: 10,
  },
]);

describe("cartTotal", () => {
  it("should return 0 if cart is empty", () => {
    expect(total).toEqual(0);
  });
  it("should return sum of all product values in cart", () => {
    expect(total2).toBeGreaterThan(0);
  });
});
