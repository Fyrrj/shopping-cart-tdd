import cartTotal from "../src/shoppingCart";

const products = [
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
];

const newProducts: Array<{ name: string; price: number }> = [];

const total = cartTotal([]);
const total2 = cartTotal(products);

describe("cartTotal", () => {
  it("should return 0 if cart is empty", () => {
    expect(total).toEqual(0);
  });
  it("should return sum of all product values in cart", () => {
    expect(total2).toBeGreaterThan(0);
    expect(total2).toEqual(170);
  });
});

describe("addToCart", () => {
  it("should add product to cart", () => {
    expect(newProducts).toEqual([
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
      addedProduct,
    ]);
  });
});
