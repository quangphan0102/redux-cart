import { createSlice } from "@reduxjs/toolkit";

const intialProductState = {
  products: [
    {
      id: Math.random() * 1000,
      title: "Bag",
      description: "This is a first product - amazing!",
      price: 6.0,
    },
    {
      id: Math.random() * 1000,
      title: "T-shirt",
      description: "This is a second product - amazing!",
      price: 16.0,
    },
    {
      id: Math.random() * 1000,
      title: "Veston",
      description: "This is a third product - amazing!",
      price: 12.0,
    },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState: intialProductState,
  reducers: {},
});

export const productActions = productSlice.actions;

export default productSlice.reducer;
