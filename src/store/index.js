import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features";

export const store = configureStore({
  reducer: { authReducer },
});
