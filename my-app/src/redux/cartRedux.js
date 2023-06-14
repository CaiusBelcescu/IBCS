import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteProduct: (state, action) => {
      const { id, price, quantity } = action.payload;
      state.quantity -= 1;
      state.products = state.products.filter((product) => product.id !== id);
      state.total -= price * quantity;
    },
    updateProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { addProduct, deleteProduct, updateProducts } = cartSlice.actions;
export default cartSlice.reducer;
