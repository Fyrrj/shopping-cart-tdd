describe("cartTotal", () => {
  it("should return 0 if cart is empty", () => {
    expect(cartTotal().toEqual(0));
  });
});
