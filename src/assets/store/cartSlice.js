import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem(state, action) {
        state.push(action.payload)
    },
    removeItem(state, action) {
      let newProduct = state.filter(pp=>pp.id!==action.payload)
      return newProduct
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions; // 👈 export this!
export default cartSlice.reducer;
