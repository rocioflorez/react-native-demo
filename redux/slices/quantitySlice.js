import { createSlice } from "@reduxjs/toolkit";

const initialState = '';

export const quantitySlice = createSlice({
  name: 'quantity',
  initialState: initialState,
  reducers: {
    setQuantity: (state, action) => {
      return action.payload;
    },
  },
});

export const { setQuantity } = quantitySlice.actions;

export default quantitySlice.reducer;



