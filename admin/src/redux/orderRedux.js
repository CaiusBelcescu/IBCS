import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: "order",
    initialState: {
      orders: [],
      isFetching: false,
      error: false,
    },
    reducers: {
        getOrderStart: (state) => {
        state.isFetching = true;
        state.error = false;
      },
      getOrderSuccess: (state, action) => {
        state.isFetching = false;
        state.orders = action.payload;
      },
      getOrderFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },}});

      export const {
        getOrderStart,
        getOrderSuccess,
        getOrderFailure,
        deleteOrderStart,
        deleteOrderSuccess,
        deleteOrderFailure,
        updateOrderStart,
        updateOrderSuccess,
        updateOrderFailure,
      } = orderSlice.actions;
      
      export default orderSlice.reducer;