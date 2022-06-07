export function handleProducts() {
  return [
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
  ];
}

export function handleAddProduct(
  products: Array<{
    id: number;
    name: string;
    price: number;
  }>,
  newProduct: { id: number; name: string; price: number }
) {
  products.push(newProduct);
  return products;
}

export function handleRemoveProduct(
  products: Array<{
    id: number;
    name: string;
    price: number;
  }>,
  removedProductId: number
) {
  const newProducts = products.filter(
    (product) => product.id !== removedProductId
  );
  console.log(newProducts);
  return newProducts;
}

export function handleCartTotal(
  cart: Array<{
    id: number;
    name: string;
    price: number;
  }>
) {
  let total: number;
  if (cart.length === 0) {
    total = 0;
    return total;
  } else {
    total = cart.reduce((sum, { price }: { price: number }) => sum + price, 0);
    return total;
  }
}
