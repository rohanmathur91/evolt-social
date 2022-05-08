import { configureStore } from "@reduxjs/toolkit";
import { authReducer, postReducer } from "../features";

export const store = configureStore({
  reducer: { auth: authReducer, posts: postReducer },
});
