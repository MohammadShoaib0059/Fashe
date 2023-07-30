import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};
const CartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      // state.cart.push(action.payload);
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    remove(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = CartSlicer.actions;
export default CartSlicer.reducer;

// A function that accepts 'slice name' is called Slice. its is the function that contain object
//  with some properties like(name,initialstate,reducer).it can contain multiple micro reducer function.
// it automatically generates action creators and action type that correspond to the reducers and state.
