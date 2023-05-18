import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../slices/userSlice';
import quantityReducer from '../slices/quantitySlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    quantity: quantityReducer,
  }
});

export default store;
