const cartTotal = (
  cart: Array<{
    name: string;
    price: number;
  }>
) => {
  let total: number;
  if (cart.length === 0) {
    total = 0;
    return total;
  } else {
    total = cart.reduce((sum, { price }: { price: number }) => sum + price, 0);
    return total;
  }
};

export default cartTotal;
