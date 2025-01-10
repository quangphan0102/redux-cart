import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [], isCartOpen: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const item = action.payload;

      const existingCartItemIndex = state.cart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (existingCartItemIndex > -1) {
        state.cart[existingCartItemIndex].quantity++;
      } else {
        state.cart.push({ ...item, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingCartItemIndex = state.cart.findIndex(
        (item) => item.id === id
      );

      const existingCartItem = state.cart[existingCartItemIndex];

      if (existingCartItem.quantity === 1) {
        state.cart.splice(existingCartItemIndex, 1);
      } else {
        state.cart[existingCartItemIndex].quantity--;
      }
    },
    toggleCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
