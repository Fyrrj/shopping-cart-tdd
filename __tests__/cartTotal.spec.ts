import cartTotal from "../src/shoppingCart";

const total = cartTotal([]);
const total2 = cartTotal([
  {
    name: "ball",
    price: 10,
  },
  {
    name: "boots",
    price: 125,
  },
  {
    name: "gloves",
    price: 35,
  },
]);

describe("cartTotal", () => {
  it("should return 0 if cart is empty", () => {
    expect(total).toEqual(0);
  });
  it("should return sum of all product values in cart", () => {
    expect(total2).toBeGreaterThan(0);
    expect(total2).toEqual(170);
  });
});
