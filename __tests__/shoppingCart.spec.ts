import {
  handleAddProduct,
  handleCartTotal,
  handleProducts,
  handleRemoveProduct,
} from "../src/shoppingCart";

const products = handleProducts();

const addedProduct = {
  id: 3,
  name: "smartphone",
  price: 400,
};

const newProducts: Array<{ id: number; name: string; price: number }> =
  handleAddProduct(products, addedProduct);

const total = handleCartTotal([]);
const total2 = handleCartTotal(products);

const productsAfterRemove: Array<{ id: number; name: string; price: number }> =
  handleRemoveProduct(products, 2);

describe("cartTotal", () => {
  it("should return 0 if cart is empty", () => {
    expect(total).toEqual(0);
  });
  it("should return sum of all product values in cart", () => {
    expect(total2).toBeGreaterThan(0);
    expect(total2).toEqual(570);
  });
});

describe("addToCart", () => {
  it("should add product to cart", () => {
    expect(newProducts).toEqual([
      {
        id: 0,
        name: "ball",
        price: 10,
      },
      {
        id: 1,
        name: "boots",
        price: 125,
      },
      {
        id: 2,
        name: "gloves",
        price: 35,
      },
      addedProduct,
    ]);
  });
});

describe("remove product id = 2 from cart", () => {
  it("should remove product id = 2 from cart", () => {
    expect(productsAfterRemove).toEqual([
      {
        id: 0,
        name: "ball",
        price: 10,
      },
      {
        id: 1,
        name: "boots",
        price: 125,
      },
      {
        id: 3,
        name: "smartphone",
        price: 400,
      },
    ]);
  });
});
